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
  { key: 'multimodal', label: '多模态' }
];

window.APPS = [
  {
    id: 'cs-agent', name: '智能客服 Agent', cat: 'efficiency', catLabel: '企业效率', mark: 'CS',
    desc: '覆盖售前咨询、售后工单与私域运营的多轮对话智能体，可调用订单、物流与CRM工具。',
    features: ['多渠道接入：网页、企微、公众号、App', '工单自动流转与人工无缝接管', '知识库实时更新，答案可溯源', '对话质检与满意度分析'],
    tags: ['多轮对话', '工单流转', '工具调用'],
    price: 19800, unit: '/年', priceNote: '含 5 个坐席与首年运维',
    sales: 1260, rating: 4.9, badge: '官方自营', colors: ['#2f5cff', '#7c3aed']
  },
  {
    id: 'kb-qa', name: '企业知识库问答', cat: 'efficiency', catLabel: '企业效率', mark: 'KB',
    desc: '把制度、文档、产品资料变成可问答的企业大脑，支持权限隔离与原文引用。',
    features: ['结构化与非结构化文档统一入库', '部门/角色级权限隔离', '答案附原文出处与置信度', '评测集驱动的效果持续优化'],
    tags: ['RAG', '权限隔离', '私有化'],
    price: 29800, unit: '/年', priceNote: '含 50 万页文档额度',
    sales: 860, rating: 4.8, badge: '热销', colors: ['#0ea5e9', '#2f5cff']
  },
  {
    id: 'vision-qc', name: '视觉质检平台', cat: 'manufacturing', catLabel: '智能制造', mark: 'VQ',
    desc: '面向产线的小样本缺陷检测与在线复判，支持新缺陷快速标注上线并联动产线拦截。',
    features: ['小样本训练，新缺陷 1–2 天上线', '边缘部署，单工位低时延推理', '缺陷分类、定位与统计看板', '与 MES / PLC 联动拦截'],
    tags: ['缺陷检测', '边缘部署', 'MES 集成'],
    price: 88000, unit: '起', priceNote: '按工位与产线数量报价',
    sales: 180, rating: 4.9, badge: '行业标杆', colors: ['#b45309', '#f59e0b']
  },
  {
    id: 'pdm', name: '设备预测性维护', cat: 'manufacturing', catLabel: '智能制造', mark: 'PM',
    desc: '融合振动、温度、电流等时序数据，输出设备健康度与剩余寿命预警，自动生成检修工单。',
    features: ['多源传感器数据接入与特征工程', '健康度评分与故障早期预警', '检修工单自动派发与闭环', '设备知识库与故障复盘'],
    tags: ['时序预测', '健康度', '工单联动'],
    price: 128000, unit: '起', priceNote: '含 20 台关键设备授权',
    sales: 96, rating: 4.7, badge: '官方自营', colors: ['#92400e', '#ea580c']
  },
  {
    id: 'content-factory', name: '电商内容工厂', cat: 'retail', catLabel: '零售电商', mark: 'CF',
    desc: '批量生成商品主图、场景图、短视频脚本与多语言文案，保持品牌风格统一。',
    features: ['多平台规格一键适配', '品牌风格模板与审核规则', '多语言文案与本地化表达', '生成内容自动标识与留痕'],
    tags: ['多模态生成', '商品内容', '多语言'],
    price: 16800, unit: '/年', priceNote: '含 5,000 张/条内容额度',
    sales: 730, rating: 4.8, badge: '热销', colors: ['#0891b2', '#22d3ee']
  },
  {
    id: 'ops-copilot', name: '经营分析 Copilot', cat: 'retail', catLabel: '零售电商', mark: 'OC',
    desc: '用自然语言查数、做异常归因与活动复盘，统一指标口径，答案附带计算过程。',
    features: ['自然语言转 SQL / 指标查询', '异常波动自动归因', '活动复盘模板与图表生成', '语义层统一指标口径'],
    tags: ['数据分析', '归因', '语义层'],
    price: 24800, unit: '/年', priceNote: '含 3 个数据源接入',
    sales: 410, rating: 4.7, badge: '新上', colors: ['#0d9488', '#22d3ee']
  },
  {
    id: 'emr', name: '病历质控助手', cat: 'medical', catLabel: '医疗健康', mark: 'EM',
    desc: '诊间语音转写并生成病历草稿，按书写规范做内涵质控，医生确认后归档。',
    features: ['诊间语音实时转写与结构化', '病历完整性、时效性、内涵质控', '私有化部署，数据不出院', '质控规则可配置与统计'],
    tags: ['语音转写', '病历质控', '私有化'],
    price: null, unit: '面议', priceNote: '按院区与科室规模报价',
    sales: 64, rating: 4.8, badge: '合规版', colors: ['#047857', '#34d399']
  },
  {
    id: 'medkb', name: '医学知识助手', cat: 'medical', catLabel: '医疗健康', mark: 'MK',
    desc: '面向医生、药师与医药代表的合规知识问答，覆盖指南、文献与院内制度。',
    features: ['指南 / 文献 / 说明书统一检索', '答案逐条引用原文出处', '角色分权与问答审计', '培训题库与学习记录'],
    tags: ['医学知识', '可溯源', '角色分权'],
    price: 36000, unit: '/年', priceNote: '含 200 个账号',
    sales: 210, rating: 4.7, badge: '官方自营', colors: ['#059669', '#22d3ee']
  },
  {
    id: 'school-kb', name: '校本知识库', cat: 'education', catLabel: '教育培训', mark: 'SK',
    desc: '把教材、讲义、校规与实训手册变成可溯源的问答助手，教师与学生分权使用。',
    features: ['教材章节级溯源', '教师端 / 学生端分权', '答疑记录与高频问题分析', '支持校内私有化部署'],
    tags: ['校本知识', '溯源', '分权'],
    price: 12800, unit: '/年', priceNote: '含 1 个校区授权',
    sales: 520, rating: 4.8, badge: '官方自营', colors: ['#7c3aed', '#a855f7']
  },
  {
    id: 'course-gen', name: '课件生成工作台', cat: 'education', catLabel: '教育培训', mark: 'CG',
    desc: '从大纲一键生成课件、图解、微课脚本与分层题库，教师二次编辑后发布。',
    features: ['大纲到 PPT / 图解 / 脚本', '分层题库与答案解析', '校本模板与品牌规范', '生成内容人工校验流程'],
    tags: ['课件生成', '题库', '多模态'],
    price: 9800, unit: '/年', priceNote: '含 10 个教师账号',
    sales: 680, rating: 4.6, badge: '新上', colors: ['#9333ea', '#ec4899']
  },
  {
    id: 'scheduling', name: '智能排程调度', cat: 'manufacturing', catLabel: '智能制造', mark: 'SC',
    desc: '在订单、物料、设备、人员多约束下生成可执行排程，插单影响分钟级评估。',
    features: ['多约束求解与可执行排程', '插单影响模拟与建议', '与 ERP / MES 数据同步', '自然语言查询生产计划'],
    tags: ['约束求解', '排产', 'ERP 集成'],
    price: 158000, unit: '起', priceNote: '按产线与订单规模报价',
    sales: 72, rating: 4.7, badge: '官方自营', colors: ['#c2410c', '#f59e0b']
  },
  {
    id: 'digital-human', name: '数字人内容生产', cat: 'multimodal', catLabel: '多模态', mark: 'DH',
    desc: '企业数字人形象与音色定制，批量生产口播视频、培训课程与直播素材。',
    features: ['形象与音色定制', '脚本到成片批量生产', '多语言配音与字幕', '内容合规审核与标识'],
    tags: ['数字人', '视频生成', '多语言'],
    price: 39800, unit: '/年', priceNote: '含 120 分钟成片额度',
    sales: 240, rating: 4.6, badge: '官方自营', colors: ['#be185d', '#f472b6']
  }
];

