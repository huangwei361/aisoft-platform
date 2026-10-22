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

window.MALL = [
  {
    id: 'm1', title: 'AI 应用 UI / UX 设计外包', type: 'supply', provider: '星野设计',
    price: '¥8,000', priceNote: '起 / 项目', delivery: '5–10 个工作日',
    desc: '面向 AI 产品的界面设计、交互原型与设计规范，含 2 轮修改，交付 Figma 源文件。',
    tags: ['界面设计', 'Figma', '交互原型'], rating: 4.9, deals: 86, verified: true
  },
  {
    id: 'm2', title: '大模型私有化部署实施', type: 'supply', provider: '云栈科技',
    price: '¥60,000', priceNote: '起 / 项目', delivery: '2–4 周',
    desc: 'vLLM 推理集群搭建、模型量化与压测、权限与审计配置，支持国产 GPU 环境。',
    tags: ['私有化', 'vLLM', 'GPU'], rating: 4.8, deals: 42, verified: true
  },
  {
    id: 'm3', title: '数据标注与评测集构建', type: 'supply', provider: '标智数据',
    price: '¥0.8', priceNote: '起 / 条', delivery: '按量分批交付',
    desc: '文本、图像与多模态数据标注，提供标注规范、质检抽检与评测集设计服务。',
    tags: ['数据标注', '评测集', '质检'], rating: 4.7, deals: 128, verified: true
  },
  {
    id: 'm4', title: 'AI 产品合规咨询', type: 'supply', provider: '合规方舟',
    price: '¥12,000', priceNote: '/ 次', delivery: '5 个工作日',
    desc: '生成内容标识、个人信息保护、医疗与教育行业合规边界评估，输出整改建议书。',
    tags: ['合规', '隐私', '内容安全'], rating: 4.9, deals: 36, verified: true
  },
  {
    id: 'm5', title: '小程序 + AI 功能开发', type: 'supply', provider: '极客工坊',
    price: '¥35,000', priceNote: '起 / 项目', delivery: '4–6 周',
    desc: '微信小程序与 AI 能力集成，含对话、知识库、订单支付与后台管理，交付源码。',
    tags: ['小程序', '全栈开发', '交付源码'], rating: 4.8, deals: 57, verified: true
  },
  {
    id: 'm6', title: '数字人短视频代运营', type: 'supply', provider: '光年视觉',
    price: '¥15,000', priceNote: '/ 月', delivery: '月度交付',
    desc: '数字人口播视频策划、脚本、成片与账号运营，每月 20 条短视频，含数据复盘。',
    tags: ['数字人', '短视频', '代运营'], rating: 4.6, deals: 24, verified: false
  },
  {
    id: 'm7', title: '模型微调与效果调优', type: 'supply', provider: '深智实验室',
    price: '¥28,000', priceNote: '起 / 项目', delivery: '2–3 周',
    desc: '行业数据清洗、SFT / LoRA 微调、评测基准搭建与效果调优，交付模型与评测报告。',
    tags: ['模型微调', 'LoRA', '评测'], rating: 4.8, deals: 68, verified: true
  },
  {
    id: 'm8', title: '寻求 CRM 智能化改造合作', type: 'need', provider: '某 SaaS 服务商',
    price: '20–30 万', priceNote: '预算', delivery: '面议',
    desc: '现有 CRM 产品需要加入智能跟进摘要、商机评分与话术推荐，寻找有 B 端 AI 经验的团队联合交付。',
    tags: ['CRM', '商机评分', '联合交付'], rating: null, deals: 3, verified: true
  },
  {
    id: 'm9', title: '采购 3 套视觉质检方案', type: 'need', provider: '某电子制造厂',
    price: '面议', priceNote: '预算', delivery: '30 天内响应',
    desc: 'SMT 产线需要外观缺陷检测方案，优先考虑已在电子制造落地过、可提供样机试跑的供应商。',
    tags: ['视觉质检', 'SMT', '样机试跑'], rating: null, deals: 5, verified: true
  }
];
