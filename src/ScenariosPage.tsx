import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Store,
  Users,
  ShoppingBag,
  MessageCircle,
  ChevronRight,
  Play,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// Data structure
const roles = [
  {
    id: 'boss',
    name: '批发商老板',
    icon: <Briefcase className="w-5 h-5" />,
    description: '核心诉求：看钱、防亏、控盘',
    scenarios: [
      {
        id: 'boss-1',
        title: '语音查账驾驶舱',
        desc: '实时调用 ERP 财务 Skill，穿透账套计算毛利而非单纯流水。',
        benefit: '秒知盈亏，决策快人一步。',
        demo: [
          { type: 'user', content: '今天利润怎么样？' },
          { type: 'ai', content: '今日总流水 12.5 万。扣除成本、退货及各项分摊费用后，实际毛利约 3.2 万。其中“秋季新款风衣”贡献了 40% 的利润。', action: '查看详细利润表' }
        ]
      },
      {
        id: 'boss-2',
        title: '应收账款“催收令”',
        desc: 'AI 扫描逾期账款，根据客户画像自动草拟不同力度的催收微信文案。',
        benefit: '回笼资金，减少死账。',
        demo: [
          { type: 'user', content: '帮我看看谁欠款超过30天了，准备催一下。' },
          { type: 'ai', content: '已为您找出 3 家逾期超 30 天的客户。已根据他们的拿货频次生成了催款文案：\n\n1. 张老板（老客户）：张总近来生意可好？咱们上个月那笔 5 万的货款您看方便这两天结一下吗？\n2. 李老板（新客户）：李总您好，财务提醒您上月账单已逾期，请尽快安排付款，以免影响后续发货哦。', action: '一键发送微信' }
        ]
      },
      {
        id: 'boss-3',
        title: '异常折扣拦截',
        desc: '监测到低于底价的订单，AI 立即推送微信私聊。',
        benefit: '堵住资金黑洞，保住利润。',
        demo: [
          { type: 'ai', content: '⚠️ 异常提醒：员工“小王”刚刚开了一单“冬季羽绒服”，折扣为 6.5 折（低于系统设定的最低 7 折），预计损失利润 500 元。' },
          { type: 'user', content: '驳回，让他按最低7折走。' },
          { type: 'ai', content: '已驳回该订单，并向小王发送了您的处理意见。', action: '查看订单详情' }
        ]
      },
      {
        id: 'boss-4',
        title: '滞销库存“清仓推演”',
        desc: '调用库存 Skill，AI 算出压货成本及清仓建议。',
        benefit: '优化资产配置，钱生钱。',
        demo: [
          { type: 'user', content: '分析一下现在的库存情况。' },
          { type: 'ai', content: '目前“春季针织衫”系列滞销严重，压货资金约 50 万。建议以 8 折清仓，预计可回笼资金 40 万。若将此资金投入当前爆款“夏季T恤”，预计可多赚 10 万利润。', action: '生成清仓促销方案' }
        ]
      },
      {
        id: 'boss-5',
        title: '年度/季度经营体检',
        desc: 'AI 总结长期记忆，指出衰退品类和客户。',
        benefit: '战略调头，防止温水煮青蛙。',
        demo: [
          { type: 'user', content: '给我一份第三季度经营体检报告。' },
          { type: 'ai', content: '您的 Q3 经营体检报告已生成：\n1. ⚠️ 预警：“女装裤装”品类销量连续两个月下滑 15%。\n2. ⚠️ 预警：大客户“王总”本季度拿货频次下降 30%。\n3. 💡 亮点：“配饰”类目毛利率提升了 5%。', action: '查看完整报告' }
        ]
      }
    ]
  },
  {
    id: 'manager',
    name: '店长/主管',
    icon: <Store className="w-5 h-5" />,
    description: '核心诉求：转速、补货、协同',
    scenarios: [
      {
        id: 'manager-1',
        title: '智能补货建议',
        desc: 'AI 根据历史销售和当前库存，主动微信提醒补货。',
        benefit: '避免缺货损失，保住订单。',
        demo: [
          { type: 'ai', content: '🔔 补货提醒：爆款“法式碎花连衣裙”目前库存仅剩 50 件，按当前日均销量预计 2 天后断货。建议立即补货 200 件。' },
          { type: 'user', content: '好的，马上生成采购单。' },
          { type: 'ai', content: '已为您生成采购单草稿，供应商为“广州十三行张总”，请确认。', action: '确认采购单' }
        ]
      },
      {
        id: 'manager-2',
        title: '客户流失挽回计划',
        desc: 'AI 发现老客户久未下单，自动列出清单并匹配活动。',
        benefit: '提高客户留存，稳住复购。',
        demo: [
          { type: 'user', content: '最近有哪些老客户没来了？' },
          { type: 'ai', content: '发现 15 位核心老客户超过 15 天未下单。其中“陈老板”最常拿的“牛仔裤”系列目前正在做满减活动。已为您生成专属挽回话术。', action: '查看挽回名单及话术' }
        ]
      },
      {
        id: 'manager-3',
        title: '每日销售“龙虎榜”',
        desc: '自动统计店员业绩，在微信群发布大字报。',
        benefit: '激励店员多卖货。',
        demo: [
          { type: 'user', content: '生成今天的销售战报发到群里。' },
          { type: 'ai', content: '🏆 今日销售龙虎榜 🏆\n\n🥇 销冠：小李（业绩 3.5 万，开单 42 笔）\n🥈 亚军：小张（业绩 2.8 万，开单 35 笔）\n🥉 季军：小王（业绩 2.1 万，开单 28 笔）\n\n大家继续冲刺！🔥', action: '一键发送至企业微信群' }
        ]
      },
      {
        id: 'manager-4',
        title: '促销方案自动生成',
        desc: '输入清货需求，AI 自动配置优惠券并生成宣传词。',
        benefit: '快速响应市场，去库存。',
        demo: [
          { type: 'user', content: '我想清掉仓库里那批老款运动鞋。' },
          { type: 'ai', content: '已为您制定清仓方案：\n1. 后台已配置“满 300 减 50”专属优惠券。\n2. 朋友圈文案：🏃‍♂️ 运动季清仓大放送！经典款运动鞋断码特惠，拿货立减！数量有限，先到先得！👇', action: '应用方案并群发' }
        ]
      },
      {
        id: 'manager-5',
        title: '新人话术“教练”',
        desc: '店员遇到刁钻价格问题，AI 根据 ERP 权限给出回复建议。',
        benefit: '缩短培训周期，提高成单率。',
        demo: [
          { type: 'user', content: '客户嫌这批外套贵，要打 8 折，我该怎么回？' },
          { type: 'ai', content: '查询到该客户历史拿货量较小，且 8 折已逼近成本线。建议回复：“王总，这款外套面料升级了，成本确实高。您看这样行吗，这次按 9 折给您，另外我再送您几双爆款袜子做搭售，保证您好卖！”', action: '复制话术' }
        ]
      }
    ]
  },
  {
    id: 'employee',
    name: '员工/开单员',
    icon: <Users className="w-5 h-5" />,
    description: '核心诉求：速度、服务、内容',
    scenarios: [
      {
        id: 'employee-1',
        title: '微信图片/语音秒开单',
        desc: '视觉识别手写单照片，自动关联 ERP 生成订单。',
        benefit: '效率提升 10 倍，接单更多。',
        demo: [
          { type: 'user', content: '[上传了一张手写进货单照片]' },
          { type: 'ai', content: '已识别图片内容。为您生成草稿单：\n- 黑色卫衣 (M码) x 50件\n- 蓝色牛仔裤 (L码) x 30件\n客户：李老板。总金额：¥6,500。', action: '确认并开单' }
        ]
      },
      {
        id: 'employee-2',
        title: '朋友圈“爆款”文案机',
        desc: '选中新品，AI 自动生成带价格、库存、情绪价值的文案。',
        benefit: '专业营销，吸引拿货。',
        demo: [
          { type: 'user', content: '帮我写个朋友圈，推一下今天刚到的新款羊毛衫。' },
          { type: 'ai', content: '✨ 降温必备！爆款纯羊毛衫到货啦！\n🧶 软糯亲肤，不起球不掉色，质感拉满！\n💰 拿货价仅需 8X 元，利润空间巨大！\n📦 目前现货 500 件，手慢无！老板们赶紧私聊我锁单！👇', action: '复制文案并下载配图' }
        ]
      },
      {
        id: 'employee-3',
        title: '库存实时“查数机”',
        desc: '微信直接问 AI 查库存，无需切回 ERP。',
        benefit: '响应快，订单不流失。',
        demo: [
          { type: 'user', content: '帮我查下 8092 款白色 M 码还有多少件？' },
          { type: 'ai', content: '8092 款白色 M 码目前广州总仓还有 120 件，深圳分仓有 45 件。', action: '分享库存状态给客户' }
        ]
      },
      {
        id: 'employee-4',
        title: '智能“凑单”推荐',
        desc: '客户下单时，AI 提示凑单优惠及推荐爆品。',
        benefit: '拉升客单价，多拿提成。',
        demo: [
          { type: 'user', content: '赵总刚下了 4800 元的单。' },
          { type: 'ai', content: '💡 凑单提示：赵总的订单再加 200 元即可享受 95 折优惠。建议向他推荐他之前常拿的“百搭打底衫”（单价 45 元），只需拿 5 件即可凑满。', action: '发送凑单建议给客户' }
        ]
      },
      {
        id: 'employee-5',
        title: '个人业绩“计算器”',
        desc: '随时问 AI 查提成，调用薪酬 Skill 实时反馈。',
        benefit: '激励员工主动推货。',
        demo: [
          { type: 'user', content: '我今天挣了多少提成？' },
          { type: 'ai', content: '您今日已开单 15 笔，总销售额 4.2 万元。根据您的阶梯提成比例，今日预计提成收益为 ¥650 元。距离下一档提成比例（2%）还差 8000 元业绩，加油！', action: '查看业绩明细' }
        ]
      }
    ]
  },
  {
    id: 'retailer',
    name: '下游零售店老板',
    icon: <ShoppingBag className="w-5 h-5" />,
    description: '核心诉求：什么好卖、多少钱、何时到',
    scenarios: [
      {
        id: 'retailer-1',
        title: '“搜图找货”增强版',
        desc: '上传街头爆款照片，AI 在批发商库里找同款。',
        benefit: '抓住流量趋势，精准进货。',
        demo: [
          { type: 'user', content: '[上传了一张小红书爆款穿搭截图]' },
          { type: 'ai', content: '为您找到 3 款相似商品：\n1. 韩版修身西装外套（相似度 95%）- 拿货价 ¥120\n2. 休闲垂感阔腿裤（相似度 90%）- 拿货价 ¥85\n目前均有现货，是否加入进货单？', action: '一键加购' }
        ]
      },
      {
        id: 'retailer-2',
        title: '一键“原样再来一单”',
        desc: 'AI 记住进货周期，主动提示补货。',
        benefit: '简化流程，锁定复购。',
        demo: [
          { type: 'ai', content: '🔔 补货提醒：您上周进的“基础款白T恤”按您的平均销量预计已售罄。现在补货，明天即可送达。' },
          { type: 'user', content: '好的，按上次的数量再来一单。' },
          { type: 'ai', content: '已为您生成补货订单，数量 100 件，总价 ¥2500。', action: '立即支付' }
        ]
      },
      {
        id: 'retailer-3',
        title: 'AI 卖点助手（B传C）',
        desc: '为下游提供该产品的零售话术，帮下游卖货。',
        benefit: '帮下游赚钱，增加进货粘性。',
        demo: [
          { type: 'user', content: '这批防晒衣我该怎么跟顾客推销？' },
          { type: 'ai', content: '为您生成零售话术：\n“姐妹们，这款防晒衣是今年的黑科技！UPF50+，冰丝面料，穿上立减 5 度！而且版型超显瘦，百搭不挑人。现在买还送冰袖哦！”', action: '保存话术及海报' }
        ]
      },
      {
        id: 'retailer-4',
        title: '动态“阶梯价”计算器',
        desc: '选品时，AI 实时计算凑单降价方案。',
        benefit: '诱导大批量进货。',
        demo: [
          { type: 'user', content: '我要 40 件这个针织衫。' },
          { type: 'ai', content: '好的，40 件单价为 ¥55。💡 友情提示：这款商品满 50 件即可享受大客户价 ¥50，总价只需再加 ¥300，就能多拿 10 件！是否修改数量？', action: '修改为 50 件' }
        ]
      },
      {
        id: 'retailer-5',
        title: '智能物流“安抚员”',
        desc: '主动弹窗物流进度，延迟则自动送补偿券。',
        benefit: '极致体验，增加粘性。',
        demo: [
          { type: 'ai', content: '📦 物流致歉：抱歉，受暴雨影响，您的订单预计将延迟 1 天送达。为您奉上 1 张“50元无门槛进货券”作为补偿，感谢您的理解！' },
          { type: 'user', content: '好的，理解。' },
          { type: 'ai', content: '优惠券已放入您的账户。您可以随时回复“查物流”获取最新进度。', action: '查看物流详情' }
        ]
      }
    ]
  }
];

