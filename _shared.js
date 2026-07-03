/* 外贸领航者 · 共享脚本
 * 提供图标、Tailwind 全局配置、公共组件、共享数据。
 * 由 index.html / level1.html / level2.html / level3.html 共同引用。
 */

/* ---------- Tailwind config ---------- */
window.tailwind && (window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        serif: ['Noto Serif SC', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          950: '#050a14', 900: '#0a1428', 800: '#0f1e3a', 700: '#1a2f52', 600: '#2a4470', 500: '#3d5a8e',
        },
        gold: {
          50:'#fbf7ea', 100:'#f6ecc5', 200:'#edd88a', 300:'#e1c159', 400:'#d4af37', 500:'#b8952e', 600:'#8f7223', 700:'#5f4c17',
        },
        cream: { 50:'#faf9f5', 100:'#f4f1e8', 200:'#e8e2d0' },
      },
      boxShadow: {
        'gold-glow': '0 0 40px -10px rgba(212, 175, 55, 0.45)',
        'ink-elevate': '0 30px 80px -30px rgba(5, 10, 20, 0.55)',
      },
      backgroundImage: {
        'gradient-ink': 'linear-gradient(135deg, #050a14 0%, #0f1e3a 50%, #1a2f52 100%)',
        'gradient-radial-gold': 'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 60%)',
        'gradient-hero': 'linear-gradient(180deg, #050a14 0%, #0a1428 40%, #0f1e3a 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 1.2s ease-out',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        pulseSlow: { '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
});

