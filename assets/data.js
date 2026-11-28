/* ============================================================
   演示数据：应用广场 / 需求广场 / 商城广场
   ============================================================ */
window.CATEGORIES = [
  { key: 'all', label: '全部' },
  { key: 'efficiency', label: '企业效率' },
  { key: 'manufacturing', label: '智能制造' },
  { key: 'retail', label: '零售电商' },
  { key: 'medical', label: '医疗健康' },
  { key: 'education', label: '教育培训' },
  { key: 'legal', label: '法律合规' },
  { key: 'multimodal', label: '多模态' }
];

window.APPS = [
{
    id: 'legal-ai', name: '智法通AI法律咨询', cat: 'legal', catLabel: '法律合规', mark: 'LF',
    desc: '面向个人与中小企业的 AI 法律咨询助手：小问题秒级问答并附法条依据与行动建议，复杂纠纷一键生成含事实梳理、法律依据、争议焦点、行动方案与文书模板的专题意见书；内置专题案例库、诉讼费等四类计算器与法规速查，全端适配移动设备。',
    features: ['快速问答：秒级解答 + 法条依据 + 可执行行动建议', '专题案情访谈：8步对话式追问，把案情聊清楚', '可编辑的详细情况说明：访谈整理生成，支持修改补充后再确认', '专题意见书：事实梳理 / 法律依据 / 争议焦点 / 行动方案 / 风险提示', '专题发布：用户可匿名发布专题，形成案例库公开内容', '专题案例库：用户发布 + 真实咨询案例双轨展示', '法律工具：诉讼费 / 加班费 / 借贷利息 / 经济补偿金计算器', '法规速查：高频法条按领域检索，答案可溯源'],
    tags: ['法律咨询', '专题意见书', '法规检索', '法律计算器'],
    price: 2980, unit: '/年', priceNote: '含 1 个机构账号 + 不限次 AI 问答（专业版）',
    sales: 0, rating: 4.8, badge: '新上', colors: ['#0f2847', '#c8a45c'],
    img: 'assets/img/products/legal-ai.jpg',
    demo: 'legal.html'
  },
{
    id: 'ai-music', name: 'AI 音乐音效创作平台', cat: 'multimodal', catLabel: '多模态', mark: 'MU',
    desc: '面向音乐人、UP 主与影视团队的 AI 音乐创作工作台：文字成曲、片段续写、风格迁移、音效生成与分轨导出，支持商业授权与版权登记。',
    features: ['文字成曲：10 秒生成完整编曲', '风格迁移：流行 / 古风 / 电子 / 电影配乐一键切换', '音效生成：环境音、转场音、乐器采样按描述生成', '分轨导出 + 商业授权 + 版权登记一站式'],
    tags: ['音乐生成', '音效', '多模态'],
    price: null, unit: '', priceNote: '内测中 · 欢迎预约',
    sales: 0, rating: 0, badge: '开发中', colors: ['#10b981', '#34d399'],
    comingSoon: true
  },
{
    id: 'ai-vchar', name: 'AI 虚拟角色对话', cat: 'multimodal', catLabel: '多模态', mark: 'VC',
    desc: '与你喜爱的虚拟角色进行多轮对话：支持上传人设卡、捏脸换装、语音克隆与表情动画，打造专属陪伴 / 教育 / 偶像角色。',
    features: ['人设卡驱动：上传角色卡即开聊', '语音克隆：10 秒样本克隆角色声音', '表情动画：对话实时驱动面部微表情', '多端同步：小程序 + H5 + 智能音箱'],
    tags: ['虚拟角色', '多模态', '对话'],
    price: null, unit: '', priceNote: '内测中 · 欢迎预约',
    sales: 0, rating: 0, badge: '开发中', colors: ['#f472b6', '#a78bfa'],
    comingSoon: true
  },
{
    id: 'speaking-pixel', name: '像素英语口语练习', cat: 'education', catLabel: '教育培训', mark: 'SP',
    desc: '像素风英语口语 A1 训练工具：AI 自由对话、训练材料生成与每日复习，打卡 · 等级 · XP 游戏化成长体系，把练口语变成每天的小游戏。支持移动端 H5 与小程序部署。',
    features: ['AI 自由对话：像美国朋友一样自然聊天', '训练材料生成：对话 / 故事 / 演讲 / 场景练习', '今日复习：单词与句子间隔复习', '8-bit 像素风 · 打卡等级 XP 成长体系'],
    tags: ['口语练习', '游戏化', '像素风'],
    price: 6800, unit: '/年', priceNote: '含 1 个班级 40 个学员账号 + AI 对话额度',
    sales: 96, rating: 4.9, badge: '新上', colors: ['#e8608a', '#f59e0b'],
    demo: 'speaking.html'
  },
{
    id: 'qike-studio', name: '启课智能教学台', cat: 'education', catLabel: '教育培训', mark: 'QK',
    desc: '面向小学、初中、高中教师的 AI 教学生成软件：按课标与教材版本一键生成课件、互动课堂、作业评测、几何图形与模拟实验，九大模块一体化工作台，内容对齐国家课程标准。',
    features: ['题目讲课：文字/语音提问，像搜索一样自动生成讲解 PPT', '课件生成：五环节完整课件，可编辑、可导出', '互动课堂：提问、抢答、随堂测一键生成', '九大模块：几何引擎 / AI 课堂 / 模拟实验 / 项目学习 / 联网搜索', '本地引擎可离线生成，配置大模型 API 升级深度生成'],
    tags: ['教学生成', 'K12', '课标对齐'],
    price: 9800, unit: '/年', priceNote: '含 20 个教师账号 + 本地生成引擎',
    sales: 0, rating: 4.8, badge: '新上', colors: ['#1457d9', '#0ea5e9'],
    img: 'assets/img/products/qike-studio.jpg',
    demo: 'qike-studio.html'
  },
{
    id: 'voice-volcano', name: '火山语音交互助手', cat: 'multimodal', catLabel: '多模态', mark: 'VV',
    desc: '基于火山引擎语音合成与识别 API 打造的实时语音交互组件：支持流式对话、情感化配音与多语种识别，可快速嵌入 App、网页与智能硬件。',
    features: ['流式语音合成：低延迟实时播报', '情感化音色：支持多风格语气切换', '多语种识别：中英日韩等主流语种', '可嵌入 SDK：一键集成到 Web / App / 硬件'],
    tags: ['语音合成', '语音识别', '火山引擎', '多语种'],
    price: null, unit: '', priceNote: '🚧 开发中 · 来自《AI编程职业实战班》第 3 章案例',
    sales: 0, rating: 0, badge: '开发中', colors: ['#0ea5e9', '#7c3aed'],
    comingSoon: true, chapterRef: 3, course: 'AI编程职业实战班-模块一'
  },
{
    id: 'douyin-live-analytics', name: '抖音直播数据看板', cat: 'retail', catLabel: '零售电商', mark: 'DA',
    desc: '抖音直播间数据全链路采集与可视化：实时在线人数、互动率、GMV 趋势与商品转化漏斗，支持多直播间对比与达人效果评估。',
    features: ['实时数据采集：在线人数 / 互动 / 礼物 / GMV', '商品转化漏斗：点击 → 加购 → 下单', '多直播间对比：矩阵号效果一目了然', '达人评估：历史直播综合评分'],
    tags: ['抖音直播', '数据采集', '可视化', '转化漏斗'],
    price: null, unit: '', priceNote: '🚧 开发中 · 来自《AI编程职业实战班》第 5 章案例',
    sales: 0, rating: 0, badge: '开发中', colors: ['#f59e0b', '#ec4899'],
    comingSoon: true, chapterRef: 5, course: 'AI编程职业实战班-模块一'
  },
{
    id: 'writing-copilot', name: 'AI 写作副驾驶', cat: 'efficiency', catLabel: '企业效率', mark: 'WP',
    desc: '私人写作助手：上传素材或一句话需求，自动生成标题、大纲、正文、润色和多版改写，内置小红书、公众号、职场汇报等 12+ 场景模板。',
    features: ['一句话生成：标题 / 大纲 / 正文 / 结尾', '多版改写：正式版 / 口语版 / 小红书风', '润色优化：病句修正、逻辑重构、金句增强', '场景模板：12+ 常见写作场景一键套用'],
    tags: ['文案生成', '润色改写', '多场景模板', '写作'],
    price: null, unit: '', priceNote: '🚧 开发中 · 来自《AI编程职业实战班》第 7 章案例',
    sales: 0, rating: 0, badge: '开发中', colors: ['#7c3aed', '#2f5cff'],
    comingSoon: true, chapterRef: 7, course: 'AI编程职业实战班-模块一'
  },
{
    id: 'kids-english-story', name: '儿童英语故事学单词', cat: 'education', catLabel: '教育培训', mark: 'KE',
    desc: '用 AI 给 3–8 岁孩子读英文故事、自动拆分高频单词、生成互动问答，可封装为 Skill 集成到 WorkBuddy 等平台对外服务。',
    features: ['AI 读故事：英文绘本自动朗读 + 中文讲解', '单词拆解：高频词自动提取 + 例句 + 拼写', '互动问答：故事后生成理解题与词汇题', 'Skill 封装：可集成 WorkBuddy 等平台'],
    tags: ['少儿英语', '故事朗读', 'Skill 封装', 'WorkBuddy'],
    price: null, unit: '', priceNote: '🚧 开发中 · 来自《AI编程职业实战班》第 11 章案例',
    sales: 0, rating: 0, badge: '开发中', colors: ['#22d3ee', '#a855f7'],
    comingSoon: true, chapterRef: 11, course: 'AI编程职业实战班-模块一'
  }
  ];

