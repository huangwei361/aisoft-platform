/* ============================================================
   AI SOFT 平台 · 通用交互
   应用广场：筛选 / 详情 / 购物车 / 下单
   需求广场：筛选 / 承接意向
   商城广场：筛选 / 担保下单 / 发布
   ============================================================ */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const money = n => '¥' + Number(n).toLocaleString('zh-CN');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    }
  };

  const CART_KEY = 'aisoft_cart_v1';
  const BID_KEY = 'aisoft_bids_v1';
  const MY_DEMAND_KEY = 'aisoft_my_demands_v1';
  const MY_MALL_KEY = 'aisoft_my_mall_v1';

  /* ---------- 注入弹窗 / 抽屉 / 提示 ---------- */
  document.body.insertAdjacentHTML('beforeend', `
    <div class="overlay" id="modalOverlay">
      <div class="modal" id="modal" role="dialog" aria-modal="true"></div>
    </div>
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <aside class="drawer" id="cartDrawer" aria-label="购物车">
      <div class="drawer-head">
        <h3>购物车</h3>
        <button class="modal-close" data-drawer-close aria-label="关闭">×</button>
      </div>
      <div class="drawer-body" id="cartBody"></div>
      <div class="drawer-foot" id="cartFoot"></div>
    </aside>
    <div class="toast-wrap" id="toastWrap"></div>
  `);

  const modalOverlay = $('#modalOverlay');
  const modal = $('#modal');
  const drawer = $('#cartDrawer');
  const drawerOverlay = $('#drawerOverlay');

  function lockScroll() {
    const open = modalOverlay.classList.contains('open') || drawer.classList.contains('open');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  function openModal({ title, subtitle = '', body = '', foot = '' }) {
    modal.innerHTML = `
      <div class="modal-head">
        <div><h3>${title}</h3>${subtitle ? `<p>${subtitle}</p>` : ''}</div>
        <button class="modal-close" data-close aria-label="关闭">×</button>
      </div>
      <div class="modal-body">${body}</div>
      ${foot ? `<div class="modal-foot">${foot}</div>` : ''}`;
    modalOverlay.classList.add('open');
    lockScroll();
  }
  function closeModal() {
    modalOverlay.classList.remove('open');
    lockScroll();
  }
  function openDrawer() {
    renderCart();
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
    lockScroll();
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    lockScroll();
  }
  function toast(msg) {
    const wrap = $('#toastWrap');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="tick">✓</span><span>${esc(msg)}</span>`;
    wrap.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2600);
    setTimeout(() => el.remove(), 3000);
  }

  /* ---------- 购物车 ---------- */
  function getCart() { return store.get(CART_KEY, {}); }
  function cartQty() { return Object.values(getCart()).reduce((a, b) => a + b, 0); }
  function saveCart(cart) {
    store.set(CART_KEY, cart);
    updateCartBadge();
  }
  function updateCartBadge() {
    $$('.cart-count').forEach(el => {
      const n = cartQty();
      el.textContent = n;
      el.classList.toggle('show', n > 0);
    });
  }
  function addToCart(id) {
    const cart = getCart();
    cart[id] = (cart[id] || 0) + 1;
    saveCart(cart);
    toast('已加入购物车');
  }
  function renderCart() {
    const cart = getCart();
    const body = $('#cartBody');
    const foot = $('#cartFoot');
    const items = Object.keys(cart).map(id => {
      const app = window.APPS.find(a => a.id === id);
      return app ? { app, qty: cart[id] } : null;
    }).filter(Boolean);

    if (!items.length) {
      body.innerHTML = `<div class="cart-empty"><b>购物车还是空的</b>去应用广场挑选适合的官方应用吧</div>`;
      foot.innerHTML = `<a class="btn btn-ghost btn-block" href="apps.html">去应用广场</a>`;
      return;
    }
    body.innerHTML = items.map(({ app, qty }) => `
      <div class="cart-item">
        <div class="ct" style="background:linear-gradient(135deg,${app.colors[0]},${app.colors[1]})">${app.mark}</div>
        <div style="flex:1;min-width:0">
          <h4>${esc(app.name)}</h4>
          <div class="ci-price">${app.price ? money(app.price) + app.unit : '面议'}</div>
          <div class="cart-line">
            <div class="qty">
              <button data-cart-op="minus" data-id="${app.id}" aria-label="减少">−</button>
              <span>${qty}</span>
              <button data-cart-op="plus" data-id="${app.id}" aria-label="增加">+</button>
            </div>
            <button class="cart-remove" data-cart-op="remove" data-id="${app.id}">移除</button>
          </div>
        </div>
      </div>`).join('');
    const total = items.reduce((sum, { app, qty }) => sum + (app.price || 0) * qty, 0);
    const totalText = total > 0 ? money(total) : '面议';
    foot.innerHTML = `
      <div class="cart-total"><span>合计（含首年服务）</span><b>${totalText}</b></div>
      <button class="btn btn-primary btn-block" data-checkout>提交采购需求</button>
      <div class="form-hint">演示环境不产生真实支付。提交后由营销组对接合同与交付排期。</div>`;
  }

  /* ---------- 应用广场 ---------- */
  const appState = { cat: 'all', q: '', sort: 'rec' };

  function appCard(a) {
    return `<article class="app-card">
      <div class="app-cover" style="--c1:${a.colors[0]};--c2:${a.colors[1]}">
        <span class="cat">${esc(a.catLabel)}</span>
        <span class="badge">${esc(a.badge)}</span>
        <span class="mark">${esc(a.mark)}</span>
      </div>
      <div class="app-body">
        <h3>${esc(a.name)}</h3>
        <p class="app-desc">${esc(a.desc)}</p>
        <div class="app-tags">${a.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="app-meta">
          <div class="price"><b>${a.price ? money(a.price) : '面议'}</b>${a.price ? `<span>${esc(a.unit)}</span>` : ''}</div>
          <span class="rating">★ <b>${a.rating}</b> · ${a.sales} 家采购</span>
        </div>
        <div class="app-foot">
          <button class="btn btn-ghost btn-sm" data-app-detail="${a.id}">查看详情</button>
          <button class="btn btn-primary btn-sm" data-add-cart="${a.id}">加入购物车</button>
        </div>
      </div>
    </article>`;
  }

  function filteredApps() {
    let list = window.APPS.slice();
    if (appState.cat !== 'all') list = list.filter(a => a.cat === appState.cat);
    const q = appState.q.trim().toLowerCase();
    if (q) {
      list = list.filter(a => (a.name + a.desc + a.catLabel + a.tags.join('')).toLowerCase().includes(q));
    }
    if (appState.sort === 'price') list.sort((a, b) => (a.price || 1e12) - (b.price || 1e12));
    if (appState.sort === 'sales') list.sort((a, b) => b.sales - a.sales);
    return list;
  }

  function renderApps() {
    const grid = $('#appGrid');
    if (!grid) return;
    const list = filteredApps();
    grid.innerHTML = list.length
      ? list.map(appCard).join('')
      : `<div class="empty" style="grid-column:1/-1"><b>没有匹配的应用</b><p>换个关键词或分类试试，也可以直接发布需求让我们为你定制。</p></div>`;
    const count = $('#appCount');
    if (count) count.textContent = `共 ${list.length} 个官方应用`;
  }

  function renderFeaturedApps() {
    const grid = $('#featuredApps');
    if (!grid) return;
    grid.innerHTML = window.APPS.slice(0, 3).map(appCard).join('');
  }

  function openAppDetail(id) {
    const a = window.APPS.find(x => x.id === id);
    if (!a) return;
    openModal({
      title: esc(a.name),
      subtitle: `${a.catLabel} · ${a.badge} · ${a.sales} 家企业采购`,
      body: `
        <div class="modal-cover" style="background:linear-gradient(135deg,${a.colors[0]},${a.colors[1]})">
          <h4>${esc(a.name)}</h4>
          <p>${esc(a.desc)}</p>
        </div>
        <div class="detail-block">
          <h5>核心能力</h5>
          <ul class="detail-list">${a.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
        </div>
        <div class="detail-kv">
          <div class="kv"><span>交付方式</span><b>私有化 / 混合云</b></div>
          <div class="kv"><span>实施周期</span><b>2–6 周（视场景）</b></div>
          <div class="kv"><span>服务内容</span><b>部署 + 培训 + 首年运维</b></div>
          <div class="kv"><span>评价</span><b>★ ${a.rating} / 5.0</b></div>
        </div>
        <div class="price-line"><b>${a.price ? money(a.price) : '面议'}</b><span>${a.price ? esc(a.priceNote || '') : '按规模与部署方式报价'}</span></div>
        <div class="sim-note">演示环境：价格为示意，真实采购以合同与实施范围为准。</div>`,
      foot: `<button class="btn btn-ghost" data-close>关闭</button>
             <button class="btn btn-primary" data-add-cart="${a.id}">加入购物车</button>`
    });
  }

  /* ---------- 需求广场 ---------- */
  const demandState = { cat: 'all', q: '' };

  function myDemands() { return store.get(MY_DEMAND_KEY, []); }

  function demandCard(d) {
    const bids = store.get(BID_KEY, {});
    const signed = !!bids[d.id];
    const statusCls = d.status === '已定标' ? 'done' : (d.status === '待评估' ? 'hot' : '');
    return `<article class="demand-card">
      <div>
        <div class="d-head">
          <h3>${esc(d.title)}</h3>
          <span class="status ${statusCls}">${esc(d.status)}</span>
          ${d.hot ? '<span class="status hot">急单</span>' : ''}
        </div>
        <div class="d-tags">${d.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <p class="d-desc">${esc(d.desc)}</p>
        <div class="meta-row">
          <span>发布方：<b>${esc(d.company)}</b></span>
          <span>行业：<b>${esc(d.industry)}</b></span>
          <span>合作方式：<b>${esc(d.type)}</b></span>
          <span>周期：<b>${esc(d.cycle)}</b></span>
          <span>已投标：<b>${d.bids} 家</b></span>
          <span>发布于 ${esc(d.published)}</span>
        </div>
      </div>
      <div class="d-side">
        <div class="budget"><b>${esc(d.budget)}</b><span>项目预算</span></div>
        <button class="btn btn-primary btn-sm" data-demand-detail="${d.id}" ${signed ? 'disabled' : ''}>
          ${signed ? '已提交意向' : (d.status === '已定标' ? '查看结果' : '承接 / 投标')}
        </button>
        <div class="d-note">${d.status === '已定标' ? '已完成定标，可查看归档' : '由营销组统一对接'}</div>
      </div>
    </article>`;
  }

  function allDemands() {
    const local = myDemands().map(d => ({
      id: d.id, title: d.title, company: d.company || '我的企业', industry: d.industry,
      type: d.type || '项目制', budget: d.budget || '面议', cycle: d.cycle || '待评估',
      desc: d.desc, tags: ['新发布', '待评估'], bids: 0, status: '待评估', hot: false, published: '今天'
    }));
    return local.concat(window.DEMANDS);
  }

  function filteredDemands() {
    let list = allDemands();
    if (demandState.cat !== 'all') list = list.filter(d => d.industry === demandState.cat);
    const q = demandState.q.trim().toLowerCase();
    if (q) list = list.filter(d => (d.title + d.company + d.desc + d.tags.join('') + d.industry).toLowerCase().includes(q));
    return list;
  }

  function renderDemands() {
    const listEl = $('#demandList');
    if (!listEl) return;
    const list = filteredDemands();
    listEl.innerHTML = list.length
      ? list.map(demandCard).join('')
      : `<div class="empty"><b>暂无匹配需求</b><p>提交一个需求，需求组会在 1 个工作日内评估。</p></div>`;
    const count = $('#demandCount');
    if (count) count.textContent = `共 ${list.length} 个需求`;
  }

  function renderFeaturedDemands() {
    const listEl = $('#featuredDemands');
    if (!listEl) return;
    listEl.innerHTML = window.DEMANDS.slice(0, 3).map(demandCard).join('');
  }

  function openDemandDetail(id) {
    const d = allDemands().find(x => x.id === id);
    if (!d) return;
    const bids = store.get(BID_KEY, {});
    const signed = !!bids[d.id];
    const scope = d.scope || ['需求评估与方案设计', '开发与联调', '上线验收与培训', '运营期效果复盘'];
    const req = d.requirement || ['具备对应行业交付经验', '可提供项目案例', '支持合同约定的验收标准'];
    openModal({
      title: esc(d.title),
      subtitle: `${esc(d.company)} · ${esc(d.industry)} · ${esc(d.status)}`,
      body: `
        <div class="detail-kv">
          <div class="kv"><span>项目预算</span><b>${esc(d.budget)}</b></div>
          <div class="kv"><span>交付周期</span><b>${esc(d.cycle)}</b></div>
          <div class="kv"><span>合作方式</span><b>${esc(d.type)}</b></div>
          <div class="kv"><span>当前投标</span><b>${d.bids} 家供应商</b></div>
        </div>
        <div class="detail-block"><h5>需求背景</h5><p>${esc(d.desc)}</p></div>
        <div class="detail-block"><h5>交付范围</h5><ul class="detail-list">${scope.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
        <div class="detail-block"><h5>供应商要求</h5><ul class="detail-list">${req.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
        <div class="sim-note">官方订单由需求组评估、开发组拆解、营销组发布与对接；投标信息同步至供应商后台。</div>`,
      foot: `<button class="btn btn-ghost" data-close>关闭</button>
        ${signed
          ? '<button class="btn btn-primary" disabled>已提交承接意向</button>'
          : (d.status === '已定标'
            ? '<button class="btn btn-ghost" disabled>已定标</button>'
            : `<button class="btn btn-primary" data-bid="${d.id}">提交承接意向</button>`)}`
    });
  }

  function openBidForm(id) {
    const d = allDemands().find(x => x.id === id);
    if (!d) return;
    openModal({
      title: '提交承接意向',
      subtitle: `${esc(d.title)} · 预算 ${esc(d.budget)} · 周期 ${esc(d.cycle)}`,
      body: `
        <form id="bidForm" novalidate>
          <div class="form-grid">
            <div class="form-row"><label>公司名称<em>*</em></label><input class="input" name="company" required placeholder="供应商主体名称"></div>
            <div class="form-row"><label>联系人<em>*</em></label><input class="input" name="contact" required placeholder="姓名"></div>
            <div class="form-row"><label>联系电话<em>*</em></label><input class="input" name="phone" required placeholder="手机号或座机"></div>
            <div class="form-row"><label>报价（万元）</label><input class="input" name="quote" type="number" min="0" step="0.5" placeholder="如 42"></div>
          </div>
          <div class="form-row"><label>承接方案简述<em>*</em></label><textarea class="textarea" name="plan" required placeholder="交付思路、相关案例、团队配置与排期"></textarea></div>
          <div class="form-hint">提交后由营销组在 1 个工作日内联系，需求组与开发组共同参与评标。</div>
          <div class="sim-note">演示环境：信息仅保存在本机浏览器，不会真实发送。</div>
        </form>`,
      foot: `<button class="btn btn-ghost" data-close>取消</button>
             <button class="btn btn-primary" data-submit-bid="${d.id}">提交意向</button>`
    });
  }

  /* ---------- 商城广场 ---------- */
  const mallState = { type: 'all', q: '' };

  function allMall() {
    const local = store.get(MY_MALL_KEY, []);
    return local.concat(window.MALL);
  }

  function mallCard(m) {
    const isNeed = m.type === 'need';
    const rating = m.rating ? `★ ${m.rating} · ${m.deals} 笔成交` : `${m.deals} 条响应`;
    return `<article class="mall-card">
      <div class="mall-top">
        <span class="mall-type ${isNeed ? 'need' : 'supply'}">${isNeed ? '需求合作' : '服务供给'}</span>
        <span class="verified" style="${isNeed ? 'background:#fff7ed;color:#c2410c;border-color:#ffedd5' : ''}">${isNeed ? '需求方' : '认证服务商'}</span>
      </div>
      <h3><a href="#" data-mall-detail="${m.id}" style="color:inherit">${esc(m.title)}</a></h3>
      <p class="mdesc">${esc(m.desc)}</p>
      <div class="app-tags">${m.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="provider">
        <span class="avatar">${esc(m.provider.slice(0, 1))}</span>
        <span>${esc(m.provider)}</span>
        ${m.verified ? '<span class="verified">已认证</span>' : ''}
        <span style="margin-left:auto">${esc(m.delivery)}</span>
      </div>
      <div class="mall-foot">
        <div class="mall-price"><b>${esc(m.price)}</b> <span>${esc(m.priceNote)}</span></div>
        <div class="mall-rating">${rating}<br>担保交易</div>
      </div>
      <div class="card-actions">
        <button class="btn btn-ghost btn-sm" data-mall-detail="${m.id}">查看详情</button>
        <button class="btn btn-primary btn-sm" data-mall-buy="${m.id}" ${isNeed ? 'data-need="1"' : ''}>${isNeed ? '提交合作意向' : '立即下单'}</button>
      </div>
    </article>`;
  }

  function filteredMall() {
    let list = allMall();
    if (mallState.type !== 'all') list = list.filter(m => m.type === mallState.type);
    const q = mallState.q.trim().toLowerCase();
    if (q) list = list.filter(m => (m.title + m.provider + m.desc + m.tags.join('')).toLowerCase().includes(q));
    return list;
  }

  function renderMall() {
    const grid = $('#mallGrid');
    if (!grid) return;
    const list = filteredMall();
    grid.innerHTML = list.length
      ? list.map(mallCard).join('')
      : `<div class="empty" style="grid-column:1/-1"><b>暂无匹配交易</b><p>发布一条供给或需求，让对的人找到你。</p></div>`;
    const count = $('#mallCount');
    if (count) count.textContent = `共 ${list.length} 条交易`;
  }

  function renderFeaturedMall() {
    const grid = $('#featuredMall');
    if (!grid) return;
    grid.innerHTML = window.MALL.slice(0, 3).map(mallCard).join('');
  }

  function openMallDetail(id) {
    const m = allMall().find(x => x.id === id);
    if (!m) return;
    const isNeed = m.type === 'need';
    openModal({
      title: esc(m.title),
      subtitle: `${esc(m.provider)} · ${isNeed ? '需求合作' : '服务供给'} · 担保交易`,
      body: `
        <div class="detail-block"><h5>说明</h5><p>${esc(m.desc)}</p></div>
        <div class="detail-kv">
          <div class="kv"><span>价格</span><b>${esc(m.price)} ${esc(m.priceNote)}</b></div>
          <div class="kv"><span>交付周期</span><b>${esc(m.delivery)}</b></div>
          <div class="kv"><span>交易方式</span><b>平台担保 · 验收放款</b></div>
          <div class="kv"><span>服务方</span><b>${esc(m.provider)}</b></div>
        </div>
        <div class="detail-block"><h5>平台保障</h5><ul class="detail-list">
          <li>资金由平台托管，按里程碑验收后释放</li>
          <li>交付物与验收标准写入电子合同</li>
          <li>争议由平台介入协调，支持部分退款</li>
        </ul></div>`,
      foot: `<button class="btn btn-ghost" data-close>关闭</button>
        <button class="btn btn-primary" data-mall-buy="${m.id}" ${isNeed ? 'data-need="1"' : ''}>${isNeed ? '提交合作意向' : '立即下单'}</button>`
    });
  }

  function openMallBuy(id, isNeed) {
    const m = allMall().find(x => x.id === id);
    if (!m) return;
    openModal({
      title: isNeed ? '提交合作意向' : '确认下单',
      subtitle: `${esc(m.title)} · ${esc(m.price)} ${esc(m.priceNote)}`,
      body: `
        <form id="mallBuyForm">
          <div class="form-grid">
            <div class="form-row"><label>公司名称<em>*</em></label><input class="input" name="company" required placeholder="采购或合作主体"></div>
            <div class="form-row"><label>联系人<em>*</em></label><input class="input" name="contact" required placeholder="姓名"></div>
            <div class="form-row"><label>联系电话<em>*</em></label><input class="input" name="phone" required placeholder="手机号"></div>
            <div class="form-row"><label>期望交付时间</label><input class="input" name="date" type="date"></div>
          </div>
          <div class="form-row"><label>补充说明</label><textarea class="textarea" name="note" placeholder="验收标准、交付环境或其他要求"></textarea></div>
          ${isNeed ? '' : `<div class="sim-note">下单后资金进入平台托管，营销组会在 1 个工作日内完成合同与排期确认。</div>`}
          <div class="sim-note">演示环境：不会产生真实支付与合同。</div>
        </form>`,
      foot: `<button class="btn btn-ghost" data-close>取消</button>
             <button class="btn btn-primary" data-submit-mall="${m.id}" data-kind="${isNeed ? 'need' : 'supply'}">${isNeed ? '提交意向' : '确认下单'}</button>`
    });
  }

  function openPublishMall() {
    openModal({
      title: '发布交易',
      subtitle: '发布服务供给或需求合作，营销组审核后上架',
      body: `
        <form id="publishMallForm">
          <div class="form-row"><label>标题<em>*</em></label><input class="input" name="title" required placeholder="如：AI 应用 UI/UX 设计外包"></div>
          <div class="form-grid">
            <div class="form-row"><label>类型<em>*</em></label>
              <select class="select-full" name="type">
                <option value="supply">服务供给（我提供服务）</option>
                <option value="need">需求合作（我发需求）</option>
              </select>
            </div>
            <div class="form-row"><label>价格 / 预算<em>*</em></label><input class="input" name="price" required placeholder="如 ¥8,000 起 或 20–30 万"></div>
            <div class="form-row"><label>发布方<em>*</em></label><input class="input" name="provider" required placeholder="公司或个人名称"></div>
            <div class="form-row"><label>交付周期</label><input class="input" name="delivery" placeholder="如 2–4 周"></div>
          </div>
          <div class="form-row"><label>说明<em>*</em></label><textarea class="textarea" name="desc" required placeholder="服务内容、交付物、验收标准或需求背景"></textarea></div>
          <div class="form-row"><label>标签</label><input class="input" name="tags" placeholder="用逗号分隔，如：设计,Figma,原型"></div>
        </form>`,
      foot: `<button class="btn btn-ghost" data-close>取消</button>
             <button class="btn btn-primary" data-submit-publish>提交审核</button>`
    });
  }

  /* ---------- 发布需求 ---------- */
  function openPublishDemand() {
    openModal({
      title: '发布需求',
      subtitle: '需求组评估后，由开发组拆解、营销组对接交付',
      body: `
        <form id="publishDemandForm">
          <div class="form-row"><label>需求标题<em>*</em></label><input class="input" name="title" required placeholder="如：产线视觉质检试点"></div>
          <div class="form-grid">
            <div class="form-row"><label>企业名称<em>*</em></label><input class="input" name="company" required placeholder="公司 / 机构名称"></div>
            <div class="form-row"><label>所属行业<em>*</em></label>
              <select class="select-full" name="industry">
                <option>智能制造</option><option>零售电商</option><option>医疗健康</option><option>教育培训</option><option>其他行业</option>
              </select>
            </div>
            <div class="form-row"><label>预算范围<em>*</em></label><input class="input" name="budget" required placeholder="如 30–50 万"></div>
            <div class="form-row"><label>期望周期</label><input class="input" name="cycle" placeholder="如 8 周"></div>
            <div class="form-row"><label>合作方式</label>
              <select class="select-full" name="type"><option>项目制</option><option>场景订阅</option><option>SaaS 采购</option></select>
            </div>
            <div class="form-row"><label>联系电话<em>*</em></label><input class="input" name="phone" required placeholder="便于需求组联系"></div>
          </div>
          <div class="form-row"><label>需求描述<em>*</em></label><textarea class="textarea" name="desc" required placeholder="现有流程、痛点、数据情况与期望效果"></textarea></div>
          <div class="form-hint">提交后进入需求组评估队列，1 个工作日内反馈是否进入立项。</div>
          <div class="sim-note">演示环境：需求仅保存在本机浏览器。</div>
        </form>`,
      foot: `<button class="btn btn-ghost" data-close>取消</button>
             <button class="btn btn-primary" data-submit-demand>提交需求</button>`
    });
  }

  /* ---------- 订单 ---------- */
  function openCheckout() {
    const cart = getCart();
    const items = Object.keys(cart).map(id => window.APPS.find(a => a.id === id)).filter(Boolean);
    if (!items.length) { toast('购物车为空'); return; }
    const total = Object.keys(cart).reduce((s, id) => {
      const a = window.APPS.find(x => x.id === id);
      return s + (a && a.price ? a.price * cart[id] : 0);
    }, 0);
    const totalText = total > 0 ? money(total) : '面议';
    openModal({
      title: '提交采购需求',
      subtitle: `共 ${items.length} 款应用 · 参考合计 ${totalText}`,
      body: `
        <form id="checkoutForm">
          <div class="form-grid">
            <div class="form-row"><label>公司名称<em>*</em></label><input class="input" name="company" required placeholder="采购主体"></div>
            <div class="form-row"><label>联系人<em>*</em></label><input class="input" name="contact" required placeholder="姓名"></div>
            <div class="form-row"><label>联系电话<em>*</em></label><input class="input" name="phone" required placeholder="手机号"></div>
            <div class="form-row"><label>部署方式</label>
              <select class="select-full" name="deploy"><option>私有化部署</option><option>混合云</option><option>SaaS 订阅</option></select>
            </div>
          </div>
          <div class="form-row"><label>采购说明</label><textarea class="textarea" name="note" placeholder="期望上线时间、集成系统或其他要求"></textarea></div>
          <div class="sim-note">演示环境：提交不会产生真实订单与支付。营销组将根据清单确认合同与交付排期。</div>
        </form>`,
      foot: `<button class="btn btn-ghost" data-close>取消</button>
             <button class="btn btn-primary" data-submit-order>提交</button>`
    });
  }

  /* ---------- 事件绑定 ---------- */
  document.addEventListener('click', e => {
    const t = e.target;

    if (t.closest('.js-cart')) { e.preventDefault(); openDrawer(); return; }
    if (t.closest('[data-drawer-close]')) { closeDrawer(); return; }
    if (t.closest('[data-close]')) { closeModal(); return; }
    if (t.closest('#menuToggle')) { $('#navLinks').classList.toggle('open'); return; }

    const add = t.closest('[data-add-cart]');
    if (add) { addToCart(add.dataset.addCart); return; }

    const detail = t.closest('[data-app-detail]');
    if (detail) { openAppDetail(detail.dataset.appDetail); return; }

    const cartOp = t.closest('[data-cart-op]');
    if (cartOp) {
      const cart = getCart();
      const id = cartOp.dataset.id;
      const op = cartOp.dataset.cartOp;
      if (!cart[id]) return;
      if (op === 'plus') cart[id] += 1;
      if (op === 'minus') cart[id] = Math.max(1, cart[id] - 1);
      if (op === 'remove') delete cart[id];
      saveCart(cart);
      renderCart();
      return;
    }

    if (t.closest('[data-checkout]')) { closeDrawer(); openCheckout(); return; }

    const dDetail = t.closest('[data-demand-detail]');
    if (dDetail) { openDemandDetail(dDetail.dataset.demandDetail); return; }

    const bid = t.closest('[data-bid]');
    if (bid) { openBidForm(bid.dataset.bid); return; }

    const mDetail = t.closest('[data-mall-detail]');
    if (mDetail) { e.preventDefault(); openMallDetail(mDetail.dataset.mallDetail); return; }

    const mBuy = t.closest('[data-mall-buy]');
    if (mBuy) { openMallBuy(mBuy.dataset.mallBuy, mBuy.dataset.need === '1'); return; }

    if (t.closest('#publishDemandBtn, [data-open-demand]')) { e.preventDefault(); openPublishDemand(); return; }
    if (t.closest('#publishMallBtn, [data-publish-mall]')) { openPublishMall(); return; }

    /* 表单提交型按钮 */
    if (t.closest('[data-submit-bid]')) {
      const id = t.closest('[data-submit-bid]').dataset.submitBid;
      const form = $('#bidForm');
      if (!form || !form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const bids = store.get(BID_KEY, {});
      bids[id] = { company: data.company, contact: data.contact, phone: data.phone, quote: data.quote, plan: data.plan, at: Date.now() };
      store.set(BID_KEY, bids);
      closeModal();
      toast('承接意向已提交，营销组将在 1 个工作日内联系');
      renderDemands();
      return;
    }

    if (t.closest('[data-submit-demand]')) {
      const form = $('#publishDemandForm');
      if (!form || !form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const list = store.get(MY_DEMAND_KEY, []);
      list.unshift({
        id: 'mine-' + Date.now(), title: data.title, company: data.company, industry: data.industry,
        type: data.type, budget: data.budget, cycle: data.cycle || '待评估', desc: data.desc,
        phone: data.phone, status: '待评估', published: '今天'
      });
      store.set(MY_DEMAND_KEY, list);
      closeModal();
      toast('需求已提交，需求组将在 1 个工作日内反馈');
      if ($('#demandList')) renderDemands();
      return;
    }

    if (t.closest('[data-submit-mall]')) {
      const btn = t.closest('[data-submit-mall]');
      const form = $('#mallBuyForm');
      if (!form || !form.reportValidity()) return;
      closeModal();
      toast(btn.dataset.kind === 'need' ? '合作意向已提交，外部组将尽快匹配' : '订单已创建（担保交易），等待卖方确认');
      return;
    }

    if (t.closest('[data-submit-publish]')) {
      const form = $('#publishMallForm');
      if (!form || !form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const list = store.get(MY_MALL_KEY, []);
      list.unshift({
        id: 'mm-' + Date.now(), title: data.title, type: data.type, provider: data.provider,
        price: data.price, priceNote: data.type === 'need' ? '预算' : '起',
        delivery: data.delivery || '面议', desc: data.desc,
        tags: (data.tags || '自定义').split(/[,，]/).map(s => s.trim()).filter(Boolean).slice(0, 3),
        rating: null, deals: 0, verified: false, local: true
      });
      store.set(MY_MALL_KEY, list);
      closeModal();
      toast('已提交审核，营销组将在 1 个工作日内上架');
      if ($('#mallGrid')) renderMall();
      return;
    }

    if (t.closest('[data-submit-order]')) {
      const form = $('#checkoutForm');
      if (!form || !form.reportValidity()) return;
      store.set(CART_KEY, {});
      updateCartBadge();
      closeModal();
      toast('采购需求已提交，营销组将尽快与您联系');
      return;
    }
  });

  document.addEventListener('submit', e => e.preventDefault());

  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  drawerOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeDrawer(); }
  });

  /* 筛选与搜索 */
  function bindChips(wrapSel, onPick) {
    const wrap = $(wrapSel);
    if (!wrap) return;
    wrap.addEventListener('click', e => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      $$('.chip', wrap).forEach(c => c.classList.toggle('on', c === btn));
      onPick(btn.dataset.cat || btn.dataset.type || 'all');
    });
  }

  function bindSearch(sel, onInput) {
    const input = $(sel);
    if (!input) return;
    input.addEventListener('input', () => onInput(input.value));
  }

  function init() {
    updateCartBadge();

    // 应用广场
    if ($('#appGrid')) {
      bindChips('#appChips', v => { appState.cat = v; renderApps(); });
      bindSearch('#appSearch', v => { appState.q = v; renderApps(); });
      const sort = $('#appSort');
      if (sort) sort.addEventListener('change', () => { appState.sort = sort.value; renderApps(); });
      renderApps();
    }
    renderFeaturedApps();

    // 需求广场
    if ($('#demandList')) {
      bindChips('#demandChips', v => { demandState.cat = v; renderDemands(); });
      bindSearch('#demandSearch', v => { demandState.q = v; renderDemands(); });
      renderDemands();
    }
    renderFeaturedDemands();

    // 商城广场
    if ($('#mallGrid')) {
      bindChips('#mallChips', v => { mallState.type = v; renderMall(); });
      bindSearch('#mallSearch', v => { mallState.q = v; renderMall(); });
      renderMall();
    }
    renderFeaturedMall();
  }

  init();
})();