/* ---------- Shared tier data ---------- */
window.TIER_DATA = {
  l1: {
    id: 'l1',
    tier: 'LEVEL 01',
    title: '小白支持站',
    subtitle: '活下来',
    tag: '入行 0 – 6 个月',
    accentHex: '#10b981',
    accentSoft: 'rgba(16, 185, 129, 0.12)',
    accentSoftStrong: 'rgba(16, 185, 129, 0.22)',
    stat: { modules: 6, hours: 28, lessons: 42 },
    description: '入行第一步。这里没有高深理论，只有可复制的动作：从看懂第一封询盘开始，到独立跑完第一笔订单结束。',
    outcome: '4 周内能独立处理询盘、写出合格开发信、跟完一笔完整订单。',
    modules: [
      { name: '外贸行业认知', desc: '先搞清楚这是个什么行业、能赚多少钱、要付出什么', points: ['行业全景与真实收入曲线（0-1年/1-3年/3-5年/5年+）','岗位分工全景图（业务/运营/跟单/单证/采购）','是否适合做外贸？性格特质自测','数字化、AI化、品牌出海三大趋势'] },
      { name: '入职30天生存指南', desc: '每天知道该干什么，不再无所适从', points: ['W1：熟悉公司与产品线（快速吃透产品）','W2：掌握基础工具（邮箱/CRM/平台/WhatsApp）','W3：看懂询盘与回复（分类 + 模板）','W4：跟着老人跑一单（影子学习法）','每日 SOP 时间表：早-中-晚该做什么'] },
      { name: '商务英语速成', desc: '不追求文学水平，追求让老外看懂', points: ['邮件写作四段式公式（开场/正文/CTA/签名）','50 个高频场景邮件模板一键复制','FOB/CIF/MOQ/OEM/ODM 术语速查表','电话/视频会议基本话术'] },
      { name: '订单全流程实操', desc: '一笔订单从头到尾的 12 步', points: ['12 步生命周期地图（询盘 → 收款）','询盘分析与报价计算（成本核算 + 利润率）','PI 与合同制作模板','付款方式入门：T/T / L/C / D/P 初识','出口单证基础（发票/装箱单/提单/CO）'] },
      { name: '客户开发入门', desc: '找到人、加上好友、开口聊', points: ['客户画像基础（终端/批发/零售/电商）','B2B 平台基础操作（阿里 / 中国制造网）','Google 高级搜索 20 条指令','LinkedIn Profile 优化 + 加人话术','开发信标题公式与首封回复率优化'] },
      { name: '新手避坑指南', desc: '别用真金白银交学费', points: ['20 个新手常犯错误 + 解决方案','付款方式风险等级图（从安全到危险）','尼日利亚骗局 / 钓鱼邮件 / 假水单识别','汇率基础常识（报价 buffer 逻辑）','什么时候该问老板 / 什么时候自己能定'] },
    ],
    weeks: [
      { w: 'Week 1', theme: '认识公司与产品线', tasks: ['公司主营 & 目标市场','产品线 SKU / 参数熟悉','工厂参观 / 工艺理解','产品 FAQ 20 题清单'] },
      { w: 'Week 2', theme: '掌握基础工具', tasks: ['公司邮箱 & 签名档设置','CRM 系统操作 & 客户建档','B2B 平台后台熟悉','WhatsApp / Skype / 领英账号'] },
      { w: 'Week 3', theme: '看懂询盘与回复', tasks: ['询盘分类（真/假/试探/竞品）','8 种场景回复模板','首次报价的 5 大要素','跟进节奏：D+1 / D+3 / D+7'] },
      { w: 'Week 4', theme: '跟着老人跑一单', tasks: ['影子跟单一笔完整订单','PI 与合同实战填写','验货 / 报关 / 出运协作','收款与售后跟进'] },
    ],
    tools: ['阿里国际站','中国制造网','Gmail','Outlook','WhatsApp Business','钉钉外贸版','谷歌翻译','Grammarly'],
    faq: [
      { q: '完全零基础，英语只有四级，能做外贸吗？', a: '能。外贸邮件用词非常固定，掌握 200 个高频短语 + 会用 Grammarly，写出得体邮件完全没问题。但你必须保持每天进步的节奏。' },
      { q: '入职多久没出单是不是就要被开了？', a: '外贸行业普遍容忍度是 3-6 个月。前 3 个月是"学习期"，能拿基本工资；4-6 个月要有活跃客户和意向订单；6 个月还没首单，需要认真复盘方法论。' },
      { q: '产品完全不懂，客户问技术参数怎么办？', a: '第一原则：不要瞎答。诚实说 "let me confirm with our engineer and get back to you within 24 hours"，然后立刻去问技术。回复速度和准确性比装懂重要一万倍。' },
      { q: '公司平台账号没有，该怎么开始找客户？', a: 'Google 高级搜索 + LinkedIn 免费搜索 + 展会官网参展商名单 + 海关数据免费试用版，这四件事就够你忙 3 个月了。' },
    ],
  },
  l2: {
    id: 'l2',
    tier: 'LEVEL 02',
    title: '新手成长营',
    subtitle: '站住脚',
    tag: '入行 6 个月 – 2 年',
    accentHex: '#0ea5e9',
    accentSoft: 'rgba(14, 165, 233, 0.12)',
    accentSoftStrong: 'rgba(14, 165, 233, 0.22)',
    stat: { modules: 6, hours: 56, lessons: 78 },
    description: '有过第一单之后，真正的挑战开始。你要建立稳定的客户群、把出单变成可控的节奏。三大战场并行：B2B 平台 × 独立站 × 社媒。',
    outcome: '8 周内开发出 3+ 有效客户，独立站上线，首篇 SEO 内容产出。',
    modules: [
      { name: '客户开发进阶', desc: '从广撒网到精准打击', points: ['海关数据深度挖掘（采购频次 / 供应商变动 / 价格趋势）','LinkedIn Sales Navigator 高级筛选','开发信 A/B 测试体系（标题 / 正文 / CTA / 时段）','Google Maps + 黄页地毯式开发','客户 CRM 系统搭建（从 Excel 升级）','展会 7 天跟进法'] },
      { name: 'B2B 平台深度运营', desc: '把平台流量榨干', points: ['阿里国际站数据纵横每个指标解读','P4P 直通车投放策略（选词/出价/时段/预算）','RFQ 高效抢单：什么值得抢 + 怎么写','关键词研究三结合方法','产品详情页优化（标题公式 / 主图 / 视频）','店铺评分与信用体系维护','TOP10 竞品分析框架'] },
      { name: '独立站建设与 SEO', desc: '把流量装进自己的口袋', points: ['WordPress + WooCommerce / Shopify 选型','域名策略与品牌命名','On-Page / Off-Page / Technical SEO','关键词攻占路径：长尾 → 核心','内容营销（博客 / 产品页 / Case Study）','Google Ads 基础（Search / Display / RMK）','GA4 安装与核心报表'] },
      { name: '商务谈判与沟通', desc: '价格谈判不再心虚', points: ['阶梯 / 组合 / 价值三种报价策略','谈判心理学（锚定 / 损失厌恶 / 互惠）','8 种降价应对话术','跨文化沟通：欧美 / 中东 / 东南亚 / 南美 / 非洲','24 小时全球客户触达节奏','客户来访接待 SOP'] },
      { name: '供应链与物流管理', desc: '把订单交出去也是本事', points: ['供应商找 / 验 / 谈 / 管四步法','验货标准与 AQL 抽检','FOB / CIF 责任划分','HS 编码归类与常见退单原因','出口退税免抵退 vs 免退税','货运保险险种与理赔'] },
      { name: '风险管理与合规', desc: '别把订单做成教训', points: ['合同关键条款逐条解读','信用证审证要点与软条款识别','贸易纠纷升级路径（协商→仲裁→诉讼）','CE / FDA / REACH / RoHS / BSCI 认证','知识产权防护','汇率风险管理实操（远期结汇 / buffer）'] },
    ],
    weeks: [
      { w: 'Week 1-2', theme: '客户开发六大渠道', tasks: ['海关数据实战','LinkedIn Sales Nav','开发信 A/B 测试','展会 / 黄页 / Maps'] },
      { w: 'Week 3', theme: 'B2B 平台深度运营', tasks: ['数据纵横诊断','P4P 投放优化','RFQ 抢单实战','详情页升级'] },
      { w: 'Week 4', theme: '独立站与 SEO', tasks: ['Shopify / WP 建站','关键词研究','首篇 SEO 内容','GA4 安装'] },
      { w: 'Week 5', theme: '商务谈判 + 跨文化', tasks: ['报价策略实战','角色扮演谈判','国别话术差异','客户来访 SOP'] },
      { w: 'Week 6', theme: '供应链 + 物流', tasks: ['验厂 checklist','验货实操','单证与报关','退税与保险'] },
      { w: 'Week 7', theme: '风险 + 合规', tasks: ['合同审查练习','L/C 审证','认证要求速查','汇率对冲'] },
      { w: 'Week 8', theme: '综合实战复盘', tasks: ['案例大赛','导师点评','成长报告','L3 路径规划'] },
    ],
    tools: ['OKKI 小满','腾道海关数据','LinkedIn Sales Nav','Ahrefs','SEMrush','Shopify','Mailchimp','HubSpot CRM'],
    faq: [
      { q: '我该主攻平台还是独立站？', a: '如果你在工厂 / 贸易公司：平台 + 独立站并行，平台快速出单、独立站长期积累。如果你是 SOHO：独立站 + LinkedIn + 开发信，因为平台年费门槛高。' },
      { q: '开发信回复率一直低于 1%，怎么提升？', a: '90% 的开发信问题不在文案，在于"发给不对的人"。先花时间做 ICP（理想客户画像），用 LinkedIn 精准定位到采购决策人，再用 3 段式邮件（Value → Proof → Ask），回复率至少翻 3 倍。' },
      { q: '独立站要不要投 Google Ads？', a: '独立站上线 3-6 个月内不建议大额投 Ads，先把 SEO 基础和落地页转化做扎实。Ads 只投高购买意图长尾词，日预算 20-50 美金测试转化，再放量。' },
      { q: '客户要求账期怎么办？', a: '账期是把双刃剑。给账期 = 客户忠诚度 + 订单量提升，但也是资金链风险。原则：新客户不给账期，老客户配合中信保 / XTransfer 信保工具再谈。' },
    ],
  },
  l3: {
    id: 'l3',
    tier: 'LEVEL 03',
    title: '高手跃迁塔',
    subtitle: '做上去',
    tag: '2 年以上 / 团队 / 创业',
    accentHex: '#d4af37',
    accentSoft: 'rgba(212, 175, 55, 0.14)',
    accentSoftStrong: 'rgba(212, 175, 55, 0.25)',
    stat: { modules: 7, hours: 72, lessons: 96 },
    description: '从执行者变成经营者。你不再是"完成任务"，而是设计商业系统：战略选品、大客户经营、品牌出海、团队搭建、资本运作。',
    outcome: '12 周产出一份包含选品分析 / 市场策略 / 团队规划 / 财务预测的完整商业计划书。',
    modules: [
      { name: '战略选品与市场洞察', desc: '选对赛道比努力重要', points: ['四维评估选品模型（容量 / 竞争 / 利润 / 壁垒）','行业研究框架（宏观 / 竞争 / 需求 / 技术）','数据驱动选品（海关数据 / Trends / Amazon BSR）','蓝海市场发现方法','竞品情报体系构建'] },
      { name: '大客户战略经营 (KAM)', desc: '一个 KA 顶一百个散客', points: ['KA 识别与分级体系','SPIN 深度需求挖掘','解决方案式销售（卖方案而非产品）','年度 Account Plan 制定','NPS 客户满意度体系','CEO-to-CEO 高层关系维护'] },
      { name: '品牌出海与内容营销', desc: 'OEM → ODM → OBM 升级', points: ['品牌化战略与价值主张','行业白皮书 / 视频 / Podcast / Webinar','LinkedIn Thought Leadership','海外 PR 与媒体关系','客户证言与 Case Study','Referral Program 口碑营销'] },
      { name: '团队管理与体系搭建', desc: '让业务不再依赖你', points: ['组织架构三种模式（按市场 / 产品 / 职能）','人才选拔面试评估标准','绩效激励设计（底薪 + 提成 + 奖金模型）','SOP 手册与业务流程标准化','客户资源公司化 + 离职风险管理','跨时区远程团队协作'] },
      { name: '财务与利润管理', desc: '把生意从模糊变成清晰', points: ['全成本核算模型（含隐藏成本）','成本 / 市场 / 价值三种定价策略','现金流与应收账款管理','出口退税优化 + 离岸架构','转让定价合规','SOHO 财务规划'] },
      { name: '供应链战略', desc: '从单一供应商到供应链生态', points: ['供应链整合与生态构建','多品类经营策略取舍','海外仓选址与运营','ERP 系统选型与实施','供应链数字化 / 可视化','备选供应商 + 地缘政治对冲'] },
      { name: '创业与商业模式', desc: '把外贸做成事业而非工作', points: ['SOHO 从 0 到 1 完整 checklist','外贸公司注册 / 开户 / 资质 / 团队','四种商业模式：贸易 / 工贸 / 品牌 / 平台','融资估值 + 股权设计','AI 工具全流程应用','数字化转型路径'] },
    ],
    weeks: [
      { w: 'Week 1-2', theme: '战略选品与市场洞察', tasks: ['选品四维评估','行业研究报告','蓝海机会识别','竞品情报系统'] },
      { w: 'Week 3-4', theme: '大客户战略经营', tasks: ['KA 分级','SPIN 演练','Account Plan','高层关系'] },
      { w: 'Week 5-6', theme: '品牌出海 + 内容营销', tasks: ['品牌定位','白皮书写作','LinkedIn IP','Case Study'] },
      { w: 'Week 7-8', theme: '团队管理 + 体系搭建', tasks: ['组织架构','招聘评估','绩效模型','SOP 手册'] },
      { w: 'Week 9-10', theme: '财务 + 供应链战略', tasks: ['全成本核算','离岸架构','海外仓规划','ERP 选型'] },
      { w: 'Week 11-12', theme: '创业规划 + 商业计划书', tasks: ['商业模式设计','融资估值','商业计划书','路演演练'] },
    ],
    tools: ['Ahrefs Pro','Salesforce','HubSpot Enterprise','NetSuite ERP','Notion','Airtable','ChatGPT Pro','Claude Pro'],
    faq: [
      { q: '一个人 SOHO 能做多大？', a: '天花板在 300-500 万美金营收。再往上必须搭团队。这个阶段最重要的不是勤奋，是判断力：选什么品、进什么市场、押哪个客户，一个决策错了半年白干。' },
      { q: '要不要做自己的品牌？', a: '如果你的产品差异化足够（专利 / 设计 / 工艺），或者目标市场有品牌溢价空间（欧美 B2C），值得做。如果只是 me-too 产品打价格战，做品牌只会烧钱。判断标准：能不能讲出一个客户愿意付溢价的故事。' },
      { q: '团队怎么设计激励机制？', a: '外贸团队最常见的坑是"高提成低底薪"，导致业务员只做眼前订单不做长期客户经营。推荐结构：底薪覆盖基本生活 + 阶梯提成 + 老客户复购年度奖金 + 新市场开拓专项奖金。' },
      { q: 'AI 会取代外贸业务员吗？', a: '会取代"只会翻译邮件、只会填 PI"的初级业务员，但会大幅赋能懂客户懂产品懂谈判的资深业务员。你的护城河从"英语好 + 沟通勤快"变成"行业认知深 + 关系资产厚"。现在开始训练自己用 AI 做研究、做谈判剧本、做客户档案。' },
    ],
  },
};