window.DEMANDS = [
  // ============ 官方发布需求（需求组评估立项、开发组拆解、营销组对接） ============
  {
    id: 'd1', source: 'official', title: '汽车零部件视觉质检试点', company: '某汽车零部件制造企业',
    industry: '智能制造', type: '项目制', budget: '30–50 万', cycle: '8 周',
    desc: '针对刹车盘表面的划痕、凹坑与锈蚀缺陷，在两条产线部署在线视觉质检，需支持小样本训练并与现有 MES 联动拦截。',
    tags: ['缺陷检测', '小样本', '边缘部署'], bids: 6, status: '招募中', hot: true, published: '10-18',
    scope: ['缺陷样本采集与标注规范', '两条产线在线检测部署', 'MES 联动与拦截策略', '验收评测集与准确率报告'],
    requirement: ['有汽车零部件视觉项目案例', '具备边缘设备部署能力', '可提供 8 周驻场交付']
  },
  {
    id: 'd2', source: 'official', title: '连锁零售导购 Agent', company: '某全国连锁零售品牌',
    industry: '零售电商', type: '场景订阅', budget: '20–40 万', cycle: '3 个月',
    desc: '为 600 家门店导购提供商品知识、搭配推荐与会员运营助手，接入企微与现有会员系统，要求可配置话术与合规审核。',
    tags: ['导购助手', '企微', '会员运营'], bids: 9, status: '招募中', hot: false, published: '10-17',
    scope: ['商品与会员知识库', '企微侧边栏导购助手', '话术配置与审核后台', '门店试点与推广手册'],
    requirement: ['有零售导购或私域项目经验', '熟悉企微生态', '具备多门店推广能力']
  },
  {
    id: 'd3', source: 'official', title: '三甲医院病历质控升级', company: '某三甲医院',
    industry: '医疗健康', type: '项目制', budget: '面议', cycle: '16 周',
    desc: '在院内私有化环境升级病历内涵质控能力，覆盖入院记录、病程记录与出院小结，需通过院内信息安全与等保测评。',
    tags: ['病历质控', '私有化', '等保'], bids: 4, status: '招募中', hot: true, published: '10-16',
    scope: ['院内私有化部署', '质控规则梳理与配置', '与电子病历系统集成', '质控报表与培训'],
    requirement: ['有三甲医院交付案例', '满足等保三级要求', '具备医疗数据合规经验']
  },
  {
    id: 'd4', source: 'official', title: '职教个性化学习路径', company: '某职业教育机构',
    industry: '教育培训', type: 'SaaS 采购', budget: '15–25 万', cycle: '10 周',
    desc: '面向 2 万名学员构建诊断测评、学习路径推荐与错题归因能力，需与现有 LMS 和题库系统打通。',
    tags: ['个性化学习', 'LMS 集成', '题库'], bids: 7, status: '招募中', hot: false, published: '10-15',
    scope: ['诊断测评体系设计', '路径推荐与错题归因', 'LMS / 题库系统集成', '学情看板与运营培训'],
    requirement: ['有教育 SaaS 交付经验', '具备推荐系统能力', '支持私有化或混合云']
  },
  {
    id: 'd5', source: 'official', title: '多品种小批量智能排程', company: '某精密制造企业',
    industry: '智能制造', type: '项目制', budget: '60–100 万', cycle: '12 周',
    desc: '订单多品种、小批量、插单频繁，需构建约束求解排程系统，支持插单影响模拟，并与 ERP、MES 双向同步。',
    tags: ['排产', '约束求解', 'ERP 集成'], bids: 5, status: '招募中', hot: false, published: '10-14',
    scope: ['排程约束建模', '求解引擎与排程界面', '插单影响模拟', 'ERP / MES 集成'],
    requirement: ['有制造业排程落地案例', '具备运筹优化团队', '可提供现场调研']
  },
  {
    id: 'd6', source: 'official', title: '跨境多语言内容工厂', company: '某跨境电商卖家',
    industry: '零售电商', type: '场景订阅', budget: '10–20 万', cycle: '6 周',
    desc: '覆盖英语、德语、日语等 6 个语种，批量生成商品主图、场景图与短视频素材，要求符合各平台内容规范。',
    tags: ['多语言', '商品内容', '多模态'], bids: 11, status: '招募中', hot: true, published: '10-13',
    scope: ['多语言文案与本地化', '商品图与短视频批量生成', '平台规范校验', '品牌风格模板'],
    requirement: ['有多语言内容生产经验', '熟悉主流跨境平台规则', '具备视觉生成能力']
  },
  {
    id: 'd7', source: 'official', title: '医药医学知识问答', company: '某医药企业',
    industry: '医疗健康', type: '项目制', budget: '20–35 万', cycle: '8 周',
    desc: '面向医药代表与内部医学团队搭建合规知识问答，覆盖产品说明书、指南与常见问题，全部答案需引用原文。',
    tags: ['医学知识', '可溯源', '合规'], bids: 3, status: '招募中', hot: false, published: '10-12',
    scope: ['医学资料治理与入库', '可溯源问答', '角色权限与审计', '合规评审支持'],
    requirement: ['有医药行业知识库案例', '具备合规评审经验', '支持私有化部署']
  },
  {
    id: 'd8', source: 'official', title: '中学校本知识库', company: '某市重点中学',
    industry: '教育培训', type: 'SaaS 采购', budget: '8–15 万', cycle: '4 周',
    desc: '整合教材、讲义与校规，建设教师与学生分权的校本问答，答案需溯源到章节，支持校内私有化部署。',
    tags: ['校本知识', '分权', '私有化'], bids: 12, status: '已定标', hot: false, published: '09-28',
    scope: ['资料治理与知识库构建', '教师 / 学生分权', '章节级溯源', '校内部署与培训'],
    requirement: ['有教育行业案例', '支持私有化部署', '具备内容安全审核']
  },
  {
    id: 'd9', source: 'official', title: '工业设备预测性维护', company: '某新能源电池厂',
    industry: '智能制造', type: '项目制', budget: '80–120 万', cycle: '16 周',
    desc: '针对涂布、辊压与叠片关键设备，接入振动、温度与电流数据，构建健康度评分与故障预警，降低非计划停机。',
    tags: ['预测性维护', '时序数据', '工单'], bids: 2, status: '招募中', hot: false, published: '10-10',
    scope: ['传感器数据接入', '健康度模型与预警', '检修工单联动', '效果评估与迭代'],
    requirement: ['有锂电或流程工业案例', '具备时序算法能力', '可驻场实施']
  },

  // ============ 用户自主发布需求（经平台审核通过后上架，带监管与担保机制） ============
  {
    id: 'u1', source: 'user', title: '连锁餐饮门店智能排班助手', company: '食光餐饮管理有限公司',
    industry: '零售电商', type: 'SaaS 采购', budget: '5–12 万', cycle: '6 周',
    desc: '28 家连锁门店，高峰排班全靠店长经验，希望按客流预测自动生成排班表，并支持临时换班审批与人力成本看板。',
    tags: ['智能排班', '客流预测', '小程序'], bids: 4, status: '招募中', hot: false, published: '10-20',
    auditStatus: '已通过', creditScore: 92, creditLevel: 'A', deposit: true, guarantee: true,
    scope: ['客流数据接入与预测模型', '自动排班引擎与店长调班界面', '换班审批流程', '人力成本看板'],
    requirement: ['有连锁餐饮或零售排班经验', '支持小程序端', '可提供原型演示']
  },
  {
    id: 'u2', source: 'user', title: '跨境客服多语种自动回复', company: '海鸥跨境贸易',
    industry: '零售电商', type: '场景订阅', budget: '8–15 万', cycle: '4 周',
    desc: '亚马逊 + 独立站合计 6 个语种的站内信，要求 AI 自动回复常见问题，复杂问题转人工，所有回复需可追溯修改。',
    tags: ['多语种', '客服自动化', '合规可追溯'], bids: 7, status: '招募中', hot: true, published: '10-21',
    auditStatus: '已通过', creditScore: 86, creditLevel: 'B+', deposit: true, guarantee: true,
    scope: ['多语种客服知识库', '自动回复与人工接管', '回复审计与回溯', '数据看板'],
    requirement: ['有跨境电商客服经验', '熟悉 Amazon 平台规则', '可快速部署']
  },
  {
    id: 'u3', source: 'user', title: '律所合同智能审校助手', company: '德明律师事务所',
    industry: '其他行业', type: 'SaaS 采购', budget: '10–20 万', cycle: '8 周',
    desc: '30 人规模律所，希望对商务合同做条款比对、风险标注与修改建议，需支持私有化部署并对敏感词做脱敏。',
    tags: ['合同审校', '风险标注', '私有化'], bids: 2, status: '招募中', hot: false, published: '10-22',
    auditStatus: '审核中', creditScore: 78, creditLevel: 'B', deposit: true, guarantee: false,
    scope: ['合同模板库构建', '条款比对与风险识别', '修改建议生成', '私有化部署与脱敏'],
    requirement: ['有法律行业 AI 案例', '支持私有化', '对数据安全有承诺']
  }
];