window.DEMANDS = [
  {
    id: 'd1', title: '汽车零部件视觉质检试点', company: '某汽车零部件制造企业',
    industry: '智能制造', type: '项目制', budget: '30–50 万', cycle: '8 周',
    desc: '针对刹车盘表面的划痕、凹坑与锈蚀缺陷，在两条产线部署在线视觉质检，需支持小样本训练并与现有 MES 联动拦截。',
    tags: ['缺陷检测', '小样本', '边缘部署'], bids: 6, status: '招募中', hot: true, published: '10-18',
    scope: ['缺陷样本采集与标注规范', '两条产线在线检测部署', 'MES 联动与拦截策略', '验收评测集与准确率报告'],
    requirement: ['有汽车零部件视觉项目案例', '具备边缘设备部署能力', '可提供 8 周驻场交付']
  },
  {
    id: 'd2', title: '连锁零售导购 Agent', company: '某全国连锁零售品牌',
    industry: '零售电商', type: '场景订阅', budget: '20–40 万', cycle: '3 个月',
    desc: '为 600 家门店导购提供商品知识、搭配推荐与会员运营助手，接入企微与现有会员系统，要求可配置话术与合规审核。',
    tags: ['导购助手', '企微', '会员运营'], bids: 9, status: '招募中', hot: false, published: '10-17',
    scope: ['商品与会员知识库', '企微侧边栏导购助手', '话术配置与审核后台', '门店试点与推广手册'],
    requirement: ['有零售导购或私域项目经验', '熟悉企微生态', '具备多门店推广能力']
  },
  {
    id: 'd3', title: '三甲医院病历质控升级', company: '某三甲医院',
    industry: '医疗健康', type: '项目制', budget: '面议', cycle: '16 周',
    desc: '在院内私有化环境升级病历内涵质控能力，覆盖入院记录、病程记录与出院小结，需通过院内信息安全与等保测评。',
    tags: ['病历质控', '私有化', '等保'], bids: 4, status: '招募中', hot: true, published: '10-16',
    scope: ['院内私有化部署', '质控规则梳理与配置', '与电子病历系统集成', '质控报表与培训'],
    requirement: ['有三甲医院交付案例', '满足等保三级要求', '具备医疗数据合规经验']
  },
  {
    id: 'd4', title: '职教个性化学习路径', company: '某职业教育机构',
    industry: '教育培训', type: 'SaaS 采购', budget: '15–25 万', cycle: '10 周',
    desc: '面向 2 万名学员构建诊断测评、学习路径推荐与错题归因能力，需与现有 LMS 和题库系统打通。',
    tags: ['个性化学习', 'LMS 集成', '题库'], bids: 7, status: '招募中', hot: false, published: '10-15',
    scope: ['诊断测评体系设计', '路径推荐与错题归因', 'LMS / 题库系统集成', '学情看板与运营培训'],
    requirement: ['有教育 SaaS 交付经验', '具备推荐系统能力', '支持私有化或混合云']
  },
  {
    id: 'd5', title: '多品种小批量智能排程', company: '某精密制造企业',
    industry: '智能制造', type: '项目制', budget: '60–100 万', cycle: '12 周',
    desc: '订单多品种、小批量、插单频繁，需构建约束求解排程系统，支持插单影响模拟，并与 ERP、MES 双向同步。',
    tags: ['排产', '约束求解', 'ERP 集成'], bids: 5, status: '招募中', hot: false, published: '10-14',
    scope: ['排程约束建模', '求解引擎与排程界面', '插单影响模拟', 'ERP / MES 集成'],
    requirement: ['有制造业排程落地案例', '具备运筹优化团队', '可提供现场调研']
  },
  {
    id: 'd6', title: '跨境多语言内容工厂', company: '某跨境电商卖家',
    industry: '零售电商', type: '场景订阅', budget: '10–20 万', cycle: '6 周',
    desc: '覆盖英语、德语、日语等 6 个语种，批量生成商品主图、场景图与短视频素材，要求符合各平台内容规范。',
    tags: ['多语言', '商品内容', '多模态'], bids: 11, status: '招募中', hot: true, published: '10-13',
    scope: ['多语言文案与本地化', '商品图与短视频批量生成', '平台规范校验', '品牌风格模板'],
    requirement: ['有多语言内容生产经验', '熟悉主流跨境平台规则', '具备视觉生成能力']
  },
  {
    id: 'd7', title: '医药医学知识问答', company: '某医药企业',
    industry: '医疗健康', type: '项目制', budget: '20–35 万', cycle: '8 周',
    desc: '面向医药代表与内部医学团队搭建合规知识问答，覆盖产品说明书、指南与常见问题，全部答案需引用原文。',
    tags: ['医学知识', '可溯源', '合规'], bids: 3, status: '招募中', hot: false, published: '10-12',
    scope: ['医学资料治理与入库', '可溯源问答', '角色权限与审计', '合规评审支持'],
    requirement: ['有医药行业知识库案例', '具备合规评审经验', '支持私有化部署']
  },
  {
    id: 'd8', title: '中学校本知识库', company: '某市重点中学',
    industry: '教育培训', type: 'SaaS 采购', budget: '8–15 万', cycle: '4 周',
    desc: '整合教材、讲义与校规，建设教师与学生分权的校本问答，答案需溯源到章节，支持校内私有化部署。',
    tags: ['校本知识', '分权', '私有化'], bids: 12, status: '已定标', hot: false, published: '09-28',
    scope: ['资料治理与知识库构建', '教师 / 学生分权', '章节级溯源', '校内部署与培训'],
    requirement: ['有教育行业案例', '支持私有化部署', '具备内容安全审核']
  },
  {
    id: 'd9', title: '工业设备预测性维护', company: '某新能源电池厂',
    industry: '智能制造', type: '项目制', budget: '80–120 万', cycle: '16 周',
    desc: '针对涂布、辊压与叠片关键设备，接入振动、温度与电流数据，构建健康度评分与故障预警，降低非计划停机。',
    tags: ['预测性维护', '时序数据', '工单'], bids: 2, status: '招募中', hot: false, published: '10-10',
    scope: ['传感器数据接入', '健康度模型与预警', '检修工单联动', '效果评估与迭代'],
    requirement: ['有锂电或流程工业案例', '具备时序算法能力', '可驻场实施']
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