/* ---------- Icons ---------- */
window.SharedIcon = null; // to be populated after React loaded

/* Global CSS helpers appended to <head> */
(function injectSharedStyles() {
  const style = document.createElement('style');
  style.textContent = `
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter','PingFang SC','Microsoft YaHei',sans-serif; background:#050a14; color:#f4f1e8; -webkit-font-smoothing: antialiased; }
    .font-display { font-family: 'Noto Serif SC', serif; letter-spacing: -0.01em; }
    .gold-text {
      background: linear-gradient(135deg, #d4af37 0%, #f6ecc5 45%, #d4af37 90%);
      -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
      background-size: 200% 100%; animation: shimmer 6s linear infinite;
    }
    .grid-lines {
      background-image:
        linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .divider-gold { background: linear-gradient(90deg, transparent, #d4af37, transparent); height:1px; }
    .card-glow { position:relative; }
    .card-glow::before {
      content:''; position:absolute; inset:-1px; border-radius:inherit; padding:1px;
      background: linear-gradient(135deg, rgba(212,175,55,0.5), rgba(212,175,55,0), rgba(212,175,55,0.3));
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude; pointer-events:none;
    }
    .stat-num { font-variant-numeric: tabular-nums; }
    ::selection { background: rgba(212,175,55,0.4); color: #faf9f5; }
  `;
  document.head.appendChild(style);
})();
