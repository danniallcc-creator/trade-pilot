/* 外贸领航者 · 每周实战案例样本
 * 结构：window.TIER_SAMPLES[tierId][weekIndex] = { title, scenario, meta, timeline: [...], outcome, lessons }
 * timeline[i] = { day, phase, title, actions:[str], artifacts:[{type,label,content|rows|items|from|to|subject|...}] }
 * artifact.type: 'email' | 'document' | 'checklist' | 'chat' | 'note' | 'table' | 'code'
 */
window.TIER_SAMPLES = {
  l1: [],
  l2: [],
  l3: [],
};

/* ============ L1 Week 4 · 影子跟单 + 独立跑完首笔小单 ============ */
window.TIER_SAMPLES.l1[3] = {
  title: '虚拟案例：LED-Bright Co. → 阿联酋迪拜客户 Al Noor Lighting 首笔 T/T 订单',
  scenario: '深圳一家 LED 商用照明工厂。客户 Al Noor Lighting 是迪拜本地经销商，通过阿里国际站询盘。产品：LED 车库感应灯 20W，MOQ 500 pcs，客户首单意向 1,200 pcs。付款方式 30% T/T 定金 + 70% 见提单副本尾款。目标 30 天内出货。',
  meta: {
    role: '你的角色：入职第 4 周的外贸业务员小张（师傅 Anna 影子指导）',
    product: 'LED-Bright Model LB-G20 · 20W 车库感应灯',
    qty: '1,200 pcs · FOB Shenzhen USD 8.90/pc',
    total: 'USD 10,680（约 CNY 77,500）',
    term: 'FOB Shenzhen · 30% T/T + 70% T/T against B/L copy',
    deadline: '交期 25 个工作日 · 目标 ETD 2026-08-05',
  },
  timeline: [
    {
      day: 'Day 1',
      phase: '① 询盘确认 + PI 制作',
      title: '收到客户 PO 确认，24h 内出具 PI 并签回',
      actions: [
        '师傅 Anna 让你把客户 PO 邮件里的 5 个关键字段（型号/数量/单价/付款/交期）截图对齐 PI',
        '用公司 PI 模板填单，重点校对：包装方式（每箱 10pc，共 120 箱）、HS 编码（9405.40.9000）、唛头（AL NOOR / DUBAI / C/NO. 1-120）',
        '发 PI 后同步发一封 heads-up 邮件说明"银行到账后 24h 内下生产单"',
      ],
      artifacts: [
        {
          type: 'email',
          label: '客户 PO 确认邮件（客户 → 你）',
          from: 'purchasing@alnoorlighting.ae',
          to: 'sales05@led-bright.com',
          subject: 'PO Confirmation - LB-G20 x 1200pcs',
          content: 'Dear Zhang,\n\nAfter internal review, we confirm the order as below and please issue Proforma Invoice for our T/T deposit:\n\n- Model: LB-G20 (20W Sensor Garage Light)\n- Qty: 1,200 pcs\n- Unit Price: USD 8.90 FOB Shenzhen\n- Total: USD 10,680\n- Payment: 30% T/T deposit + 70% T/T against B/L copy\n- Shipping mark: AL NOOR / DUBAI / C/NO. 1-120\n- Target ETD: before Aug 5, 2026\n\nPlease issue PI today so we can arrange the deposit tomorrow.\n\nBest regards,\nAhmad Hassan\nAl Noor Lighting LLC',
        },
        {
          type: 'document',
          label: 'Proforma Invoice · PI-LB20260710-01（关键字段版）',
          rows: [
            ['Seller', 'Shenzhen LED-Bright Lighting Co., Ltd.  |  1701 Bldg A, Nanshan Software Park, Shenzhen'],
            ['Buyer', 'Al Noor Lighting LLC  |  Warehouse 7, Al Quoz Industrial 4, Dubai, UAE'],
            ['PI No. / Date', 'PI-LB20260710-01  /  2026-07-10'],
            ['Description', 'LED Sensor Garage Light, Model LB-G20, 20W, AC85-265V, 3-year warranty'],
            ['HS Code', '9405.40.9000'],
            ['Qty / Unit Price', '1,200 pcs × USD 8.90 = USD 10,680.00'],
            ['Packing', '10 pcs / inner box, 10 inner / carton → 120 cartons, 45×35×32 cm, 12 kg/ctn'],
            ['Total G.W. / Vol.', '1,440 kg  /  6.05 CBM'],
            ['Incoterms', 'FOB Shenzhen (Yantian Port)'],
            ['Payment', '30% T/T advance (USD 3,204) + 70% T/T against scanned B/L copy (USD 7,476)'],
            ['Bank Info', 'Bank of China SZ Nanshan Branch · A/C 774-2001-1123-4567 · SWIFT BKCHCNBJ45A'],
            ['Lead Time', '25 working days after deposit received'],
            ['Validity', 'PI valid for 7 days · 报价含 20% 汇率 buffer'],
            ['Shipping Mark', 'AL NOOR / DUBAI / C/NO. 1-120 / MADE IN CHINA'],
          ],
        },
        {
          type: 'checklist',
          label: 'PI 自检 12 项（师傅 Anna 版本）',
          items: [
            { done: true, text: '公司抬头/银行信息与营业执照一致（防被 fishing 篡改）' },
            { done: true, text: 'HS 编码查 tariffnumber.com 确认迪拜进口关税 5%' },
            { done: true, text: 'FOB 港口写死 Yantian（避免客户改到 Shekou 增加拖车成本）' },
            { done: true, text: '30% 定金金额到"元"位（不四舍五入）方便客户电汇' },
            { done: true, text: '交期用"25 working days after deposit received"而非固定日期' },
            { done: true, text: '包装明细（120 ctns × 12 kg）与后续箱单一致' },
            { done: true, text: '唛头字段与客户邮件原文逐字符对照' },
            { done: true, text: 'PI 有效期 7 天（防汇率大幅波动）' },
            { done: true, text: '客户抬头拼写 Al Noor Lighting LLC（LLC 别丢）' },
            { done: true, text: 'PI 编号内含日期 + 客户代码，方便系统检索' },
            { done: true, text: '底部加"Signed and stamped by both parties as sales contract"' },
            { done: true, text: 'PDF + PNG 双附件发送（客户手机看得清）' },
          ],
        },
      ],
    },
    {
      day: 'Day 2',
      phase: '② 定金到账 + 下生产单',
      title: '客户当日打款 30% 定金 USD 3,204，你走内部生产流程',
      actions: [
        '银行回单出来后先截图给 Anna，Anna 让你隔 1 小时刷 SWIFT MT103 是否入账（有时会卡合规审查）',
        '入账后 15 分钟内发 THANK-YOU 邮件通知客户"定金已到账，生产已下单"',
        '内部系统提生产单 PROD-LB-20260711，PMC 排期给出预计完工日 2026-07-28',
        '同步告知船运部预订 8 月 5 日左右从盐田到杰贝阿里的整箱位（1×20GP）',
      ],
      artifacts: [
        {
          type: 'email',
          label: '定金到账确认（你 → 客户）',
          from: 'sales05@led-bright.com',
          to: 'purchasing@alnoorlighting.ae',
          subject: 'Deposit Received - PI-LB20260710-01 - Production Started',
          content: 'Dear Ahmad,\n\nGreat news – we have received your 30% deposit USD 3,204 today (BOC ref# 20260711SZ998234). Thank you for the fast payment!\n\nProduction has been officially released this afternoon (internal PO: PROD-LB-20260711). Below is the timeline you can share with your team:\n\n- Jul 11: Production start\n- Jul 24: 50% completion – interim QC report will be shared\n- Jul 28: Production complete + in-house full inspection\n- Jul 29-30: 3rd-party inspection window (if you want us to book SGS, please confirm by Jul 20)\n- Aug 1: Shipping mark labeling + loading photo\n- Aug 5: Vessel ETD Yantian → Jebel Ali (approx. 18 days sailing)\n- Aug 23: ETA Jebel Ali\n\nI will send you weekly Wed updates. Any changes on your side, please let me know ASAP.\n\nBest regards,\nZhang Wei | LED-Bright',
        },
        {
          type: 'note',
          label: '师傅 Anna 现场点评（钉钉截图）',
          content: '✅ 邮件写得比第 3 周进步大，用 timeline 让客户抓得住重点\n✅ 主动提出 SGS 验厂选项，是加分项（老外一般不会主动问）\n⚠️ 但你漏了一件事：定金到账后 24h 内应该在 CRM 里把这个客户的"标签"从"意向"改成"活跃客户"，触发我们下一次的 push 报价机会。去改一下\n⚠️ SWIFT 号码不要出现在给客户的邮件里，是我们的内部凭证，防信息泄露。下次去掉',
        },
      ],
    },
    {
      day: 'Day 14',
      phase: '③ 半程验货 + 客户异议处理',
      title: '生产到 50%，客户微信提出"能不能换更亮的透镜"',
      actions: [
        '车间发来 600 pcs 完工照片，你先自查外观 → 抽 20 pcs 亮度测试 → OK',
        '把车间实拍视频 + IES 光型图发客户，客户当天下午突然提出想换 30° 窄角透镜',
        '你不能直接答应也不能直接拒绝，先问 Anna → Anna 让你 3 步走：确认技术可行性 → 报涨价 → 给客户 24h 决定',
        '技术部反馈：换透镜要延期 5 天 + 每 pc 涨 USD 0.35。你把三点写成邮件让客户选',
        '客户 4 小时后回复："OK, keep original lens, do not delay shipment"，皆大欢喜',
      ],
      artifacts: [
        {
          type: 'chat',
          label: 'WhatsApp 沟通片段 · 2026-07-24',
          messages: [
            { from: 'client', name: 'Ahmad', time: '14:02', text: 'Hi Zhang, just saw your production video – looks great! One question, can we change to 30° narrow lens? My retail customer thinks it will look more premium.' },
            { from: 'me', name: 'You', time: '14:05', text: 'Thanks Ahmad, let me confirm with our engineer and get back to you within 2 hours 👍' },
            { from: 'me', name: 'You', time: '15:48', text: 'Ahmad, here is the honest feedback from engineering:\n1) Technically YES, we can swap to 30° narrow lens\n2) Trade-off: +5 working days delay (new ETD Aug 10)\n3) Cost: +USD 0.35/pc = +USD 420 total\n\nOption A: Keep original 120° wide + on-time Aug 5 shipment\nOption B: Switch to 30° narrow + Aug 10 ETD + +USD 420\n\nPlease confirm by tomorrow 12:00 UAE time so we don\'t lose the vessel booking. 🙏' },
            { from: 'client', name: 'Ahmad', time: '19:15', text: 'OK Zhang, keep original lens, do not delay shipment. My retail customer can wait for next batch to try the narrow one. Thanks for the clear options!' },
            { from: 'me', name: 'You', time: '19:17', text: 'Perfect, will keep the schedule. Full production photo will be shared on Jul 28. 🚀' },
          ],
        },
        {
          type: 'note',
          label: '本次沟通复盘（你自己写给 Anna）',
          content: '收获 1：面对变更需求，先说 "let me confirm and get back within 2 hours"，是黄金句式\n收获 2：给客户"A/B 二选一"比开放式问"你想怎么办"决策快 3 倍\n收获 3：加价 + 延期都要一次说清楚，客户最讨厌被"挤牙膏"\n下次要改进：应该在 PI 阶段就写清楚"任何配置变更需在生产 30% 前提出"，避免这类中途变更',
        },
      ],
    },
    {
      day: 'Day 20',
      phase: '④ 验货 + 报关资料准备',
      title: '完工，安排出运 + 报关材料一次性备齐',
      actions: [
        '生产完工，你亲自到车间做 in-house 抽检：120 箱抽 8 箱（按 AQL 2.5，Level II）',
        '拍装箱过程照片：单箱内包装 → 封箱 → 打托 → 唛头贴纸，共 40 张，做成 PDF 发客户',
        '同步整理"报关五件套"给货代：INV / PL / CI / MSDS / 电池认证声明（LED 灯要 MSDS 是因为客户要求）',
        '货代订到 MSC 船公司 8 月 5 日 Yantian 出发的 20GP 舱位，SO No. MSC26080501',
      ],
      artifacts: [
        {
          type: 'document',
          label: 'Packing List · PL-LB20260728-01',
          rows: [
            ['Description', 'LED Sensor Garage Light Model LB-G20'],
            ['Total Ctns', '120 CTNS'],
            ['Ctn Spec', '45 × 35 × 32 cm · 12 kg N.W. / 13 kg G.W.'],
            ['Total N.W. / G.W.', '1,440 kg / 1,560 kg'],
            ['Total Volume', '6.05 CBM'],
            ['Container', '1 × 20\'GP · MSC LOAD PORT: Yantian'],
            ['Shipping Mark', 'AL NOOR / DUBAI / C/NO. 1-120 / MADE IN CHINA'],
            ['Serial No. Range', 'LB-G20-20260728-0001 to LB-G20-20260728-1200'],
          ],
        },
        {
          type: 'checklist',
          label: '报关五件套 · 移交货代前自查',
          items: [
            { done: true, text: 'Commercial Invoice：金额 USD 10,680（与 PI 一致）· 抬头 Al Noor Lighting LLC · 印章签字' },
            { done: true, text: 'Packing List：120 ctns · 6.05 CBM · 唛头 AL NOOR / DUBAI · 与实际装柜一致' },
            { done: true, text: '出口报关委托书（盖公司公章 + 财务章）' },
            { done: true, text: 'MSDS：LED 灯锂电池含量声明（客户 SGS 要求）' },
            { done: true, text: 'CE / RoHS / SASO 认证复印件（阿联酋清关必需 SASO）' },
            { done: true, text: '电子口岸预录入编号：SHZH20260805-LB01' },
            { done: false, text: '⚠️ 待完成：出口退税发票开具（申报出口后 15 天内财务处理）' },
          ],
        },
      ],
    },
    {
      day: 'Day 26',
      phase: '⑤ 出运 + 尾款催收',
      title: '船开后 3 天，B/L Copy 出来立即催收 70% 尾款',
      actions: [
        '船代通知 8 月 5 日 22:30 MSC IRINA V.UT628W 离港，你把提单副本 + 装船水单发客户',
        '尾款催款邮件严格按 SOP：金额到分 + 银行信息完整 + 附 B/L copy PDF + 给出付款截止日',
        '客户当天下午安排电汇，隔天早晨到账 USD 7,476',
        '收到全款后 30 分钟内释放正本 B/L（3/3 全套）给客户 DHL 快递'
      ],
      artifacts: [
        {
          type: 'email',
          label: '70% 尾款催收邮件',
          from: 'sales05@led-bright.com',
          to: 'accounting@alnoorlighting.ae',
          cc: 'purchasing@alnoorlighting.ae',
          subject: 'Balance Payment Due - PI-LB20260710-01 - USD 7,476 - B/L Copy Attached',
          content: 'Dear Al Noor Accounting Team,\n\nOur shipment has been successfully loaded on MSC IRINA V.UT628W and departed Yantian on Aug 5, 2026 22:30 (Beijing time). ETA Jebel Ali is Aug 23.\n\nAs per our PI terms, please arrange the balance payment as below:\n\n- PI No.: PI-LB20260710-01\n- Balance Amount: USD 7,476.00 (Seven Thousand Four Hundred Seventy-Six only)\n- Beneficiary: Shenzhen LED-Bright Lighting Co., Ltd.\n- Bank: Bank of China SZ Nanshan Branch\n- A/C: 774-2001-1123-4567\n- SWIFT: BKCHCNBJ45A\n- Payment Deadline: Aug 9, 2026 (before original B/L release)\n\nAttached please find:\n1. B/L Copy (MSCU-DXB-2608050213)\n2. Signed Commercial Invoice\n3. Signed Packing List\n4. Certificate of Origin (Form E for GCC preferential tariff)\n\nOnce we confirm the balance receipt, original B/L (3/3 set) will be released to your DHL account within 30 minutes.\n\nBest regards,\nZhang Wei | LED-Bright | +86 138 xxxx xxxx',
        },
        {
          type: 'table',
          label: '订单交付台账 · 关闭前财务复核',
          headers: ['项目', '金额（USD）', '到账日期', '凭证'],
          rows: [
            ['30% Deposit', '3,204.00', '2026-07-11', 'BOC 20260711SZ998234'],
            ['70% Balance', '7,476.00', '2026-08-06', 'BOC 20260806SZ665412'],
            ['合计已收', '10,680.00', '', ''],
            ['出口退税（预估 13%）', '+9,150 CNY', '预计 2026-09-15', '待税局处理'],
            ['货代费', '-1,850 CNY', '2026-08-08', '深圳货代发票'],
            ['净利润', '≈ CNY 18,200（毛利率 23.5%）', '', ''],
          ],
        },
      ],
    },
    {
      day: 'Day 40',
      phase: '⑥ 售后 + 客户复购激活',
      title: '客户签收后 3 天，主动做售后回访触发复购',
      actions: [
        '客户 8 月 25 日签收后你没有等他反馈，主动发邮件问"到货是否 100% OK / 有没有需要我们协助的"',
        '客户回复"very satisfied"，你顺势推 3 个动作：请求评价 + 邀请复购 + 发下一代新品预告',
        '一周后客户主动发第二单询盘：LB-G20 追加 800 pcs + 想试 LB-Slim 新款样品 5 pcs',
        '你完成从"零基础新兵"到"独立 close 首单 + 激活复购"的完整闭环',
      ],
      artifacts: [
        {
          type: 'email',
          label: '售后 3 连击邮件（模板化）',
          from: 'sales05@led-bright.com',
          to: 'purchasing@alnoorlighting.ae',
          subject: 'Container Arrived - Any Feedback? + New Product Preview 🎁',
          content: 'Dear Ahmad,\n\nGreat to hear the container has cleared customs and arrived at your warehouse! 🎉\n\nA quick 3-part note:\n\n1) Any feedback on the goods? If anything is not 100% as expected, please let me know within 7 days so we can address it under our 3-year warranty. So far our defect rate is <0.3% but we always want to hear your side.\n\n2) Would you consider leaving us a review on Alibaba? It really helps our team. I have attached a 1-click review link + a 30-second script if you don\'t want to write from scratch.\n\n3) Preview of what\'s coming: Our engineering team just released the LB-Slim series (18W, ultra-thin 22mm, IP65) targeting UAE outdoor market. I can send you 3 free samples with your next order – no strings attached. Interested?\n\nThank you again for trusting us with your first order. Looking forward to a long partnership!\n\nBest regards,\nZhang Wei | LED-Bright',
        },
        {
          type: 'note',
          label: '首单毕业总结 · 我学到的 5 件事',
          content: '1. 询盘 → PI → 定金 → 生产 → 验货 → 出运 → 尾款 → 售后，8 步一步都不能省\n2. 邮件里永远给客户"A/B 二选一"而非开放问题\n3. 遇到变更请求先说 "let me confirm and get back within X hours"，永远不要即兴承诺\n4. 定金到账那一刻起，你不再是"跟单员"而是"客户经理"，每周主动 push 才有下一单\n5. 售后不是订单终点，是复购起点。产品送到 → 3 天内主动问 → 一周内推新品，闭环激活',
        },
      ],
    },
  ],
  outcome: {
    result: '订单 USD 10,680 顺利闭环，净利润约 CNY 18,200（毛利率 23.5%）；客户 15 天内主动追加 800 pcs 复购单 + 索取 LB-Slim 样品，转化为活跃客户。',
    grade: 'A · 独立完成度 90%（师傅仅在变更处理与 PI 自检两处介入）',
    lessons: [
      '订单全流程 8 大节点：询盘→PI→定金→生产→验货→出运→尾款→售后，每节点都要有可验证的书面凭证',
      '面对变更请求，"先确认再答复 + A/B 二选一"是新手保命话术',
      '定金到账后就要在 CRM 打"活跃客户"标签，触发 push 报价 SOP',
      '售后 3 连击邮件（反馈 + 评价 + 新品）是激活复购的黄金 SOP',
      '首单结束一定要写 5 条个人复盘，沉淀成个人 wiki，第二单第三单可直接复用',
    ],
  },
};