export default function ScenariosPage() {
  const [activeRole, setActiveRole] = useState(roles[0].id);
  const [activeScenario, setActiveScenario] = useState(roles[0].scenarios[0].id);

  const currentRole = roles.find(r => r.id === activeRole) || roles[0];
  const currentScenario = currentRole.scenarios.find(s => s.id === activeScenario) || currentRole.scenarios[0];

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-900 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-slate-900">全场景智能覆盖</h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>对话即入口，数据即决策</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Roles & Scenarios */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Role Selector */}
            <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm flex flex-row lg:flex-col overflow-x-auto hide-scrollbar">
              {roles.map(role => (
                <button
                  key={role.id}
                  onClick={() => {
                    setActiveRole(role.id);
                    setActiveScenario(role.scenarios[0].id);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap text-left ${
                    activeRole === role.id 
                      ? 'bg-blue-50 text-blue-700 font-semibold' 
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className={`${activeRole === role.id ? 'text-blue-600' : 'text-slate-400'}`}>
                    {role.icon}
                  </div>
                  <div className="flex flex-col">
                    <span>{role.name}</span>
                    <span className={`text-xs font-normal hidden lg:block ${activeRole === role.id ? 'text-blue-500/80' : 'text-slate-400'}`}>
                      {role.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Scenario List for Active Role */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex-1">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
                {currentRole.name} 场景列表
              </h3>
              <div className="flex flex-col gap-2">
                {currentRole.scenarios.map(scenario => (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenario(scenario.id)}
                    className={`p-4 rounded-xl text-left transition-all border ${
                      activeScenario === scenario.id
                        ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-100'
                        : 'bg-slate-50 border-transparent hover:bg-slate-100'
                    }`}
                  >
                    <h4 className={`font-bold mb-1 ${activeScenario === scenario.id ? 'text-blue-700' : 'text-slate-800'}`}>
                      {scenario.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {scenario.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Interactive Demo */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* Scenario Info Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-4 border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                核心价值
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentScenario.title}</h2>
              <p className="text-slate-600 mb-4">{currentScenario.desc}</p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 text-sm">营销/赚钱点：</span>
                  <span className="text-slate-600 text-sm">{currentScenario.benefit}</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup Demo */}
            <div className="flex-1 bg-white rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-200 p-2 overflow-hidden min-h-[500px]">
              <div className="bg-[#f5f5f7] rounded-[2rem] h-full flex flex-col relative">
                {/* Header */}
                <div className="h-16 border-b border-slate-200/60 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-t-[2rem] shrink-0">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-xl">🦞</span> 快批智能助理
                  </div>
                </div>
                
                {/* Chat Content */}
                <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScenario.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      {currentScenario.demo.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start gap-3'}`}>
                          {msg.type === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center mt-1 shadow-sm">
                              <span className="text-sm">🦞</span>
                            </div>
                          )}
                          <div className={`px-5 py-4 rounded-2xl max-w-[85%] shadow-sm whitespace-pre-wrap text-sm leading-relaxed ${
                            msg.type === 'user' 
                              ? 'bg-blue-600 text-white rounded-tr-sm' 
                              : 'bg-white text-slate-800 rounded-tl-sm border border-slate-100'
                          }`}>
                            {msg.content}
                            
                            {msg.action && (
                              <button className="mt-4 w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-xl border border-blue-200 transition-colors text-sm flex items-center justify-center gap-2">
                                {msg.action} <ChevronRight className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Input Area */}
                <div className="p-4 bg-white rounded-b-[2rem] border-t border-slate-200/60 shrink-0">
                  <div className="bg-[#f5f5f7] rounded-full h-12 flex items-center px-4 border border-slate-200">
                    <span className="text-slate-400 text-sm">输入指令或语音...</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