window.STORES = [
  {
    id: 's1', name: '星野 AI 工作室', ownerType: 'individual', owner: '张野',
    tagline: '电商视觉与多语言内容',
    desc: '个人开发者，专注电商内容生产，服务过 30+ 跨境卖家，把商品图、场景图与多语言文案做成可订阅的工具。',
    categories: ['零售电商', '多模态'], tags: ['电商内容', '多模态', '跨境'],
    rating: 4.9, sales: 1286, since: 2024, verified: true,
    apps: [
      { id: 'a11', name: '商品图批量生成器', price: 1680, unit: '/年', delivery: '即时开通', desc: '上传商品表，批量生成主图、场景图与多尺寸适配，内置平台规范模板。', tags: ['商品图', '批量生成'] },
      { id: 'a12', name: '多语言文案助手', price: 980, unit: '/年', delivery: '即时开通', desc: '支持 12 种语言的产品标题、卖点与详情页文案，可锁定品牌语气。', tags: ['多语言', '文案'] }
    ]
  },
  {
    id: 's2', name: '云栈科技', ownerType: 'company', owner: '云栈科技',
    tagline: '大模型私有化与知识库',
    desc: '企业级 AI 基础设施服务商，提供私有化部署、权限审计与国产 GPU 适配，已服务 40+ 中大型企业。',
    categories: ['企业效率', '智能制造'], tags: ['私有化', '知识库', '国产化'],
    rating: 4.8, sales: 642, since: 2023, verified: true,
    apps: [
      { id: 'a21', name: '私有化大模型平台', price: 60000, unit: '起 / 项目', delivery: '2–4 周', desc: 'vLLM 推理集群、模型量化与压测、权限审计一体化交付。', tags: ['私有化', 'vLLM'] },
      { id: 'a22', name: '企业知识库私有版', price: 29800, unit: '/年', delivery: '1–2 周', desc: '文档入库、角色权限隔离与原文引用，支持内网部署。', tags: ['RAG', '权限隔离'] }
    ]
  },
  {
    id: 's3', name: '极客工坊', ownerType: 'team', owner: '极客工坊团队',
    tagline: '小程序与门店智能体',
    desc: '8 人全栈团队，专注微信生态与门店场景，交付源码、部署文档与一个月陪跑。',
    categories: ['零售电商', '企业效率'], tags: ['小程序', '门店', '企微'],
    rating: 4.8, sales: 517, since: 2023, verified: true,
    apps: [
      { id: 'a31', name: '门店导购助手', price: 12800, unit: '/年', delivery: '3 个工作日', desc: '企微侧边栏导购，商品知识、搭配推荐与会员运营话术可配置。', tags: ['导购', '企微'] },
      { id: 'a32', name: '小程序 AI 客服', price: 19800, unit: '起 / 项目', delivery: '2–3 周', desc: '小程序内多轮对话、订单查询与人工接管，含后台管理。', tags: ['客服', '小程序'] }
    ]
  },
  {
    id: 's4', name: '标智数据', ownerType: 'company', owner: '标智数据',
    tagline: '数据标注与评测集',
    desc: '提供文本、图像与多模态标注，以及评测集构建与质检体系，支持私有化标注平台。',
    categories: ['智能制造', '医疗健康'], tags: ['数据标注', '评测集', '质检'],
    rating: 4.7, sales: 903, since: 2022, verified: true,
    apps: [
      { id: 'a41', name: '标注平台私有版', price: 45800, unit: '起 / 项目', delivery: '2 周', desc: '多模态标注、质检抽检与进度看板，部署在客户内网。', tags: ['标注平台', '私有化'] },
      { id: 'a42', name: '评测集构建服务', price: 0.8, unit: '起 / 条', delivery: '按量交付', desc: '按业务场景设计评测集，含标注规范、抽检与一致性校验。', tags: ['评测集', '按量'] }
    ]
  },
  {
    id: 's5', name: '深智实验室', ownerType: 'team', owner: '深智实验室',
    tagline: '行业模型微调与评测',
    desc: '运筹与算法背景团队，专注制造、零售场景的模型微调、效果评测与上线调优。',
    categories: ['智能制造', '零售电商'], tags: ['模型微调', 'LoRA', '评测'],
    rating: 4.8, sales: 428, since: 2024, verified: true,
    apps: [
      { id: 'a51', name: '行业模型微调', price: 28000, unit: '起 / 项目', delivery: '2–3 周', desc: '数据清洗、SFT / LoRA 微调、评测基准与效果报告。', tags: ['SFT', 'LoRA'] },
      { id: 'a52', name: '质检模型训练', price: 36000, unit: '起 / 项目', delivery: '3–4 周', desc: '小样本缺陷检测模型训练与现场试跑，输出部署包。', tags: ['缺陷检测', '小样本'] }
    ]
  },
  {
    id: 's6', name: '合规方舟', ownerType: 'company', owner: '合规方舟',
    tagline: 'AI 合规与内容安全',
    desc: '为 AI 应用提供合规评估、生成内容标识与隐私影响评估，已服务 60+ 企业。',
    categories: ['企业效率', '医疗健康'], tags: ['合规', '内容安全', '隐私'],
    rating: 4.9, sales: 316, since: 2023, verified: true,
    apps: [
      { id: 'a61', name: 'AI 合规自查工具', price: 12800, unit: '/年', delivery: '即时开通', desc: '按行业生成合规清单、风险项与整改建议，支持多人协作。', tags: ['合规', '自查'] },
      { id: 'a62', name: '生成内容标识组件', price: 6800, unit: '/年', delivery: '1 周', desc: '为图片、音视频与文本添加显式/隐式标识，提供接口与审计日志。', tags: ['内容标识', '审计'] }
    ]
  },
  {
    id: 's7', name: '光年视觉', ownerType: 'individual', owner: '陈光',
    tagline: '数字人与短视频生产',
    desc: '独立创作者，提供数字人形象定制与口播视频批量生产，服务电商与本地生活商家。',
    categories: ['多模态', '零售电商'], tags: ['数字人', '短视频', '口播'],
    rating: 4.6, sales: 254, since: 2024, verified: false,
    apps: [
      { id: 'a71', name: '数字人口播工坊', price: 3980, unit: '/年', delivery: '即时开通', desc: '选择形象与音色，脚本一键生成口播视频，支持多语言字幕。', tags: ['数字人', '口播'] },
      { id: 'a72', name: '短视频批量成片', price: 15000, unit: '/月', delivery: '月度交付', desc: '每月 20 条成片，含脚本、剪辑与数据复盘。', tags: ['短视频', '代运营'] }
    ]
  },
  {
    id: 's8', name: '数智排程团队', ownerType: 'team', owner: '数智排程团队',
    tagline: '小批量智能排程',
    desc: '运筹优化背景团队，面向多品种小批量工厂提供排程、插单模拟与产能评估工具。',
    categories: ['智能制造'], tags: ['排程', '约束求解', '插单'],
    rating: 4.7, sales: 96, since: 2025, verified: true,
    apps: [
      { id: 'a81', name: '小批量排程助手', price: 88000, unit: '起 / 项目', delivery: '8–12 周', desc: '多约束排程求解、可视化甘特图与可执行工单下发。', tags: ['排程', '甘特图'] },
      { id: 'a82', name: '插单影响模拟', price: 19800, unit: '/年', delivery: '2 周', desc: '分钟级评估插单对交期、设备与物料的影响，给出调整建议。', tags: ['插单', '模拟'] }
    ]
  },
  {
    id: 's9', name: '校本 AI 实验室', ownerType: 'team', owner: '校本 AI 实验室',
    tagline: '校本知识与课件生成',
    desc: '服务中小学与职教机构，提供校本问答与课件生成工具，支持校内私有化与教师培训。',
    categories: ['教育培训'], tags: ['校本知识', '课件', '私有化'],
    rating: 4.8, sales: 372, since: 2024, verified: true,
    apps: [
      { id: 'a91', name: '校本问答助手', price: 12800, unit: '/年', delivery: '1–2 周', desc: '教材、讲义与校规章节级溯源，教师与学生分权使用。', tags: ['校本', '溯源'] },
      { id: 'a92', name: '课件生成工作台', price: 9800, unit: '/年', delivery: '即时开通', desc: '大纲生成课件、图解与分层题库，支持校本模板。', tags: ['课件', '题库'] }
    ]
  }
];