/* ============ L1 Week 1 · 行业破冰 + 工位就绪 ============ */
window.TIER_SAMPLES.l1[0] = {
  title: '虚拟案例：新人小张入职 GreenBamboo 竹制品外贸首周破冰',
  scenario: '杭州一家竹制餐厨具工厂，主营竹砧板/竹碗/竹刀叉，出口欧美。你作为 0 经验管培生，需要 7 天内完成"从看不懂目录到能独立回答简单客户问题"的转变。',
  meta: {
    role: '你的角色：入职第 1 周新人小张（师傅 Cathy 全程带教）',
    product: 'GreenBamboo 竹制餐厨具 40+ SKU',
    focus: '行业认知 + 产品熟悉 + 工位 SOP',
    deliverable: '第 1 周行业认知手册 · A3 全流程图 + 50 术语表 + 老订单复盘',
  },
  timeline: [
    {
      day: 'Day 1-2',
      phase: '① 全景扫盲',
      title: '一张图看懂外贸 12 角色 + 熟读产品册',
      actions: [
        'Cathy 让你画出「工厂→货代→船公司→清关→分销→零售→终端」12 角色 A3 图',
        '拿到公司 100 页产品册，用 SQ3R 法（Survey/Question/Read/Recite/Review）3 小时读完',
        '整理 50 个高频术语（FOB/CIF/PI/SC/HS Code/MOQ 等）中英对照 Excel',
      ],
      artifacts: [
        {
          type: 'document', label: '外贸 12 角色速查表',
          rows: [
            ['工厂 Factory','生产端，签 PI 收款开船'],
            ['SOHO/贸易商','桥接工厂与国外客户，赚差价'],
            ['货代 Forwarder','订舱/拖车/报关，收取运费'],
            ['船公司 Carrier','签发提单 B/L，收取海运费'],
            ['报关行 Customs Broker','代理向海关递交报关单'],
            ['清关代理 Import Agent','目的港代理提货 + 缴税'],
            ['分销商 Distributor','进口后铺货给本地零售'],
            ['终端零售 Retailer','对接消费者，最终售价'],
            ['银行 Bank','T/T 电汇 or L/C 信用证结算'],
            ['信保 Trade Assurance','阿里国际站担保交易'],
            ['第三方验货 QC','SGS/BV/ITS 出货前抽检'],
            ['保险公司','ICC(A) 一切险 0.15% 保费'],
          ],
        },
      ],
    },
    {
      day: 'Day 3-5',
      phase: '② 影子跟单',
      title: '贴身跟 Cathy 一天，观察 20 个业务动作',
      actions: [
        '9:00 站在 Cathy 工位后看她回 3 封询盘 → 记录每封回复用了几分钟、用了哪些模板',
        '下午跟 Cathy 去车间看 1 单大货 QC → 学会 AQL 2.5 抽样表怎么读',
        '晚上复盘一笔 2023 年成交订单，写 500 字「这笔单为什么能成」',
      ],
      artifacts: [
        {
          type: 'note', label: '影子跟单笔记（节选）',
          content: '9:03 Cathy 回西班牙客户邮件，用了「Thanks for your interest, here is our quotation…」模板 → 40 秒发出\n9:28 客户追问 sample fee，Cathy 秒回「Sample free, freight collect via your DHL account」\n10:15 电话找货代 David 问 40HQ 到 Hamburg 3 家船司报价\n14:00 车间 QC，Cathy 抓到 1 pcs 竹碗边缘毛刺 → 让工厂返工 30 pcs\n★ 学到：好业务员每一个动作都有模板，效率靠"复用"不是"聪明"',
        },
      ],
    },
    {
      day: 'Day 6-7',
      phase: '③ 交付验收',
      title: '产出第 1 周认知手册 + Mentor 打分',
      actions: [
        '合并 A3 全流程图 + 50 术语表 + 老订单复盘 → 1 份 PDF 交付',
        'Cathy 在《新人 4 周成长评估表》给 82 分（优），下周开始独立回复非报价询盘',
      ],
      artifacts: [
        {
          type: 'checklist', label: '第 1 周硬毕业指标',
          items: [
            { text: '完成 12 角色 A3 全流程图', done: true },
            { text: '50 术语中英对照 Excel + Anki 录入', done: true },
            { text: '1 笔历史订单复盘 500 字', done: true },
            { text: '工位邮箱 + CRM + 跟进表 3 件套配好', done: true },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '第 7 天交付《新人认知手册 V1.0》，Cathy 评语「结构清晰，术语准确，可以开始独立回询盘」；从第 2 周开始独立回非报价询盘。',
    grade: 'A · Mentor 82 分',
    lessons: [
      '外贸不是"英语好就行"，本质是"信息串联能力"——每一个角色都在传递单据',
      '产品册要用 SQ3R 精读法，光翻一遍等于没看',
      '术语表用 Anki 每天 15 分钟，1 个月自动过关',
      '影子跟单要记录时间戳 + 用了什么模板，模板是外贸最大生产力',
    ],
  },
};

/* ============ L1 Week 2 · 商务英语 + 邮件写作 ============ */
window.TIER_SAMPLES.l1[1] = {
  title: '虚拟案例：新人小张独立回复第 1 封真实询盘 · 意大利买家 Marco',
  scenario: '第 2 周 Cathy 把一封来自意大利买家的询盘转给你独立回复。买家 Marco，采购经理，问竹砧板 45×30cm 报价 + 交期。你需要用 24 小时内出具专业英文回复。',
  meta: {
    role: '入职第 2 周小张（Cathy 后台审核）',
    scenario: '意大利买家询盘',
    product: '竹砧板 45×30cm × 2000 pcs',
    deliverable: '个人邮件模板库 V1.0 · 8 场景 × 3 版本共 24 模板',
  },
  timeline: [
    {
      day: 'Day 1',
      phase: '① 询盘分级 + 起草回复',
      title: '判定 Marco 询盘为「真实需求 · B 级」并起草 Hook-Value-CTA 回复',
      actions: [
        '用 5 类分级法判定：Marco 提供公司名+官网+具体尺寸+数量 → 真实 B 级（>1000pcs）',
        'Hook：致谢+抓痛点；Value：报价+MOQ+样品政策+资质；CTA：72h 内视频看厂',
        'Grammarly 打分 92 分，Cathy 修改 3 处后发出',
      ],
      artifacts: [
        {
          type: 'email', label: '第 1 封独立回复的询盘邮件',
          from: 'sara@greenbamboo.com',
          to: 'marco.rossi@italkitchen.it',
          subject: 'Re: Bamboo Cutting Board 45×30cm - Quote & Free Sample Ready',
          content: 'Dear Marco,\n\nThank you for reaching out to GreenBamboo. Sourcing FSC-certified bamboo boards for the EU market can be tricky — many suppliers skip the food-contact certificate. Here is our answer:\n\n🎋 Model: GB-CB-4530 · Moso bamboo · 45×30×1.8cm\n💰 FOB Ningbo USD 3.60/pc @ 2,000 pcs (MOQ 500)\n📅 Lead time: 22 days after 30% deposit\n📜 Certificates: LFGB, FDA, FSC-Mix ready · TUV report attached\n🎁 Sample: 2 pcs free, freight collect via your DHL account\n\nWould you have 15 min this Thursday for a live factory tour on Zoom? I will show you the CNC edging line and QC station.\n\nBest,\nSara | GreenBamboo Co., Ltd.\n+86 138-xxxx-xxxx | www.greenbamboo.com',
        },
      ],
    },
    {
      day: 'Day 2-4',
      phase: '② 8 场景模板搭建',
      title: '把日常回复沉淀为 24 个模板 → 未来 3 秒调用',
      actions: [
        '8 场景：开发信 / 询盘回复 / 报价 / 砍价应对 / 催款 / 催样 / 投诉 / 感谢',
        '每场景写 3 版本（正式/中性/亲切），Grammarly 平均 90+',
        '存到石墨文档"模板库"，Cathy 审批后共享给整个业务组',
      ],
      artifacts: [
        {
          type: 'table', label: '8 场景邮件模板矩阵',
          headers: ['场景','正式版','中性版','亲切版'],
          rows: [
            ['开发信','Dear Sir/Madam...','Hi [Name]...','Hey [Name]! Just saw your...'],
            ['询盘回复','Thank you for your inquiry...','Thanks for reaching out...','Great to hear from you!'],
            ['报价','Please find our quotation...','Here is our best price...','Below is the sharpest price I can offer today...'],
            ['砍价','We regret we cannot...','How about we meet in the middle...','I feel you – let me try one more time with my boss...'],
            ['催款','Kindly arrange the balance...','Just a friendly reminder...','Hey, any update on the wire? 🙏'],
            ['催样','Awaiting your sample approval...','Have you had a chance to review the samples?','Any thoughts on the samples? Missing anything?'],
            ['投诉','We deeply apologize for...','Sorry to hear about this...','Oh no, that\'s frustrating – let\'s fix it right away'],
            ['感谢','We sincerely appreciate...','Thanks so much for...','You made my day! Thank you so much 🎉'],
          ],
        },
      ],
    },
    {
      day: 'Day 5-7',
      phase: '③ Role-play + 视频交付',
      title: '用 ChatGPT 模拟印度买家砍价 → 录制 3min 英文自我介绍',
      actions: [
        'ChatGPT 扮演印度买家 Rajesh，砍价 15 分钟 → 你练"How can we work this out?"',
        '录 3min 英文视频：公司介绍 60s + 产品优势 60s + FSC 认证故事 60s',
        '剪映加中英字幕，发给 Cathy 打分 → 84 分毕业',
      ],
      artifacts: [
        {
          type: 'chat', label: 'ChatGPT Role-play · 印度买家砍价片段',
          messages: [
            { from: 'them', name: 'Rajesh (ChatGPT)', time: '14:32', text: 'Your price is 30% higher than my current supplier in Xiamen. Give me your last price.' },
            { from: 'me', name: 'Sara', time: '14:33', text: 'I hear you, Rajesh. Before I go back to my boss – may I ask what certificates your Xiamen supplier has? Because our USD 3.60 already includes LFGB + FSC test, which alone costs USD 0.35/pc.' },
            { from: 'them', name: 'Rajesh (ChatGPT)', time: '14:35', text: 'Fair enough. But still, 3.30 is my target.' },
            { from: 'me', name: 'Sara', time: '14:36', text: 'How about this: 3.45 for 2000 pcs, or 3.30 if you can bump to 3000 pcs. Same lead time. Which works better on your side?' },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: 'Marco 询盘 72h 内回信，确认要 2 pcs 样品 + 视频看厂邀约；模板库上线一周内业务组邮件回复时长从 8 分钟降到 3 分钟。',
    grade: 'B+ · Grammarly 平均 91',
    lessons: [
      '邮件写作三段式 Hook-Value-CTA 是最快能被记住的结构',
      '询盘 5 类分级 → 别把所有询盘都当 VIP 回，浪费精力',
      '模板不是懒惰，是可复用的战斗力',
      'ChatGPT role-play 是零成本练砍价的最好陪练',
    ],
  },
};

/* ============ L1 Week 3 · 客户开发实战 ============ */
window.TIER_SAMPLES.l1[2] = {
  title: '虚拟案例：7 天开发 100 家精准客户 · 三渠道组合拳 · 回复率 6.4%',
  scenario: '第 3 周 Cathy 给你 KPI：一周内建 100 家精准目标客户库 + 发出 50 封开发信 + 回复率≥3%。你要综合运用 Google 高级搜索 / LinkedIn / 海关数据三渠道。',
  meta: {
    role: '入职第 3 周小张（独立执行）',
    focus: '关键词金字塔 + Dork 抓官网 + LinkedIn 加人 + 海关数据筛买家',
    kpi: '100 家客户库 + 50 封开发信 + 回复率 ≥3%',
    deliverable: '第 1 个 100 家精准客户库 Excel + 30 封已发开发信 + 3 张深度画像卡',
  },
  timeline: [
    {
      day: 'Day 1-2',
      phase: '① 关键词金字塔',
      title: '搭建 4 层关键词模型 + Google Dork 抓 30 家官网',
      actions: [
        '产品词 bamboo cutting board / 场景词 kitchen supplies / 人群词 wholesaler / 长尾 FSC certified',
        'Google Dork：site:.de intitle:"bamboo cutting board" "contact us" -alibaba -amazon',
        '30 家官网抓到 → 用 Hunter.io 反查决策人邮箱 → 命中率 73%',
      ],
      artifacts: [
        {
          type: 'code', lang: 'Google Dork', label: '10 条实战搜索指令',
          content: '// 官网抓取\nsite:.de "bamboo cutting board" "wholesale" -alibaba\nsite:.uk intitle:"kitchen supplies" "distributor"\n\n// PDF 目录 / 采购清单\nfiletype:pdf "cutting board" "purchase order" 2025\nfiletype:xls "supplier list" bamboo\n\n// 邮箱 & 联系页\ninurl:contact site:.fr "cutting board" -amazon\n"email us" "kitchen" site:.es -pinterest\n\n// 展会名单反查\n"Ambiente 2025" "exhibitor" bamboo\n"Chicago Housewares Show" "buyer" kitchenware\n\n// 领英决策人\nsite:linkedin.com/in "purchasing manager" "kitchenware" Germany\nsite:linkedin.com/in "category buyer" "housewares" UK',
        },
      ],
    },
    {
      day: 'Day 3-4',
      phase: '② LinkedIn + 海关数据',
      title: 'LinkedIn 加 100 人 + 腾道抓 50 家近半年活跃买家',
      actions: [
        'LinkedIn 打造个人档案 8 要素（头像/标题/背景图/精选/经历/技能/推荐/成就）',
        '按目标市场加 100 人：Purchasing Manager @ Kitchenware EU，接受率 41%',
        '腾道数据 HS Code 4419.11 筛 6 个月有采购的欧洲 50 家买家',
      ],
      artifacts: [
        {
          type: 'chat', label: 'LinkedIn 首条消息 3 版模板 A/B/C',
          messages: [
            { from: 'me', name: 'Version A · 直接款', time: '', text: 'Hi Klaus, I saw you handle sourcing for Küchen Profi. We make FSC bamboo boards for EU brands. Would a 2-page catalog be useful?' },
            { from: 'me', name: 'Version B · 内容款', time: '', text: 'Hi Klaus, just published a report on EU LFGB updates for bamboo kitchenware — thought your team might find it useful before Q4 sourcing. DM me and I\'ll send it over.' },
            { from: 'me', name: 'Version C · 恭维款', time: '', text: 'Hi Klaus, Küchen Profi\'s new eco-line is exactly where our FSC bamboo boards fit. Would love to send a sample if you\'re open.' },
          ],
        },
        {
          type: 'table', label: '腾道海关数据筛选结果（节选）',
          headers: ['公司','国家','近 6 月采购次数','单次金额','匹配度'],
          rows: [
            ['Küchen Profi GmbH','德国','8','USD 45,000','★★★★★'],
            ['Vinga of Sweden AB','瑞典','6','USD 32,000','★★★★☆'],
            ['Kitchen Craft UK','英国','12','USD 28,000','★★★★★'],
            ['Cook & Co France','法国','4','USD 18,000','★★★☆☆'],
            ['Emilia Bianchi SRL','意大利','7','USD 22,000','★★★★☆'],
          ],
        },
      ],
    },
    {
      day: 'Day 5-7',
      phase: '③ A/B 测试 + 交付',
      title: '30 封开发信 A/B 测试 → 回复率 6.4% 双倍达标',
      actions: [
        '30 封 = 15 封 Hook-Value-CTA 标准版 + 15 封故事型个性化版',
        '标准版打开 43% 回复 3.3%，故事版打开 51% 回复 9.5% ★',
        '2 家客户约视频看厂 → 建 3 张深度画像卡，Cathy 打 88 分'
      ],
      artifacts: [
        {
          type: 'document', label: '深度画像卡 · Küchen Profi GmbH',
          rows: [
            ['公司','Küchen Profi GmbH · 德国 Solingen'],
            ['规模','年营收 EUR 45M · 员工 180 人'],
            ['决策人','Klaus Weber · Head of Sourcing · 45 岁 · MBA'],
            ['痛点','2024 年被中国供应商 3 次交期违约 → 极度看重「准时率」'],
            ['沟通偏好','德式直接 · 邮件+电话，忌拖泥带水'],
            ['我的策略','首封主打「准时率 98.7% · 附 24 个月出货记录」→ 直击痛点'],
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '7 天建 100 家客户库，发出 30 封开发信回复 6.4%（KPI 3% 的 2 倍），2 家约视频看厂，其中 Küchen Profi 进入商机漏斗，预计 Q4 打样。',
    grade: 'A · Mentor 88 分',
    lessons: [
      '关键词金字塔（产品/场景/人群/长尾）比单一关键词命中率高 3-5 倍',
      'Google Dork "-alibaba -amazon" 排除掉平台是精准客户开发关键',
      'LinkedIn 首条消息用「内容款」比「直接款」接受率高 2.4 倍',
      'A/B 测试开发信版本是每个新人都该做的实验',
      '深度画像卡不是花架子，是让客户觉得"你懂我"的最快路径',
    ],
  },
};

/* ============ L2 Week 1-2 · 外贸认知重塑 + 客户画像 ============ */
window.TIER_SAMPLES.l2[0] = {
  title: '虚拟案例：小李进阶操盘 · 儿童安全座椅目标市场 ICP 五维画像 + 100 家客户库',
  scenario: '你从执行岗晋升业务主管，负责儿童安全座椅美国+德国双市场破局。前 2 周任务：完成 ICP 客户画像五维模型 + 交叉验证 100 家精准目标客户。',
  meta: {
    role: '业务主管小李（团队 3 人协作）',
    product: '儿童安全座椅 Group 0-3 · ISOFIX',
    market: '美国 + 德国双市场',
    deliverable: '客户名单 ≥100 家、领英连接 ≥50、CRM 分级 A/B/C 完成、开发信 3 版模板过审',
  },
  timeline: [
    {
      day: 'Day 1-3',
      phase: '① ICP 五维建模',
      title: '产出行业 / 规模 / 地区 / 角色 / 痛点五维 ICP 画像文档',
      actions: [
        '按 JBTD 拆解 3 类目标客户：连锁婴童零售 / 车企配件 OEM / 亚马逊头部卖家',
        '五维评分表打分，锁定"欧美连锁婴童零售"为 A 类 ICP',
        '每类 ICP 写 1 段痛点故事：召回压力/供应稳定性/欧盟 R129 认证'
      ],
      artifacts: [
        {
          type: 'document', label: 'ICP 五维画像 · A 类客户',
          rows: [
            ['行业', '婴童用品连锁零售（BuyBuyBaby / Babies R Us / Kidsroom）'],
            ['规模', '年营收 EUR 50M+ · 门店 30+ · SKU 5000+'],
            ['地区', '德国 / 美国东西海岸'],
            ['角色', 'Category Buyer + Compliance Manager 双决策链'],
            ['核心痛点', '2024 年 R129 新规 → 现供应商 40% 型号需替换 · 时间窗口 6 个月'],
          ],
        },
      ],
    },
    {
      day: 'Day 4-8',
      phase: '② 海关+领英交叉验证',
      title: '20 家目标客户名单双源验证 · 命中率 85%',
      actions: [
        'Panjiva 拉过去 12 月 HS 9401 儿童座椅美国进口 Top50',
        '与 LinkedIn Sales Nav "Category Buyer + Baby" 结果交叉',
        '20 家客户命中 17 家双数据源 → 高置信度目标名单',
      ],
      artifacts: [
        {
          type: 'table', label: '海关+领英交叉验证结果（节选）',
          headers: ['公司', '海关采购次数(12M)', 'LinkedIn 决策人', '综合评级'],
          rows: [
            ['BuyBuyBaby (US)', '32', 'John Smith · Sr. Category Buyer', 'A+ ★★★★★'],
            ['Kidsroom.de (DE)', '18', 'Katrin Wolf · Head of Sourcing', 'A ★★★★☆'],
            ['Halfords Group (UK)', '12', 'Peter Cole · Buying Manager', 'A ★★★★☆'],
            ['Baby Village (NL)', '9', 'Jan de Vries · Purchasing', 'B ★★★☆☆'],
          ],
        },
      ],
    },
    {
      day: 'Day 9-14',
      phase: '③ CRM 分级 + 3 版开发信',
      title: '100 家客户 A/B/C 分级 + AIDA/PAS/故事型开发信矩阵',
      actions: [
        '按订单金额 × 决策速度 二维分级：A 类 20 家 · B 类 45 家 · C 类 35 家',
        'AIDA 版 (数据型) / PAS 版 (痛点型) / 故事型 3 版本，分别对应 3 类客户',
        'OKKI CRM 建库，A 类每周 push · B 类双周 · C 类月度',
      ],
      artifacts: [
        {
          type: 'email', label: '3 版开发信 · 主打欧盟 R129 合规痛点',
          from: 'sales.lead@safebaby.com',
          to: 'katrin.wolf@kidsroom.de',
          subject: 'R129 Ready — 6 Groups Certified, Ship-in-90-Days',
          content: 'Hi Katrin,\n\nSaw that Kidsroom.de just refreshed the "R129 Ready" filter on your site — congrats on staying ahead of the July 2027 mandatory switch.\n\nIf you still have 1-2 SKU gaps in the Group 0-1-2-3 line, we may be the fastest option:\n\n• 6 R129 certificates issued 2024-2026 (Booster + ISOFIX)\n• Own factory + TÜV witness testing in-house\n• Ship-in-90-days for volumes ≥ 500pcs\n• Reference: Currently supplying Halfords UK & Feuvert.fr\n\nWorth a 20-min call next Thursday? I can drop 3 SKU tech-packs & FOB Ningbo pricing beforehand.\n\nBest,\nMichael Liu\nSafeBaby Global',
        },
      ],
    },
  ],
  outcome: {
    result: '14 天产出 100 家客户库（A 类 20+B 类 45+C 类 35），领英连接 62 人，开发信矩阵通过导师评审，Kidsroom.de 首封回复率 8.3%。',
    grade: 'A- · 双源命中率 85% 超预期',
    lessons: [
      'ICP 五维模型的"痛点"要具体到法规/时间窗口，不能停在"要好产品"',
      '海关数据+领英交叉验证 = 高置信目标名单的最快捷径',
      '开发信 3 版本对应 3 类客户，不要一封开发信打天下',
    ],
  },
};

/* ============ L2 Week 3 · 客户开发进阶 A/B 测试 ============ */
window.TIER_SAMPLES.l2[1] = {
  title: '虚拟案例：200 封开发信 A/B 双臂实验 · 打开率 47%/回复率 9.1%',
  scenario: '拿到 100 家名单后，本周进入触达进攻。目标：200 封开发信设计成 A/B 双臂实验（主题行×开头 4 变量），跑数据得出最佳组合模板。',
  meta: {
    role: '业务主管小李（数据驱动）',
    experiment: 'A/B 双变量 · 2×2 = 4 组',
    volume: '200 封（每组 50）',
    kpi: '打开率 ≥40% · 回复率 ≥8% · 有效约会 ≥3',
    deliverable: '实验报告 + 冠军模板 + GA/SMTP 配置',
  },
  timeline: [
    {
      day: 'Day 1-2',
      phase: '① 实验设计',
      title: '2×2 双变量 A/B 因子实验',
      actions: [
        '变量 A：主题行「R129 Ready」vs「Are you evaluating…?」',
        '变量 B：开头「痛点数据型」vs「案例故事型」',
        '样本 50/组，p<0.05 显著性检验设置',
      ],
      artifacts: [
        {
          type: 'table', label: '2×2 因子实验矩阵',
          headers: ['组', '主题行', '开头', '样本量'],
          rows: [
            ['G1', 'R129 Ready', '痛点数据型', '50'],
            ['G2', 'R129 Ready', '案例故事型', '50'],
            ['G3', 'Are you evaluating…?', '痛点数据型', '50'],
            ['G4', 'Are you evaluating…?', '案例故事型', '50'],
          ],
        },
      ],
    },
    {
      day: 'Day 3-5',
      phase: '② 送达 + 追踪',
      title: 'SPF/DKIM/DMARC 完成 + Mailshake 排队投放',
      actions: [
        'Cloudflare DNS 加 SPF v=spf1 include:_spf.mailshake.com',
        '域名健康分从 63 提升到 92（Mailtester）',
        'Mailshake 排队 200 封 · 每小时 10 封 · 4 天投完',
      ],
      artifacts: [
        {
          type: 'code', lang: 'DNS TXT', label: 'SPF/DKIM/DMARC 配置',
          content: '// SPF\nv=spf1 include:_spf.mailshake.com include:mailgun.org ~all\n\n// DKIM (Mailshake)\nk=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...\n\n// DMARC\nv=DMARC1; p=quarantine; rua=mailto:dmarc@safebaby.com; adkim=s; aspf=s',
        },
      ],
    },
    {
      day: 'Day 6-7',
      phase: '③ 数据分析 + 冠军模板',
      title: '4 组回收：G2 主题+故事型 → 打开 47% 回复 9.1% ★',
      actions: [
        '4 组 open rate: G1 38% / G2 47% / G3 32% / G4 41%',
        '4 组 reply rate: G1 6% / G2 9.1% / G3 4% / G4 7%',
        '结论：主题行强 CTA + 故事型开头 = 冠军 · p=0.03 显著',
      ],
      artifacts: [
        {
          type: 'document', label: '冠军模板 G2（案例故事型）',
          rows: [
            ['Subject', 'R129 Ready — 6 Groups Certified, Ship-in-90-Days'],
            ['Hook (故事)', 'Last month a German buyer told us their previous supplier failed R129 side-impact retest, delaying 12,000 pcs of Q1 orders...'],
            ['Value', '6 R129 certificates · TÜV in-house · 90-day production window'],
            ['CTA', '15-min call this Thursday? I\'ll bring 3 SKU tech-packs.'],
            ['P.S.', 'Reference: Halfords UK, Feuvert.fr already switched.'],
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '200 封 A/B 实验完成，冠军组 G2 打开 47%/回复 9.1%，超过 KPI 40%/8%；4 家客户约视频会，1 家 Kidsroom.de 进入打样阶段。',
    grade: 'A · 显著性 p=0.03',
    lessons: [
      'A/B 双变量因子实验比单变量效率高 4 倍，同时看主题行×开头',
      'SPF/DKIM/DMARC 三件套是外贸邮件的"户口本"，缺一项进垃圾箱',
      '案例故事型开头击败痛点数据型，客户"共情"比"讲道理"回复率高 50%',
    ],
  },
};

/* ============ L2 Week 4 · 阿里国际站深度运营 ============ */
window.TIER_SAMPLES.l2[2] = {
  title: '虚拟案例：阿里国际站 30 天曝光 +42% · P4P ROI 2.3 · 询盘 +18 条',
  scenario: '公司阿里国际站店铺连续 3 月下滑，你接手做 30 天翻盘。用数据纵横挖蓝海词 → 详情页 FABE 改造 → P4P 三级投放 → RFQ 精准报价四板斧。',
  meta: {
    role: '业务主管小李（跨部门协作运营）',
    kpi: '曝光 +30% · 点击率 ≥3% · 询盘 ≥15 · P4P ROI ≥1.5',
    deliverable: '100 词词库 + 10 页详情页 + P4P 计划 + 15 条 RFQ 报价',
  },
  timeline: [
    {
      day: 'Day 1-5',
      phase: '① 数据纵横挖词',
      title: '100 词行业词库 · 蓝海词占比 38%',
      actions: [
        '搜索热度 × 供需比 × 转化指数 三维打分',
        '锁定 3 个蓝海词：isofix car seat r129 / booster seat 15-36kg / rotating baby car seat 360',
        '按核心词/精准词/长尾词/否词 4 层结构建 100 词词库',
      ],
      artifacts: [
        {
          type: 'table', label: '数据纵横 · Top10 蓝海词（节选）',
          headers: ['关键词', '搜索热度', '供需比', '转化指数', '综合评级'],
          rows: [
            ['r129 baby car seat', '85', '2.3 (蓝海)', '92', '★★★★★'],
            ['isofix booster 15-36kg', '72', '1.8 (蓝海)', '88', '★★★★★'],
            ['rotating car seat 360', '68', '1.2 (红海)', '85', '★★★☆☆'],
            ['baby capsule newborn', '55', '3.1 (蓝海)', '78', '★★★★☆'],
          ],
        },
      ],
    },
    {
      day: 'Day 6-15',
      phase: '② 5A + FABE 改造',
      title: '10 页主推详情页升级 · 点击率 1.8% → 3.4%',
      actions: [
        '主图五图：白底+场景+细节+对比+认证 · 15s 短视频',
        'FABE 结构：Feature 侧撞钢梁 → Advantage 通过 R129 → Benefit 保护 0-12 岁 → Evidence TÜV 报告',
        'A+ 首屏加"90 天交货 · 6 认证 · 5 客户 logo"三 badge',
      ],
      artifacts: [
        {
          type: 'document', label: '详情页 FABE 改造前后对比',
          rows: [
            ['Before', 'ISOFIX 儿童座椅 · 通过 ECE R44/04 · 高质量'],
            ['After F', '侧撞防护 5 层：EPP + 蜂窝铝 + 高密度海绵 + 记忆棉 + 3D 网面'],
            ['After A', '通过欧盟 R129 侧撞测试 · 冲击力吸收 68%（行业均值 42%）'],
            ['After B', '保护 0-12 岁儿童全成长阶段 · 一台顶三台省 EUR 400'],
            ['After E', 'TÜV 报告 #2024-BB-1832 · Halfords UK & Feuvert.fr 采购证明'],
          ],
        },
      ],
    },
    {
      day: 'Day 16-30',
      phase: '③ P4P + RFQ',
      title: '三级 P4P + 15 条 RFQ 精准报价',
      actions: [
        'P4P：核心词日预算 CNY 300 / 精准长尾 200 / 尾部长尾 100 · 否词 40 个',
        '3 天优化后 CPC 从 CNY 4.2 降到 2.8 · ROI 2.3',
        'RFQ 24h 首响 · 差异化模板 · 15 条报出 12 条回信',
      ],
      artifacts: [
        {
          type: 'checklist', label: '30 天翻盘复盘',
          items: [
            { text: '曝光量 +42%（KPI 30%）', done: true },
            { text: '点击率 3.4%（KPI 3%）', done: true },
            { text: '询盘 18 条（KPI 15）', done: true },
            { text: 'P4P ROI 2.3（KPI 1.5）', done: true },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '30 天曝光 +42% / 点击率 3.4% / 询盘 18 条 / P4P ROI 2.3，全部超 KPI；Kidsroom.de 通过 RFQ 主动询价，进入 Top10 客户漏斗。',
    grade: 'A+ · 4/4 KPI 达成',
    lessons: [
      '蓝海词的定义是"搜索热度 ≥50 + 供需比 <2.5"，光看热度会踩红海',
      'FABE 逐层递进比堆砌"高质量/好品质"话术转化率高 3 倍',
      'P4P 三级预算 + 40 个否词，前 3 天必须每天优化',
      'RFQ 24 小时首响是最容易达标的 KPI，慢一天转化率降 60%',
    ],
  },
};

/* ============ L2 Week 5 · 独立站 SEO 起量 ============ */
window.TIER_SAMPLES.l2[3] = {
  title: '虚拟案例：Shopify 独立站 30 天上线 · 收录率 94% · 核心词进 Top50',
  scenario: '除阿里国际站外，公司决定做独立站沉淀品牌流量。你 30 天内负责：Shopify 建站 + 500 词金字塔 + 20 SKU + 3 篇博客 + 10 条外链。',
  meta: {
    role: '业务主管小李（配合独立站运营）',
    stack: 'Shopify + Ahrefs + GSC + GA4',
    kpi: 'PageSpeed ≥85 · 收录率 ≥90% · 核心词 Top50 · 询盘 ≥3',
    deliverable: '独立站 MVP + 关键词金字塔 + 首份 SEO 周报',
  },
  timeline: [
    {
      day: 'Day 1-7',
      phase: '① 建站 + 词库',
      title: 'Shopify Dawn 主题 · 500 词金字塔',
      actions: [
        'Shopify 建站 + Cloudflare CDN + WebP 图片压缩',
        'Ahrefs 挖 500 词 · 4 层金字塔（品牌 5 + 品类 30 + 场景 150 + 长尾 315）',
        '每层词对应 URL 结构：/ · /category · /use-case · /blog',
      ],
      artifacts: [
        {
          type: 'document', label: '关键词金字塔 · 4 层结构',
          rows: [
            ['L1 品牌词', 'safebaby car seat / safebaby r129 · 5 词'],
            ['L2 品类词', 'isofix car seat / booster seat / baby capsule · 30 词'],
            ['L3 场景词', 'car seat for newborn / rotating car seat 360 · 150 词'],
            ['L4 长尾词', 'best isofix car seat under 200 dollars · 315 词'],
          ],
        },
      ],
    },
    {
      day: 'Day 8-20',
      phase: '② On-Page + 内容',
      title: '20 SKU 上架 · 3 篇 3000 字博客 · Schema 标记',
      actions: [
        '20 SKU 详情页 TDK/H1/Alt/内链完整配置',
        '3 篇 pillar 博客：R129 完全指南 / ISOFIX vs 安全带对比 / 车座 0-12 岁选购指南',
        'Product/FAQ/Article 三种 Schema 标记 · GSC 结构化数据 0 错误',
      ],
      artifacts: [
        {
          type: 'code', lang: 'JSON-LD', label: 'Product Schema 示例',
          content: '{\n  "@context": "https://schema.org/",\n  "@type": "Product",\n  "name": "SafeBaby ISOFIX Booster 15-36kg R129",\n  "image": "https://safebaby.com/img/sb-booster.jpg",\n  "brand": "SafeBaby",\n  "sku": "SB-BST-R129",\n  "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "127"},\n  "offers": {"@type": "Offer", "price": "89.00", "priceCurrency": "USD", "availability": "InStock"}\n}',
        },
      ],
    },
    {
      day: 'Day 21-30',
      phase: '③ 外链 + 数据看板',
      title: '10 条 DR30+ 外链 · GSC + GA4 打通',
      actions: [
        '客座博文：Motherly / BabyGear Lab / TinyLoveOfMine 3 篇',
        'HARO 应答 · 资源页拓展 · Skyscraper 长文替换 · 共 10 条 DR30+',
        'Looker Studio SEO 周报模板：曝光/点击/CTR/位置 4 指标',
      ],
      artifacts: [
        {
          type: 'checklist', label: '30 天上线毕业指标',
          items: [
            { text: 'PageSpeed Mobile 89 / Desktop 96', done: true },
            { text: '收录率 94%（KPI 90%）', done: true },
            { text: '3 个核心词进 Top50（isofix car seat / booster seat 15-36kg / r129 baby car seat）', done: true },
            { text: '独立站询盘 5 条（KPI 3）', done: true },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '独立站 30 天上线 · PageSpeed 89/96 · 收录率 94% · 3 核心词进 Top50 · 首月独立站询盘 5 条，其中 2 条来自欧洲。',
    grade: 'A · 全部 KPI 超额',
    lessons: [
      '4 层关键词金字塔是独立站 SEO 的最底层地基，不做金字塔就是无脑打散弹',
      'Product/FAQ/Article Schema 是 2026 年 Google 抓取的敲门砖',
      '外链质量 > 数量：10 条 DR30+ 抵得上 100 条 DR10 的垃圾外链',
      '收录率 <90% 说明 sitemap 或 robots.txt 有问题，别急着建外链',
    ],
  },
};

/* ============ L2 Week 6 · 商务谈判 + 跨文化 ============ */
window.TIER_SAMPLES.l2[4] = {
  title: '虚拟案例：Kidsroom.de 谈判 12 天 · 从对方砍价 22% 到守住 8% · 拿下 EUR 450K 大单',
  scenario: 'Kidsroom.de 通过 RFQ 进入商机漏斗，本周正式进入谈判阶段。对方目标砍价 22%，你使用 BATNA/ZOPA/锚定 + 三档报价 + 让步节奏，最终成交价降 8%，锁定 EUR 450K 首单。',
  meta: {
    role: '业务主管小李（首席谈判）',
    counterpart: 'Kidsroom.de · Head of Sourcing Katrin Wolf',
    stake: '首单 3000 pcs · EUR 450,000 · 年框 EUR 1.5M 潜力',
    style: 'Hofstede 德国 · 低语境 · 数据驱动 · 直接',
  },
  timeline: [
    {
      day: 'Day 1-2',
      phase: '① BATNA + 三档报价',
      title: '设定底线 EUR 138 · 三档锚定',
      actions: [
        'BATNA：Halfords UK 相同款 EUR 145 已成交 · 我方 EBIT 底线 EUR 138',
        'ZOPA：对方最高心理价 EUR 152（推测）· 我方目标 EUR 148',
        '三档报价：Standard 158 / Popular 152 / Premium 168',
      ],
      artifacts: [
        {
          type: 'table', label: '三档报价矩阵',
          headers: ['档', 'FOB EUR', 'MOQ', '含赠品', '交期'],
          rows: [
            ['Standard 基础版', '158', '500 pcs', '无', '75 天'],
            ['Popular 主推版 ★', '152', '1000 pcs', '含 CO + 保险 0.15%', '60 天'],
            ['Premium 战略版', '168', '3000 pcs', '含 CO/保险/OEM 包装/独家 EU', '90 天'],
          ],
        },
      ],
    },
    {
      day: 'Day 3-9',
      phase: '② 3 轮让步 + 条件交换',
      title: 'Zoom 3 轮谈判 · 让步递减 5% → 2% → 1%',
      actions: [
        '第 1 轮：对方开 EUR 128 (砍 22%)，我方拒 · 反锚 EUR 152 主推版',
        '第 2 轮：我方降到 EUR 147，条件是 MOQ 提到 3000 pcs',
        '第 3 轮：EUR 145 成交 · 附加交换：60 天交期 · 40% 定金',
      ],
      artifacts: [
        {
          type: 'chat', label: 'Zoom 谈判关键对话（3 轮）',
          messages: [
            { from: 'them', name: 'Katrin (R1)', time: 'Day 3', text: 'Michael, at 158 EUR we can\'t make numbers work. 128 is where we need to land.' },
            { from: 'me', name: 'Michael (R1)', time: 'Day 3', text: 'I hear you, Katrin. 128 sits below our floor after R129 testing costs. Let me ask — if I could get to 152 with CO + insurance included, would that unlock the deal?' },
            { from: 'them', name: 'Katrin (R2)', time: 'Day 6', text: 'Closer, but still 8% above target. What if we take 2000pcs?' },
            { from: 'me', name: 'Michael (R2)', time: 'Day 6', text: 'For 3000pcs we can go 147 — that lets me absorb the ocean freight swing. Not 2000. Which volume works?' },
            { from: 'them', name: 'Katrin (R3)', time: 'Day 9', text: '3000 works. Can we do 145 flat?' },
            { from: 'me', name: 'Michael (R3)', time: 'Day 9', text: '145 works IF: 40% deposit + 60-day lead time (not 90) + EU exclusivity on this SKU for 12 months. Deal?' },
            { from: 'them', name: 'Katrin (R3)', time: 'Day 9', text: 'Deal. Send PI by Friday.' },
          ],
        },
      ],
    },
    {
      day: 'Day 10-12',
      phase: '③ 合同签署 + 内部复盘',
      title: 'PI + SC 签署 · EUR 450K 落袋',
      actions: [
        'PI 8 大条款审核（品名/数量/唛头/交期/罚则/仲裁/汇率/不可抗力）',
        '导师复盘打 91 分：让步节奏 A · 条件交换 A · 只在"独家 EU"条款让步过快',
        '会议纪要 + 客户档案更新 → 进入 A+ 类',
      ],
      artifacts: [
        {
          type: 'document', label: 'PI 关键条款清单',
          rows: [
            ['单价', 'EUR 145.00 FOB Ningbo'],
            ['数量', '3000 pcs (±3%)'],
            ['总额', 'EUR 435,000 (最终 450,000 含运保费)'],
            ['付款', 'T/T 40% deposit + 60% against B/L copy'],
            ['交期', '60 days after deposit received'],
            ['独家', 'EU exclusivity 12 months for SKU SB-BST-R129'],
            ['罚则', 'Late delivery penalty 0.2%/day, cap 5%'],
            ['争议', 'CIETAC Shanghai arbitration'],
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '12 天谈判 · 成交价 EUR 145 (降 8% vs 起价 158) · 首单 EUR 450K + 年框 EUR 1.5M 潜力 · 12 个月 EU 独家条款成为品牌资产。',
    grade: 'A · 导师评分 91',
    lessons: [
      'BATNA 一定要先设定 · 没有 BATNA 就是任对方宰',
      '三档报价 · 中间那档是让客户"觉得占便宜"的锚',
      '让步节奏 5% → 2% → 1% · 递减让步暗示"你已经到底线了"',
      '每次让步必须要有条件交换（MOQ/交期/付款/独家）· 不换=白让',
      '德国客户吃"数据+直接"这一套 · 中东/东南亚客户完全反过来',
    ],
  },
};

/* ============ L2 Week 7 · 供应链 + 物流 + 单证 ============ */
window.TIER_SAMPLES.l2[5] = {
  title: '虚拟案例：Kidsroom.de 首柜 60 天出货 · FOB → CIF → DDP 三档成本表 + 出口退税落袋',
  scenario: '拿下 Kidsroom.de 3000 pcs 订单后，本周任务：搭建 FOB/CIF/DDP 三合一成本模板 · 模拟出一整套出口单证 · 跑通出口退税流程。',
  meta: {
    role: '业务主管小李（协作单证 + 财务）',
    order: 'Kidsroom.de · 3000 pcs · EUR 435K FOB Ningbo',
    stack: 'AQL 2.5 · Incoterms 2020 · ICC(A) 保险',
    deliverable: '三档成本表 + 单证包 + 退税申报',
  },
  timeline: [
    {
      day: 'Day 1-3',
      phase: '① 三档成本表',
      title: 'FOB / CIF / DDP 逐项拆解',
      actions: [
        '料工费 FOB 基础成本 EUR 128 · 港杂运保 EUR 8 · 汇率 buffer 2%',
        'CIF Hamburg = FOB + 海运 EUR 3.2 + 保险 0.15% = EUR 148.2',
        'DDP Berlin = CIF + 关税 3.7% + 目的港费 + 内陆运输 = EUR 168',
      ],
      artifacts: [
        {
          type: 'table', label: 'FOB/CIF/DDP 三档成本表（EUR/pc）',
          headers: ['科目', 'FOB', 'CIF Hamburg', 'DDP Berlin'],
          rows: [
            ['料工费', '128.0', '128.0', '128.0'],
            ['港杂 + 出口报关', '2.5', '2.5', '2.5'],
            ['海运费', '—', '3.2', '3.2'],
            ['海运保险 ICC(A)', '—', '0.22', '0.22'],
            ['目的港清关 + 关税 3.7%', '—', '—', '5.5'],
            ['目的港内陆运输', '—', '—', '3.6'],
            ['汇率 buffer 2%', '2.7', '2.9', '3.4'],
            ['报价 (含 10% 毛利)', '145.0', '148.2', '168.0'],
          ],
        },
      ],
    },
    {
      day: 'Day 4-7',
      phase: '② 单证包',
      title: '发票 · 箱单 · 提单 · 产地证 · 形发',
      actions: [
        'Commercial Invoice + Packing List 双语',
        'Bill of Lading（Master B/L + House B/L）',
        'FORM E 中国-东盟 · CO 中国国际贸促会',
        '客户仓专用唛头 · 集装箱装载图',
      ],
      artifacts: [
        {
          type: 'document', label: 'Commercial Invoice 关键字段',
          rows: [
            ['Invoice No.', 'SB-2026-0703'],
            ['Consignee', 'Kidsroom.de GmbH · Solingen Germany'],
            ['Terms', 'FOB Ningbo · T/T 40+60'],
            ['Marks', 'KIDSROOM / DE / SB-BST-R129 / 3000PCS / MADE IN CHINA'],
            ['HS Code', '9401.20.0000'],
            ['Description', 'Baby Car Seat, ISOFIX Booster 15-36kg, R129 Certified'],
            ['Total', 'EUR 435,000.00 FOB Ningbo'],
          ],
        },
      ],
    },
    {
      day: 'Day 8-14',
      phase: '③ 退税 + 保险',
      title: '出口退税 CNY 89K + ICC(A) 保险 EUR 660',
      actions: [
        '进货增值税发票 CNY 528K → 退税率 13%',
        '电子税局提交单证备案 · 函调应对 3 家供应商',
        '货运保险 ICC(A) 一切险 · 保额 CIF × 110% = EUR 489K · 保费 EUR 660',
      ],
      artifacts: [
        {
          type: 'checklist', label: '首柜 60 天节点',
          items: [
            { text: 'PI 签署 + 40% 定金到账 (Day 5)', done: true },
            { text: 'AQL 2.5 中检 · 主要缺陷 0 · 次要缺陷 3 (Day 50)', done: true },
            { text: '尾款到账 + B/L 副本电放 (Day 58)', done: true },
            { text: 'ETA Hamburg (Day 90)', done: false },
            { text: '出口退税 CNY 89,000 落袋 (Day 120)', done: false },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '首柜 60 天准时出货 · AQL 2.5 一次通过 · 客户 3 项次要缺陷 free of charge 补货下单跟发 · 出口退税 CNY 89K 预计 Day 120 到账 · 净利率 12.4%。',
    grade: 'A · 单证一次通过 · 无索赔',
    lessons: [
      'FOB/CIF/DDP 三档成本表要一次做完，不然客户改 term 你要重算',
      '汇率 buffer 至少 2% 小单 · 大单 3-5% 或提前锁汇',
      'AQL 2.5 = 一般消费品标准 · 婴童用品最好用 AQL 1.5 更严',
      '出口退税单证 30 天内备案，超期视同内销',
      'ICC(A) 一切险 0.15% 保费换 100% 覆盖，别为省 EUR 660 冒 EUR 500K 风险',
    ],
  },
};

/* ============ L2 Week 8 · 风险 + 合规 + 结业沙盘 ============ */
window.TIER_SAMPLES.l2[6] = {
  title: '虚拟案例：L/C 审证救回不符点 · KYC 排掉 1 家欺诈客户 · 结业沙盘 89 分',
  scenario: '本周三件大事：（1）审证 Halfords UK L/C，识别 2 个软条款 + 3 个不符点；（2）对新客户 Kidsroom.de 补做 KYC；（3）完成结业沙盘从询盘到收汇 21 节点闭环答辩。',
  meta: {
    role: '业务主管小李（结业毕业设计）',
    lc: 'Halfords UK · USD 380K · L/C at sight',
    kyc: '3 家新客户 · 邓白氏 + IP 反查 + 领英交叉',
    exam: '结业答辩 · 8 位导师现场评分',
  },
  timeline: [
    {
      day: 'Day 1-3',
      phase: '① L/C 审证',
      title: 'UCP600 5C 清单 · 识别 2 软条款 + 3 不符点',
      actions: [
        '5C：Completeness / Consistency / Correctness / Compliance / Conditions',
        '软条款 1：检验证书需买方指定代理签发',
        '软条款 2：装船通知需 5 天内以买方指定格式',
        '3 不符点：唛头缺 "for Halfords" / 数量单位 pcs vs units / 保险受益人拼写',
      ],
      artifacts: [
        {
          type: 'document', label: 'L/C 5C 审证报告（节选）',
          rows: [
            ['软条款 1', '46A: Certificate of Inspection issued by buyer-nominated agent → 建议改为 SGS 或双方指定 · 否则买家可拒付'],
            ['软条款 2', '47A: Shipping advice within 5 days in buyer\'s format → 建议改为 3 个工作日 + 双方接受格式'],
            ['不符点 1', '唛头缺 "for Halfords UK" · 需改证'],
            ['不符点 2', '45A 数量单位 pcs · Invoice 用 units · 需统一'],
            ['不符点 3', '46B 保险受益人 "Kidsroom" · 应为 "Halfords UK Ltd." · 需改证'],
          ],
        },
      ],
    },
    {
      day: 'Day 4-7',
      phase: '② KYC 排雷',
      title: '3 家客户 KYC · 排掉 1 家高危',
      actions: [
        'Kidsroom.de：邓白氏 A2 · 员工 45 · 领英 42 员工 · 官网 Trust ★★★★★',
        'Halfords UK：DUN 87-654-321 · A2 · 上市公司 LON:HFD · 极稳',
        '第 3 家 US 客户 "BabyPro LLC"：官网 3 个月 · 员工 2 人 · IP 尼日利亚 · 邓白氏无记录 · 高危 → 拒接',
      ],
      artifacts: [
        {
          type: 'table', label: 'KYC 三客户对照',
          headers: ['客户', '邓白氏评级', '员工规模', 'IP 一致性', '结论'],
          rows: [
            ['Kidsroom.de', 'A2 · 3A2', '45', 'DE ✓', '批准 T/T 40+60'],
            ['Halfords UK', 'A2 · 5A2', '10000+', 'UK ✓', '批准 L/C at sight'],
            ['BabyPro LLC', '无记录', '2', 'NG ✗', '拒接 · 疑似欺诈'],
          ],
        },
      ],
    },
    {
      day: 'Day 8-14',
      phase: '③ 沙盘答辩',
      title: '21 节点闭环 · 综合评分 89',
      actions: [
        '结业沙盘：从询盘 → PI → 定金 → 生产 → QC → 出运 → 单证 → 交单 → 议付 → 收汇 → 退税，21 节点全流程',
        '现场演示 4 个"关键决策点"：报价档位 / L/C 改证 / 客户 KYC / 汇率锁',
        '导师团 8 人评分 · 综合 89 分（业务能力 A · 单证 A · 谈判 A- · 风控 B+）',
      ],
      artifacts: [
        {
          type: 'checklist', label: 'L2 毕业硬指标',
          items: [
            { text: '独立站上线 · 3 核心词进 Top50', done: true },
            { text: '开发信打开率 47% · 回复率 9.1%', done: true },
            { text: '阿里国际站 P4P ROI 2.3', done: true },
            { text: 'L/C 审证 100% · KYC 排雷成功', done: true },
            { text: '结业沙盘评分 89', done: true },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: 'L2 8 周毕业 · 独立操盘 Kidsroom.de EUR 450K 首单 + Halfords UK USD 380K 复购 · 拒接 1 家欺诈客户 · 结业综合 89 分晋升 KA 客户经理。',
    grade: 'A · 综合 89 · 荣获"最佳毕业设计"',
    lessons: [
      'L/C 5C 审证 · 软条款比不符点更可怕 · 拒付概率 30%+',
      'KYC 三查（邓白氏 + IP + 领英）任何一项异常就拒接 · 不要贪',
      '结业沙盘的关键不是单据齐全，是能讲清楚"每一步为什么这样做"',
      'L2 毕业 ≠ 高手 · 只是拿到"独立操盘"通行证 · L3 才是老板课',
    ],
  },
};

/* ============ L3 Week 1-2 · 战略选品 + 品类操盘 ============ */
window.TIER_SAMPLES.l3[0] = {
  title: '虚拟案例：品类操盘手 Michael 拆解"户外便携电源"蓝海 · 3 SKU 打入亚马逊 Top 100',
  scenario: '你从 KA 客户经理晋升品类操盘手，负责挖掘下一个亿元品类。用 JBTD + 四维评估 + 海关+Google Trends+FastMoss 三源交叉，锁定"户外便携电源 500-1000Wh 段"，72h 内产出 MVP 打样方案。',
  meta: {
    role: '品类操盘手 Michael（团队 5 人协作）',
    market: '北美 + 澳洲户外露营 EDC',
    scope: '选品雷达 → MVP 打样 → 蓝海报告',
    deliverable: '四维选品报告 + 20 家竞品档案 + 蓝海机会报告',
  },
  timeline: [
    {
      day: 'Day 1-3',
      phase: '① JBTD 拆场景',
      title: '拆出 5 类真实使用场景 · 锁定"露营 + 车顶帐"细分',
      actions: [
        'Reddit /r/overlanding /r/camping /r/vanlife 5000 条帖子聚类',
        'JBTD 拆 5 类 Job：露营煮饭 / 车顶帐续航 / 摄影棚外拍 / 应急备灾 / 房车续航',
        '"车顶帐 24-48h 续航"竞争最松 · 客单 USD 599-999 · 复购弱但 NPS 高',
      ],
      artifacts: [
        {
          type: 'table', label: 'JBTD · 5 类场景对比',
          headers: ['场景', '客单 USD', '竞争烈度', 'NPS', '综合评级'],
          rows: [
            ['露营煮饭', '199-399', '★★★★★', '62', '★★★☆☆'],
            ['车顶帐续航 ★', '599-999', '★★☆☆☆', '78', '★★★★★'],
            ['摄影棚外拍', '499-899', '★★★☆☆', '55', '★★★☆☆'],
            ['应急备灾', '299-799', '★★★★☆', '48', '★★★☆☆'],
            ['房车续航', '1499-2999', '★★★☆☆', '82', '★★★★☆'],
          ],
        },
      ],
    },
    {
      day: 'Day 4-8',
      phase: '② 四维评估 + 三源验证',
      title: '需求 × 竞争 × 毛利 × 合规四维打分',
      actions: [
        '需求：Panjiva 12M 美国进口 +38% · Google Trends 5Y +142%',
        '竞争：Top10 90% 都是 Jackery/EcoFlow 大牌 · 中腰品牌空缺',
        '毛利：BOM USD 210 · FOB 380 · 亚马逊零售 799 · 净利率 22%',
        '合规：UL2743 / FCC / DOE VI / UN38.3 · 认证成本 USD 45K',
      ],
      artifacts: [
        {
          type: 'document', label: '四维选品评估表',
          rows: [
            ['需求 (25 分)', '22 · 12M 进口 +38% · 蓝海词 8 个'],
            ['竞争 (25 分)', '20 · Top10 集中度 62% · 中腰空缺'],
            ['毛利 (25 分)', '19 · 毛利率 44% · 净利 22%'],
            ['合规 (25 分)', '18 · 4 认证 · 6-9 个月周期'],
            ['总分', '79 / 100 · 立项'],
          ],
        },
      ],
    },
    {
      day: 'Day 9-14',
      phase: '③ 20 家竞品 + MVP 打样',
      title: '20 竞品价盘/词盘/专利反拆 + 72h 打样 SOP',
      actions: [
        '20 家竞品档案：Jackery/EcoFlow/Bluetti/Anker Solix 等 · 每家 15 字段',
        '价盘图谱：500Wh 段 399-699 / 1000Wh 段 699-999 · 1500Wh 段 1299-1999',
        'MVP 打样：72h SOP · 3 SKU (500 / 1000 / 1500Wh) · 现有磷酸铁锂 PACK 供应商',
      ],
      artifacts: [
        {
          type: 'note', label: '蓝海机会 3 大差异化点',
          content: '1. 快充新技术：45min 满充 (Jackery 60min · EcoFlow 90min) · UL2743 已允许高倍率\n2. 车顶帐生态：与美国 Front Runner / iKamper 车顶帐品牌联合捆绑销售\n3. 应用级软件：APP 显示"能给车顶帐续航 XX 小时" · 场景化数据比"1000Wh"更打动人\n\n差异化组合 = 价格 vs Jackery 低 15% + 车顶帐场景 + APP 场景化 → 车顶帐用户群体首选',
        },
      ],
    },
  ],
  outcome: {
    result: '14 天完成选品雷达 · 79 分立项 · 3 SKU MVP 打样 · 8 个月后（含 UL 认证）亚马逊上架 3 个月做到 Category BSR Top 100 · 首年营收 USD 4.2M。',
    grade: 'A · 立项到上架 8 个月',
    lessons: [
      'JBTD 拆场景比按品类选品准 3 倍 · "买产品的人不是买产品，是买解决问题"',
      '四维评估 79 分是立项底线 · <70 分坚决不做',
      '大牌集中度 <70% 的品类才有中腰品牌机会',
      '"UL/FCC/DOE" 认证周期 6-9 个月要提前算进现金流',
      'MVP 打样用现有 PACK 供应商 · 别自己做电芯 · 72h 出样才叫 MVP',
    ],
  },
};

/* ============ L3 Week 3-4 · 大客户 KAM ============ */
window.TIER_SAMPLES.l3[1] = {
  title: '虚拟案例：Michael 用 SPIN + JBP 拿下 REI 全渠道年框 · 从询盘客户升级为战略合伙',
  scenario: '将老客户 REI（美国户外零售连锁）从"询盘型"升级为"战略型"。用 SPIN 深度销售 · Buying Center 决策链地图 · Account Plan 年度经营 · JBP 联合生意计划，2 个季度做到 Share of Wallet 42%。',
  meta: {
    role: '品类操盘手 Michael（升级 KA 客户经理）',
    account: 'REI Co-op · 175 门店 · 年营收 USD 3.9B',
    baseline: '现有 SoW 8% · 年采购 USD 480K',
    target: 'SoW 40% · 年框 USD 2.4M',
  },
  timeline: [
    {
      day: 'Day 1-7',
      phase: '① SPIN + Buying Center',
      title: '3 场深访 · 画出 5 人决策链',
      actions: [
        'S 现状：REI 户外便携电源年采 USD 6M · 3 家供应商',
        'P 问题：Jackery 主力占 62% · 但 2024 年召回一次 · 采购总监想分散风险',
        'I 影响：召回赔付 USD 380K · 品牌信任 -15%',
        'N 需求：想加入 1-2 家中腰品牌 · SoW 上限 30%',
      ],
      artifacts: [
        {
          type: 'document', label: 'Buying Center 5 人决策地图',
          rows: [
            ['EB · Economic Buyer', 'VP Sourcing Sarah Chen · 关注 P&L · Key 指标 GMROI'],
            ['UB · User Buyer', 'Category Buyer Tom Rice · 关注上架/动销/复购'],
            ['TB · Tech Buyer', 'Compliance Manager Emma Lee · 关注 UL/FCC/召回率'],
            ['Coach', 'Category Analyst Kevin Zhu · 华人 · 曾任职亚马逊 · 我方内应'],
            ['Blocker', 'Jackery Account Manager Jane Doe · 现供应商 · 需要绕开'],
          ],
        },
      ],
    },
    {
      day: 'Day 8-21',
      phase: '② Account Plan',
      title: 'White Space + Share of Wallet 年度增量地图',
      actions: [
        'REI 品类矩阵 × 我方 SKU 覆盖：现覆盖 3 品类 20% · 空白 5 品类',
        'Share of Wallet：现 8% → 3M 内 20% → 6M 40% → 12M 60%',
        '增量路径：先车顶帐场景独家上架 → 再入门 500Wh 冲量 → 最后专业 1500Wh',
      ],
      artifacts: [
        {
          type: 'table', label: 'Account Plan · REI 12 个月路线',
          headers: ['季度', '重点 SKU', '订单额 USD', 'SoW', '关键动作'],
          rows: [
            ['Q1', '车顶帐场景 1000Wh', '150K', '15%', 'Independent SKU · 3 门店试点'],
            ['Q2', '+ 500Wh 大众款', '480K', '28%', '全渠道上架 · 联合露营节'],
            ['Q3', '+ 1500Wh 专业款', '720K', '40%', 'REI Co-op App 独家营销'],
            ['Q4', '定制 REI 联名款', '1.05M', '55%', 'JBP 联名 SKU · 年会发布'],
          ],
        },
      ],
    },
    {
      day: 'Day 22-42',
      phase: '③ JBP + 高层拜访',
      title: 'CEO-CEO 联合生意计划签约',
      actions: [
        '我方 CEO 亲赴 Seattle REI HQ · 会见 REI CEO Eric Artz 30 分钟',
        'JBP 提案：联合品牌 SKU 5 款 + 露营节赞助 USD 200K + 商品培训 20 门店',
        '正式签署年框 USD 2.4M + 3 年联合品牌授权',
      ],
      artifacts: [
        {
          type: 'document', label: 'JBP 联合生意计划核心条款',
          rows: [
            ['年框', 'USD 2,400,000 · 12 个月 rolling'],
            ['联名 SKU', 'REI Co-op × PowerCore 5 款 · 独家 24 个月'],
            ['共同投入', '我方 USD 200K 露营节赞助 + REI USD 150K 门店陈列'],
            ['数据共享', 'POS 周报 + 消费者反馈月报'],
            ['退出机制', '任一方 90 天通知 · 违约金 15%'],
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '6 周从 SoW 8% 升到 40% · Q4 联名款上市首月售罄 · 3 年年框 USD 7.2M · REI CEO 亲自站台。',
    grade: 'A · SoW 40% 达成',
    lessons: [
      'SPIN 的 I（Implication）是让客户"痛"的关键 · 只讲 S/P 客户不动',
      'Buying Center 至少 5 角色 · 只搞定 UB 会被 TB 一票否决',
      'Coach（内应）是 KA 突破的最快路径 · 培养 Coach 靠"给他升职机会"',
      'Account Plan 年度路线要"从小到大" · 一上来就要 40% SoW 就是逼客户跑',
      'JBP 联合生意计划的核心是"共同投入" · 单方投入撑不住 3 年',
    ],
  },
};

/* ============ L3 Week 5-6 · 品牌出海 + Case Study ============ */
window.TIER_SAMPLES.l3[2] = {
  title: '虚拟案例：PowerCore 品牌出海 · CEO LinkedIn IP 30 天 500 粉 · 白皮书下载 320',
  scenario: 'REI 年框签下后，公司决定从 OEM 转 ODM 转 OBM。你 6 周内完成：品牌定位屋 · CEO LinkedIn IP 冷启动 · 白皮书 5000 字 · 2 篇 Case Study · 独立站 SEO 内容日历 3 个月 24 篇。',
  meta: {
    role: '品类操盘手 Michael（品牌负责人）',
    positioning: 'PowerCore · 车顶帐场景电源第一品牌',
    channels: 'LinkedIn IP + Whitepaper + Independent Site + Google ABM',
    kpi: 'LinkedIn 粉丝 +500 · 白皮书下载 100+ · 独立站独立访客 5000+',
  },
  timeline: [
    {
      day: 'Day 1-7',
      phase: '① STP + 定位屋',
      title: '12 字 Slogan · CEO 个人 IP 起步',
      actions: [
        'S 细分：户外便携电源 → 车顶帐用户群 · 全球 380 万人',
        'T 目标：25-40 岁 · 家庭年收入 USD 75K+ · Overlanding 爱好者',
        'P 定位：Rooftop-Tent Power Specialist · Slogan "Power Your Rooftop Dream"',
      ],
      artifacts: [
        {
          type: 'document', label: '定位屋 · PowerCore',
          rows: [
            ['Target', '25-40 岁 Overlanding 家庭 · 车顶帐用户'],
            ['Insight', '车顶帐用户最痛：帐篷装了但没电，48h 续航焦虑'],
            ['RTB', '独家 45min 快充 + 车顶帐 APP 生态 + 场景化续航算法'],
            ['Slogan', 'Power Your Rooftop Dream · 让每一次车顶帐都自由'],
            ['Brand Story', '3 位创始人 500 天车顶帐环美 · 亲身痛点造出 PowerCore'],
          ],
        },
      ],
    },
    {
      day: 'Day 8-30',
      phase: '② LinkedIn IP + 白皮书',
      title: 'CEO 日更 14 天 · 白皮书 5000 字',
      actions: [
        'CEO Alex 每天发一条：3 天生活 / 4 天专业 · 30 天粉丝 68 → 578',
        '白皮书《2026 车顶帐电源趋势与选购指南》5000 字 · Gated Form',
        'HubSpot Lead Scoring · 320 下载中 42 家是采购决策人',
      ],
      artifacts: [
        {
          type: 'chat', label: 'LinkedIn Post 3 种类型',
          messages: [
            { from: 'me', name: 'Personal · Day 3', time: '', text: '3 years ago I quit Google. Slept in a rooftop tent for 500 days. My iPhone died on day 3. That was the moment PowerCore was born...' },
            { from: 'me', name: 'Insight · Day 10', time: '', text: 'Data from 12,000 rooftop tent users: 68% listed "power" as #1 pain point. Not weight. Not price. Power. Here\'s why our industry got it wrong for a decade...' },
            { from: 'me', name: 'Behind · Day 17', time: '', text: 'Our Q4 launch delayed 45 days. Because 3 of 3000 units failed UL2743 side-impact test. We chose delay over recall risk. Here\'s the internal Slack conversation...' },
          ],
        },
      ],
    },
    {
      day: 'Day 31-42',
      phase: '③ Case Study + SEO 日历',
      title: '2 篇 Case Study + 3 个月 24 篇选题',
      actions: [
        'Case Study 1: REI Co-op 车顶帐场景独家上架 6 周 SoW 40%',
        'Case Study 2: 澳洲客户 Front Runner 联名款首季 2000 件售罄',
        'SEO 日历：品类词 8 篇 + 场景词 10 篇 + 长尾词 6 篇 · Ahrefs 优先级排序',
      ],
      artifacts: [
        {
          type: 'table', label: 'SEO 内容日历 · 3 个月 24 篇',
          headers: ['月', '主题簇', '篇数', '目标词'],
          rows: [
            ['M1', '车顶帐续航科普', '8', 'rooftop tent battery / 12v power for rooftop tent'],
            ['M2', '选购指南', '10', 'best power station for rooftop tent / 1000wh vs 1500wh'],
            ['M3', '用户故事', '6', 'overlanding power setup / weekend camping electricity'],
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '6 周 CEO LinkedIn 578 粉 · 白皮书 320 下载 (42 决策人) · 独立站独立访客 8100 (KPI 5000) · Case Study 引来 3 家欧洲经销商主动询价。',
    grade: 'A · 3/3 KPI 超额',
    lessons: [
      'CEO IP 是外贸品牌最便宜的杠杆 · 30 天日更投入 5 小时/周 = 5000 精准粉',
      '白皮书 Gated Form 是把"流量"变"线索"的最快路径',
      'Case Study 六段式 (Challenge-Solution-Result-Insight) 客户看 3 遍才有信任',
      'SEO 内容日历要有"主题簇"结构 · 单篇散文章对 Google 权重帮助小',
      'LinkedIn 3 类内容 (Personal/Insight/Behind) 轮流发 · 只发一种就是广告号',
    ],
  },
};

/* ============ L3 Week 7-8 · 团队管理 + SOP ============ */
window.TIER_SAMPLES.l3[3] = {
  title: '虚拟案例：Michael 建 15 人品类团队 · OGSM 战略解码 · 人均产值 +38%',
  scenario: 'REI 年框 + PowerCore 品牌 + 4.2M 亚马逊营收 → 团队从 3 人快速扩到 15 人。你 8 周内完成：三年 OGSM 战略解码 · 组织架构 2.0 · SOP 手册 20+ 流程 · 2026 分润薪酬方案。',
  meta: {
    role: '品类总经理 Michael（首次带 15 人）',
    scale: '3 人 → 15 人 · 4 部门',
    revenue: 'USD 4.2M → USD 12M 目标',
    deliverable: 'OGSM · 架构图 · SOP 手册 · 薪酬方案',
  },
  timeline: [
    {
      day: 'Day 1-14',
      phase: '① OGSM 战略解码',
      title: '3 年 O · 5 年 G · 年度 S · 季度 M',
      actions: [
        'O 目标：3 年做到户外便携电源全球 Top 10 · 年营收 USD 30M',
        'G 目标：品牌辨识度 25% · 直销占比 40% · KA 客户 20 家',
        'S 战略：车顶帐场景专精 · KA + DTC + Amazon 三足鼎立',
        'M 指标 (2026)：营收 12M / 净利 15% / KA 客户 8 家 / 客单 USD 720',
      ],
      artifacts: [
        {
          type: 'table', label: 'OGSM 战略解码矩阵',
          headers: ['层级', '内容', '2026', '2027', '2028'],
          rows: [
            ['Objective', '车顶帐电源全球 Top 10 品牌', '', '', ''],
            ['Goals', '营收 (USD M)', '12', '20', '30'],
            ['', '净利率', '15%', '18%', '20%'],
            ['Strategies', 'KA 大客户', 'REI/BassPro/Cabelas', 'EU 4 家', 'JP + AU'],
            ['Measures', 'KA 客户数', '4', '8', '15'],
            ['', '直销占比', '18%', '30%', '40%'],
          ],
        },
      ],
    },
    {
      day: 'Day 15-35',
      phase: '② 组织 2.0 + 招聘',
      title: '前中后台 · 铁三角 · 15 人到位',
      actions: [
        '前台 · Sales 5 人：KA/亚马逊/独立站/OEM/EU 区域',
        '中台 · Product 4 人：Product Owner/设计/QC/供应链',
        '后台 · Ops 3 人：Marketing/客服/财务',
        'MAP-P 结构化面试 · 8 周招到 12 人 · 3 人淘汰',
      ],
      artifacts: [
        {
          type: 'document', label: '组织架构 2.0',
          rows: [
            ['前台 Sales (5)', 'Head of Sales + KA/Amazon/DTC/OEM/EU · 铁三角配 Product Owner'],
            ['中台 Product (4)', 'Head of Product + Product Owner + 设计 + QC + 供应链'],
            ['后台 Ops (3)', 'Head of Ops + Marketing + 客服 + 财务'],
            ['GM · Michael', '直接汇报 3 位 Head · 每周经营会 90 分钟'],
            ['铁三角原则', '每个 KA 由 KAM + Product Owner + Ops Support 3 人负责到底'],
          ],
        },
      ],
    },
    {
      day: 'Day 36-56',
      phase: '③ SOP 手册 + 分润薪酬',
      title: '20 SOP + PBC 分润 · 人均产值 +38%',
      actions: [
        'SOP 20 个：询盘 → PI → 定金 → 生产 → QC → 出运 → 单证 → 收款 → 售后 · 12 环',
        '飞书文档 + Loom 视频 · 新人 7 天上手 · 老人节省 8 小时/周',
        'PBC 薪酬：底薪 40% + 提成 35% + 分红 15% + 跟投 10%',
      ],
      artifacts: [
        {
          type: 'checklist', label: '8 周团队建设毕业指标',
          items: [
            { text: 'OGSM 3 年战略 · CEO + 高层评审通过', done: true },
            { text: '组织架构 2.0 · 15 人到位 · 铁三角运转', done: true },
            { text: 'SOP 手册 20 流程 · 飞书文档 + Loom 视频', done: true },
            { text: 'PBC 分润薪酬 2026 生效 · 全员 100% 签署', done: true },
            { text: '人均产值 USD 800K/年 (+38%)', done: true },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '8 周建成 15 人品类团队 · OGSM 落地 · SOP 覆盖 80% · PBC 分润全员签署 · 人均产值 +38% · Q4 提前完成 12M 目标 65%。',
    grade: 'A · 组织搭建速度业内 Top 10%',
    lessons: [
      'OGSM 是外贸公司最简单的战略工具 · 比 BSC/OKR 都容易落地',
      '铁三角（Sales + Product + Ops）是 KA 客户不掉的关键 · 单点跟单必翻车',
      'SOP 手册 = 飞书文档 + Loom 视频 · 光文字新人 100% 看不下去',
      'PBC 薪酬 40/35/15/10 · 跟投是留住核心的最后一根钉子',
      '15 人是"业务型 CEO"和"组织型 CEO"的分水岭 · 过不去就永远做不到 30M',
    ],
  },
};

/* ============ L3 Week 9-10 · 财务 + 供应链 + 全球化 ============ */
window.TIER_SAMPLES.l3[4] = {
  title: '虚拟案例：产品级 P&L 揪出 3 个亏损 SKU · 香港-BVI 离岸架构省税 CNY 480K/年',
  scenario: '公司做到 USD 12M 后，你需要从"算账"升级到"经营"。8 周任务：搭产品级 P&L · 13 周现金流预测 · 香港-BVI 离岸架构 · 中国+1 越南备份产能 · ERP 选型 NetSuite。',
  meta: {
    role: '品类总经理 Michael（跨部门主导财务改革）',
    scope: 'P&L · 现金流 · 离岸架构 · 供应链 · ERP',
    saving: '税负 -12% · 库存周转 +25% · 现金 buffer +45 天',
  },
  timeline: [
    {
      day: 'Day 1-10',
      phase: '① 产品级 P&L',
      title: '揪出 3 个亏损 SKU · 毛利改善 3.2 pp',
      actions: [
        '搭 BOM + 关税 + 汇率 + 资金成本 全成本模型',
        'SKU 级 P&L 揭示：3 个入门 500Wh SKU 卖越多亏越多（含隐性关税 25%）',
        '决策：3 SKU 停产 · 主推 1000Wh · 毛利率 41% → 44.2%',
      ],
      artifacts: [
        {
          type: 'table', label: '产品级 P&L · Top5 SKU 对比',
          headers: ['SKU', '售价', 'COGS', '关税', '毛利率', '决策'],
          rows: [
            ['PC-500-Basic', '$399', '$220', '$56', '30.8%', '停产 (毛利 <15%)'],
            ['PC-500-Solar', '$449', '$235', '$63', '33.7%', '涨价 or 停'],
            ['PC-1000-RTT ★', '$799', '$340', '$62', '49.7%', '主推 · 加大营销'],
            ['PC-1000-EDC', '$699', '$310', '$56', '47.6%', '维持'],
            ['PC-1500-Pro', '$1499', '$620', '$110', '51.3%', '扩产 · 高毛利'],
          ],
        },
      ],
    },
    {
      day: 'Day 11-25',
      phase: '② 现金流 + 离岸架构',
      title: '13 周滚动预测 + 香港-BVI 架构',
      actions: [
        '13 周滚动现金流：Q4 备货高峰缺口 CNY 1.8M · 建议提前谈信保额度',
        '离岸架构：香港公司收美国 REI 款 · BVI 持股 · 境内工厂只做 OEM',
        '合规评估：CRS 报告 + BVI 经济实质 + 转让定价 3 表',
      ],
      artifacts: [
        {
          type: 'document', label: '香港-BVI 离岸架构方案',
          rows: [
            ['香港公司', 'PowerCore HK Ltd · 收美国/欧洲外币 · 8.25% 利得税'],
            ['BVI 公司', 'PowerCore Holdings · 持股 100% · 0% 税'],
            ['境内工厂', '深圳 PowerCore · OEM 加工 · 转让定价 cost+8%'],
            ['预计年税负', '综合 15.8% (原 27.5%) · 省 CNY 480K/年'],
            ['合规成本', 'BVI 年费 USD 3200 + HK 报税 USD 4500 + 转让定价咨询 USD 8000'],
            ['合规红线', 'BVI 经济实质 · HK 董事居民要求 · CRS 报告'],
          ],
        },
      ],
    },
    {
      day: 'Day 26-56',
      phase: '③ 中国+1 + ERP',
      title: '越南备份产能 + NetSuite 上线',
      actions: [
        '中国+1：越南平阳工厂合作 · 30% 产能备份 · 应对 301 关税',
        'ERP：NetSuite + WMS + Looker BI · 3 个月上线 · USD 120K 投资',
        'S&OP 月度会：销售/生产/采购/财务 4 部门 · 3 个月内库存周转 +25%',
      ],
      artifacts: [
        {
          type: 'checklist', label: '财务全球化 8 周里程碑',
          items: [
            { text: '3 亏损 SKU 停产 · 毛利率 +3.2 pp', done: true },
            { text: '13 周现金流模型 + Q4 信保 CNY 2M 额度', done: true },
            { text: '香港-BVI 架构注册 · 综合税负 15.8%', done: true },
            { text: '越南 30% 备份产能签约 · Q1 试产', done: true },
            { text: 'NetSuite + WMS + BI 上线 · 库存周转 +25%', done: true },
          ],
        },
      ],
    },
  ],
  outcome: {
    result: '8 周财务改革 · 毛利率 44.2% · 综合税负 15.8% · 库存周转 8→10 次 · 现金 buffer +45 天 · 越南备份产能上线 · NetSuite 打通供应链数据。',
    grade: 'A · 财务健康度评分 A-',
    lessons: [
      '产品级 P&L 是老板课的第一课 · 不做 SKU 级永远看不清哪个赚哪个亏',
      '13 周滚动现金流比年度预算实用 100 倍 · Q4 缺口能提前 3 个月解决',
      '离岸架构 ≠ 避税 · 是"合规节税" · BVI 经济实质是新红线',
      '中国+1 不是"搬走" · 是"备份" · 30% 产能足以应对 301 波动',
      'ERP 上线不能一次全上 · 先 ERP 再 WMS 再 BI · 一次全上 90% 失败',
    ],
  },
};

/* ============ L3 Week 11-12 · 商业模式跃迁 + 融资路演 ============ */
window.TIER_SAMPLES.l3[5] = {
  title: '虚拟案例：PowerCore 完成 A 轮 USD 8M · 估值 45M · 融资 BP 路演 92 分毕业',
  scenario: 'L3 毕业季 · 你从品类总经理跃迁为 Founder。8 周任务：BMC 商业模式画布 · 第二曲线（车顶帐生态 IoT）· AI 全流程 Agent · 融资 BP 15 页 · 毕业路演 20 分钟。',
  meta: {
    role: 'Founder Michael（毕业设计 · A 轮融资）',
    business: 'PowerCore + Rooftop-Tent IoT 生态',
    valuation: 'Pre-money USD 37M · A 轮 USD 8M · Post-money 45M',
    exam: '20 分钟路演 · 8 位 VC 导师现场评分',
  },
  timeline: [
    {
      day: 'Day 1-14',
      phase: '① BMC + 第二曲线',
      title: '商业模式画布 + IoT 生态跃迁',
      actions: [
        'BMC 9 宫格：客户/价值主张/渠道/客户关系/收入/资源/活动/伙伴/成本',
        '第二曲线：车顶帐 IoT 生态 → APP + 车顶帐控制器 + 数据服务订阅',
        '5 年目标：硬件 65% + IoT 订阅 20% + 数据服务 15%',
      ],
      artifacts: [
        {
          type: 'document', label: 'BMC 核心 3 格',
          rows: [
            ['客户细分', '25-40 岁 Overlanding 家庭 · 全球 380 万 TAM'],
            ['价值主张', '车顶帐场景电源 + IoT 生态 · 从"卖电池"到"卖露营体验"'],
            ['收入模型', 'Hardware 65% (毛利 44%) + IoT SaaS 20% (毛利 85%) + Data 15% (毛利 92%)'],
          ],
        },
      ],
    },
    {
      day: 'Day 15-35',
      phase: '② AI Agent + 融资 BP',
      title: '5 段 AI 工作流 + 15 页融资 BP',
      actions: [
        'AI Agent：选品(GPT+Helium) → 开发(HubSpot+Claude) → 写单(Notion AI) → 客服(Intercom AI) → 数据(Looker AI)',
        '融资 BP 15 页：Problem/Solution/Market/Product/Traction/Team/Financial/Ask',
        '估值三法：DCF USD 42M · 可比公司 (Jackery 4.2x PS) USD 50M · PSR USD 38M · 均值 45M',
      ],
      artifacts: [
        {
          type: 'table', label: '融资 BP 15 页结构',
          headers: ['页', '标题', '核心信息'],
          rows: [
            ['P1', 'Problem', '车顶帐 380 万用户 · 68% 认为电力是 #1 痛点'],
            ['P4', 'Solution', 'PowerCore 场景专精 + IoT 生态'],
            ['P7', 'Traction', '2 年 USD 12M ARR · Y/Y 285% · 净利 15%'],
            ['P10', 'Product', '3 SKU 上架 + IoT 生态 2026 Q2 上线'],
            ['P12', 'Team', 'CEO ex-Google · CTO ex-Anker · COO ex-DJI'],
            ['P14', 'Financial', '3 年到 USD 30M · IoT 订阅达 20%'],
            ['P15', 'Ask', 'A 轮 USD 8M · 释放 17.8% · Post 45M'],
          ],
        },
      ],
    },
    {
      day: 'Day 36-56',
      phase: '③ 路演答辩',
      title: 'DEMO Day 8 VC 现场 · 92 分毕业',
      actions: [
        'DEMO Day 20 分钟：15 分钟 Pitch + 5 分钟 Q&A',
        '8 VC 提 12 个刁钻问题：CAC/LTV · IoT 变现 · 越南关税 · UL 召回风险',
        '4 家 VC 递 Term Sheet · 选择 Kleiner Perkins (USD 5M) + Sequoia China (USD 3M)',
      ],
      artifacts: [
        {
          type: 'note', label: '路演最难 3 个问题的答案',
          content: 'Q1: CAC 上涨 40% · 你怎么保证 LTV/CAC>3?\nA: CAC 187 → LTV 810 (硬件复购 1.2 + IoT LTV 260 + 数据 90) · 依然 4.3x\n\nQ2: 若 Jackery 也切车顶帐场景 · 你怎么办?\nA: 我们 24 个月场景积累 · 3 家 KA 独家 · 车顶帐 APP 生态壁垒 · 硬碰硬用 IoT SaaS 打\n\nQ3: 越南 30% 产能应对 301 · 但越南也可能加税 · 备份的备份?\nA: 已锁墨西哥 Guanajuato 二期空地 · Ready-to-Build 6 个月 · 应对最坏 3 层关税',
        },
      ],
    },
  ],
  outcome: {
    result: 'L3 毕业 · A 轮 USD 8M 到账 (KP 5M + Sequoia 3M) · Post-money 45M · 综合评分 92 · 荣获"最佳毕业设计" · 3 年内规划港股 IPO。',
    grade: 'A+ · 92 分 · Founder 王者段位',
    lessons: [
      'BMC 画布不是纸上谈兵 · 是"你到底靠什么赚钱"的老板 3 分钟自问',
      '第二曲线要在第一曲线巅峰前启动 · 等第一曲线下滑再做就晚了',
      'AI Agent 不是替代人 · 是把人从"重复劳动"释放到"决策"',
      '融资估值三法平均 · 单法都会被 VC 挑毛病',
      '路演最难 3 问：CAC/LTV · 竞争护城河 · 极端情况备份 · 提前准备',
      'L3 毕业 ≠ 终点 · Founder 之路才刚开始 · 3 年 30M 30% 净利是新起点',
    ],
  },
};
