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
  Sparkles,
  Loader2,
  Eye,
  Download,
  Copy,
  Send,
  Check,
  X,
  BarChart3,
  Share2,
  ImageIcon,
  Receipt,
  AlertTriangle,
  Megaphone,
  Camera,
  TrendingUp,
  Video,
  Target,
  Zap
} from 'lucide-react';

const getActionDetails = (actionName: string) => {
  if (/报表|数据|分析/.test(actionName)) {
    return {
      title: actionName,
      desc: '在真实系统中，这里将展开一个交互式的数据大屏，包含销量趋势图、畅销品排行和库存预警，支持多维度下钻分析。',
      mockType: 'chart'
    };
  }
  if (/朋友圈|发送|群发|发布/.test(actionName)) {
    return {
      title: actionName,
      desc: '系统将自动调用企业微信或个人微信接口，将生成的文案和图片一键推送到目标客户群或朋友圈，无需手动保存转发。',
      mockType: 'social'
    };
  }
  if (/生成|效果图|上身图|创建/.test(actionName)) {
    return {
      title: actionName,
      desc: '底层 AI 引擎正在进行图像渲染。在实际产品中，您将看到多张高清的生成结果供选择，并支持局部重绘和细节调整。',
      mockType: 'image'
    };
  }
  if (/开单|结算|支付|确认/.test(actionName)) {
    return {
      title: actionName,
      desc: '已自动对接 ERP 系统。库存已实时扣减，财务账单已生成，并自动向客户发送了电子凭证。',
      mockType: 'receipt'
    };
  }
  if (/下载|保存/.test(actionName)) {
    return {
      title: actionName,
      desc: '文件已打包并触发浏览器下载。在移动端，将直接保存至系统相册或文件管理中。',
      mockType: 'download'
    };
  }
  if (/视频|播放/.test(actionName)) {
    return {
      title: actionName,
      desc: '系统内置的视频播放器将展示生成的短视频。支持预览字幕、特效和背景音乐，并可一键推送到各大短视频平台。',
      mockType: 'video'
    };
  }
  return {
    title: actionName,
    desc: `这是【${actionName}】的演示节点。在正式版快批系统中，该操作将触发相应的自动化工作流，大幅提升您的业务效率。`,
    mockType: 'default'
  };
};

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
        badge: '核心高频',
        demo: [
          { type: 'user', content: '今天利润怎么样？' },
          { type: 'ai', content: '今日总流水 12.5 万。扣除成本、退货及各项分摊费用后，实际毛利约 3.2 万。其中“秋季新款风衣”贡献了 40% 的利润。' },
          { type: 'user', content: '怎么退货这么多？查一下原因。' },
          { type: 'ai', content: '经查，今日退货共 18 单，金额 1.2 万。主要集中在“A款牛仔裤”（12单），客户普遍反馈“尺码偏小”。' },
          { type: 'user', content: '把这款下架，通知采购联系厂家。' },
          { type: 'ai', content: '已将“A款牛仔裤”在小程序下架，并为您草拟了给厂家的反馈微信，是否发送？', action: '查看并发送微信' }
        ]
      },
      {
        id: 'boss-2',
        title: '应收账款“催收令”',
        desc: 'AI 扫描逾期账款，根据客户画像自动草拟不同力度的催收微信文案。',
        benefit: '回笼资金，减少死账。',
        badge: '痛点解决',
        demo: [
          { type: 'user', content: '帮我看看谁欠款超过30天了，准备催一下。' },
          { type: 'ai', content: '已为您找出 3 家逾期超 30 天的客户，总欠款 18.5 万。' },
          { type: 'user', content: '先看金额最大的。' },
          { type: 'ai', content: '金额最大的是“张老板”，欠款 12 万，逾期 35 天。他属于高频老客户，上周刚拿过货。' },
          { type: 'user', content: '拟个委婉点的催款文案。' },
          { type: 'ai', content: '好的：“张总近来生意可好？咱们上个月那笔 12 万的货款您看方便这两天结一下吗？最近上了不少爆款，回头给您留点好货！”', action: '一键发送微信' }
        ]
      },
      {
        id: 'boss-4',
        title: '滞销库存“清仓推演”',
        desc: '调用库存 Skill，AI 算出压货成本及清仓建议。',
        benefit: '优化资产配置，钱生钱。',
        badge: '高价值',
        demo: [
          { type: 'user', content: '分析一下现在的库存情况。' },
          { type: 'ai', content: '目前“春季针织衫”系列滞销严重，压货资金约 50 万。' },
          { type: 'user', content: '如果打折清仓，怎么做最划算？' },
          { type: 'ai', content: '建议以 8 折清仓，预计可回笼资金 40 万。若将此资金投入当前爆款“夏季T恤”，预计下月可多赚 10 万利润。' },
          { type: 'user', content: '行，就按8折，生成个促销海报发给客户。' },
          { type: 'ai', content: '已在后台配置“春季针织衫8折专区”，并生成了3套促销海报和朋友圈文案。', action: '预览并群发' }
        ]
      },
      {
        id: 'boss-7',
        title: '爆款预测与打样图生成',
        desc: '分析全网趋势，AI 自动生成下个月的爆款设计图，直接发给工厂打样。',
        benefit: '精准押中爆款，缩短研发周期。',
        badge: '创新场景',
        demo: [
          { type: 'user', content: '下个月该上什么新款？' },
          { type: 'ai', content: '根据小红书和抖音的大盘数据，下个月“美拉德风”和“机能风”将持续走热。结合您的供应链优势，建议开发“机能风多口袋工装裤”。' },
          { type: 'user', content: '给我出几张设计图看看。' },
          { type: 'ai', content: '已为您生成 4 张不同细节的“机能风工装裤”打样概念图，包含面料拼接和抽绳设计细节。', image: 'https://picsum.photos/seed/tech-pants/400/300' },
          { type: 'user', content: '第2张不错，把版型调宽松一点，发给老李（工厂）。' },
          { type: 'ai', content: '已微调版型并生成高清设计图，已微信发送给“加工厂-老李”，并附言：“李总，按这个图打个版，加急”。', action: '查看设计图' }
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
        badge: '核心高频',
        demo: [
          { type: 'ai', content: '🔔 补货提醒：爆款“法式碎花连衣裙”目前库存仅剩 50 件，按当前日均销量预计 2 天后断货。' },
          { type: 'user', content: '查一下供应商现在有现货吗？' },
          { type: 'ai', content: '供应商“广州十三行张总”目前有现货 500 件，今日下单明天可到。' },
          { type: 'user', content: '马上生成采购单，补 200 件。' },
          { type: 'ai', content: '已为您生成采购单草稿，数量 200 件，总金额 ¥12,000。', action: '确认并发送给供应商' }
        ]
      },
      {
        id: 'manager-2',
        title: '客户流失挽回计划',
        desc: 'AI 发现老客户久未下单，自动列出清单并匹配活动。',
        benefit: '提高客户留存，稳住复购。',
        badge: '高价值',
        demo: [
          { type: 'user', content: '最近有哪些老客户没来了？' },
          { type: 'ai', content: '发现 15 位核心老客户超过 15 天未下单。' },
          { type: 'user', content: '挑几个以前拿货最多的。' },
          { type: 'ai', content: '前三名分别是：陈老板（历史拿货 50 万）、林总（35 万）、赵姐（28 万）。他们最常拿的“牛仔裤”系列目前正在做满减活动。' },
          { type: 'user', content: '给他们分别发个专属优惠券和问候。' },
          { type: 'ai', content: '已为这 3 位客户生成专属“满1000减100”定向券，并拟好了微信问候语。', action: '预览并发送' }
        ]
      },
      {
        id: 'manager-5',
        title: '新人话术“教练”',
        desc: '店员遇到刁钻价格问题，AI 根据 ERP 权限给出回复建议。',
        benefit: '缩短培训周期，提高成单率。',
        badge: '降本增效',
        demo: [
          { type: 'user', content: '客户嫌这批外套贵，要打 8 折，我该怎么回？' },
          { type: 'ai', content: '查询到该客户历史拿货量较小，且 8 折已逼近成本线。' },
          { type: 'user', content: '那我怎么拒绝他比较好，又不想跑单。' },
          { type: 'ai', content: '建议回复：“王总，这款外套面料升级了，成本确实高。您看这样行吗，这次按 9 折给您，另外我再送您几双爆款袜子做搭售，保证您好卖！”' },
          { type: 'user', content: '客户同意了，帮我开单。' },
          { type: 'ai', content: '好的，已为您生成包含 9 折外套和赠品袜子的草稿单。', action: '确认开单' }
        ]
      },
      {
        id: 'manager-6',
        title: '朋友圈九宫格海报一键生成',
        desc: '选中多个商品，AI 自动排版生成美观的九宫格海报，带统一视觉风格。',
        benefit: '提升朋友圈质感，增加点击率。',
        badge: '核心高频',
        demo: [
          { type: 'user', content: '周末要做个“秋季上新”活动，帮我做套朋友圈九宫格。' },
          { type: 'ai', content: '请选择您要主推的 8 款商品（中间一格留作活动主视觉）。' },
          { type: 'user', content: '就选昨天入库的那 8 款风衣吧。' },
          { type: 'ai', content: '已提取商品图片，正在进行智能抠图和背景统一... 已生成“秋季上新·风衣专场”九宫格海报。' },
          { type: 'user', content: '中间那张主图加上“满500减50”的字样。' },
          { type: 'ai', content: '已更新中心主视觉图，文字已采用醒目的烫金字体排版。', action: '一键保存九宫格', image: 'https://picsum.photos/seed/fashion-grid/400/400' }
        ]
      },
      {
        id: 'manager-10',
        title: '滞销款“换模/换背景”营销',
        desc: '无需重新拍摄，AI 将滞销款衣服自然融合到新的模特和热门场景中。',
        benefit: '赋予老款新生命，提高售罄率。',
        badge: '创新场景',
        demo: [
          { type: 'user', content: '这件军绿色夹克卖不动，之前的模特图太死板了。' },
          { type: 'ai', content: '已提取该夹克的商品图。您希望换成什么风格的场景和模特？' },
          { type: 'user', content: '换成现在流行的“户外露营风”，模特要阳光一点的外国小哥。' },
          { type: 'ai', content: '正在进行 AI 换模与场景融合... 已生成 4 张该夹克在森林露营场景下的外模穿搭图。光影和褶皱已自动适配。', image: 'https://picsum.photos/seed/camping-model/400/400' },
          { type: 'user', content: '太逼真了！用这几张图重新上架。' },
          { type: 'ai', content: '已将新图片更新至商品详情页，并同步至微信相册。', action: '查看 AI 模特图' }
        ]
      },
      {
        id: 'manager-video-gen',
        title: '一键生成营销短视频',
        desc: '自动提取商品卖点、图片和视频片段，一键生成适合视频号/抖音发布的带货短视频。',
        benefit: '零门槛做视频营销，抢占短视频流量红利。',
        badge: '流量密码',
        demo: [
          { type: 'user', content: '帮我把这件新款法式碎花裙做个视频号的带货视频，要配上热门的BGM。' },
          { type: 'ai', content: '正在提取商品主图、细节图及卖点信息... 正在合成视频并匹配爆款BGM...' },
          { type: 'ai', content: '已为您生成 15 秒的法式碎花裙营销短视频，已添加字幕和转场特效。', action: '播放视频', image: 'https://picsum.photos/seed/video-cover/400/225' },
          { type: 'user', content: '效果不错，直接发布到视频号吧。' },
          { type: 'ai', content: '已成功推送到绑定的企业视频号，并附带了商品购买链接。', action: '查看发布状态' }
        ]
      }
    ]
  }

];

export default function ScenariosPage() {
  const [activeRole, setActiveRole] = useState(roles[0].id);
  const [activeScenario, setActiveScenario] = useState(roles[0].scenarios[0].id);
  const [actionStates, setActionStates] = useState<Record<string, 'idle' | 'loading' | 'success'>>({});
  const [toast, setToast] = useState<{ message: string, visible: boolean, icon?: React.ReactNode }>({ message: '', visible: false });
  const [modal, setModal] = useState<{ visible: boolean, title: string, desc: string, mockType: string } | null>(null);

  const showToast = (message: string, icon?: React.ReactNode) => {
    setToast({ message, visible: true, icon });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 2500);
  };

  const currentRole = roles.find(r => r.id === activeRole) || roles[0];
  const currentScenario = currentRole.scenarios.find(s => s.id === activeScenario) || currentRole.scenarios[0];

  const handleActionClick = (scenarioId: string, msgIndex: number, actionName: string) => {
    const key = `${scenarioId}-${msgIndex}`;
    
    // Determine action type
    const isView = /查看|预览|播放|进入|开启/.test(actionName);
    const isDownload = /下载|保存/.test(actionName);
    const isCopy = /复制/.test(actionName);
    const isSend = /发送|群发|发布/.test(actionName);
    const isConfirm = /确认|提交|支付|结算|应用/.test(actionName);
    const isGenerate = /生成|创建/.test(actionName);

    let successText = '操作已完成';
    let ToastIcon = <CheckCircle2 className="w-5 h-5 text-emerald-500" />;

    if (isView) {
      successText = '已打开';
      ToastIcon = <Eye className="w-5 h-5 text-blue-500" />;
    } else if (isDownload) {
      successText = `已保存至本地相册/文件`;
      ToastIcon = <Download className="w-5 h-5 text-emerald-500" />;
    } else if (isCopy) {
      successText = '已复制到剪贴板';
      ToastIcon = <Copy className="w-5 h-5 text-emerald-500" />;
    } else if (isSend) {
      successText = '已成功发送/发布';
      ToastIcon = <Send className="w-5 h-5 text-emerald-500" />;
    } else if (isGenerate) {
      successText = '生成成功';
      ToastIcon = <Sparkles className="w-5 h-5 text-blue-500" />;
    } else if (isConfirm) {
      successText = '操作成功';
    }

    setActionStates(prev => ({ ...prev, [key]: 'loading' }));
    
    setTimeout(() => {
      if (isView || isCopy || isDownload) {
        // For repeatable actions like view, copy, or download, revert to idle
        setActionStates(prev => ({ ...prev, [key]: 'idle' }));
        showToast(successText, ToastIcon);
      } else {
        // Keep success state for one-time actions
        setActionStates(prev => ({ ...prev, [key]: 'success' }));
        showToast(successText, ToastIcon);
      }

      // Show modal explanation
      const details = getActionDetails(actionName);
      setModal({ visible: true, ...details });
    }, 1000); // Shorter loading for better UX
  };

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
        <div className="mb-12 space-y-8">
          {/* AI 赋能四大核心价值 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" />
              AI 赋能四大核心价值
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">全盘数据洞察</h3>
                <p className="text-sm text-slate-600 leading-relaxed">告别繁琐报表，一句话唤出多维数据看板，实时掌控经营大盘与利润流向。</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">智能风控预警</h3>
                <p className="text-sm text-slate-600 leading-relaxed">全天候监测利润异常、库存积压与大客流失迹象，将风险扼杀在摇篮中。</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">精准营销转化</h3>
                <p className="text-sm text-slate-600 leading-relaxed">客户分层触达，一键生成针对性朋友圈文案与商品海报，大幅提升连带率。</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">AIGC 内容生成</h3>
                <p className="text-sm text-slate-600 leading-relaxed">零成本 AI 换模、换背景，滞销款秒变爆款，省下高昂的模特与拍摄费用。</p>
              </div>
            </div>
          </section>
        </div>

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
                    <h4 className={`font-bold mb-1 flex items-center gap-2 ${activeScenario === scenario.id ? 'text-blue-700' : 'text-slate-800'}`}>
                      {scenario.title}
                      {scenario.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-700 rounded-sm whitespace-nowrap">
                          {scenario.badge}
                        </span>
                      )}
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                {currentScenario.title}
                {currentScenario.badge && (
                  <span className="px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-md">
                    {currentScenario.badge}
                  </span>
                )}
              </h2>
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
                      {currentScenario.demo.map((msg, idx) => {
                        const actionKey = `${currentScenario.id}-${idx}`;
                        const actionState = actionStates[actionKey] || 'idle';
                        
                        return (
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
                            
                            {/* @ts-ignore - image property added dynamically */}
                            {msg.image && (
                              <div className="mt-3 rounded-xl overflow-hidden border border-slate-200/50 shadow-sm">
                                {/* @ts-ignore */}
                                <img src={msg.image} alt="Attachment" className="w-full max-w-sm object-cover" referrerPolicy="no-referrer" />
                              </div>
                            )}
                            
                            {msg.action && (() => {
                              const actionName = msg.action;
                              const isView = /查看|预览|播放|进入|开启/.test(actionName);
                              const isDownload = /下载|保存/.test(actionName);
                              const isCopy = /复制/.test(actionName);
                              const isSend = /发送|群发|发布/.test(actionName);
                              const isGenerate = /生成|创建/.test(actionName);
                              
                              let loadingText = '处理中...';
                              let successText = '已完成';
                              let ActionIcon = <ChevronRight className="w-4 h-4" />;
                              
                              if (isView) {
                                loadingText = '加载中...';
                                ActionIcon = <Eye className="w-4 h-4" />;
                              } else if (isDownload) {
                                loadingText = '下载中...';
                                successText = '已保存';
                                ActionIcon = <Download className="w-4 h-4" />;
                              } else if (isCopy) {
                                loadingText = '复制中...';
                                successText = '已复制';
                                ActionIcon = <Copy className="w-4 h-4" />;
                              } else if (isSend) {
                                loadingText = '发送中...';
                                successText = '已发送';
                                ActionIcon = <Send className="w-4 h-4" />;
                              } else if (isGenerate) {
                                loadingText = '生成中...';
                                successText = '已生成';
                                ActionIcon = <Sparkles className="w-4 h-4" />;
                              }

                              return (
                                <button 
                                  onClick={() => handleActionClick(currentScenario.id, idx, actionName)}
                                  disabled={actionState !== 'idle'}
                                  className={`mt-4 w-full py-2.5 font-medium rounded-xl border transition-all duration-200 text-sm flex items-center justify-center gap-2 ${
                                    actionState === 'success'
                                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200 cursor-default'
                                      : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200 hover:shadow-sm'
                                  }`}
                                >
                                  {actionState === 'loading' ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> {loadingText}</>
                                  ) : actionState === 'success' ? (
                                    <><CheckCircle2 className="w-4 h-4" /> {successText}</>
                                  ) : (
                                    <>{actionName} {ActionIcon}</>
                                  )}
                                </button>
                              );
                            })()}
                          </div>
                        </div>
                      )})}
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

      {/* Action Modal */}
      <AnimatePresence>
        {modal?.visible && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setModal(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  {modal.title}
                </h3>
                <button 
                  onClick={() => setModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {modal.desc}
                </p>
                
                {/* Mock UI */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  {modal.mockType === 'chart' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700">本周销量趋势</span>
                        <span className="text-blue-600 font-bold">+24.5%</span>
                      </div>
                      <div className="flex items-end gap-2 h-32">
                        {[40, 70, 45, 90, 65, 85, 50].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-100 rounded-t-md relative group">
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 0.5, delay: i * 0.05 }}
                              className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-t-md" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {modal.mockType === 'social' && (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 shrink-0 flex items-center justify-center text-white shadow-sm">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-200 rounded w-full"></div>
                          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {[1,2,3].map(i => <div key={i} className="aspect-square bg-slate-200 rounded-lg"></div>)}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {modal.mockType === 'image' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                        AI 正在渲染细节...
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <img src="https://picsum.photos/seed/fashion1/400/400" alt="Generated 1" className="w-full aspect-square object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                        <img src="https://picsum.photos/seed/fashion2/400/400" alt="Generated 2" className="w-full aspect-square object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  )}
                  
                  {modal.mockType === 'receipt' && (
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm font-mono text-sm text-slate-600 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                      <div className="text-center font-bold text-slate-800 mb-4 text-base flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        交易凭证
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b border-dashed border-slate-200 pb-2"><span>单号</span><span className="text-slate-900">KP88291033</span></div>
                        <div className="flex justify-between border-b border-dashed border-slate-200 pb-2"><span>状态</span><span className="text-emerald-600 font-medium">已扣减库存</span></div>
                        <div className="flex justify-between border-b border-dashed border-slate-200 pb-2"><span>客户</span><span className="text-slate-900">王老板 (VIP)</span></div>
                        <div className="flex justify-between font-bold text-slate-900 pt-2 text-base"><span>合计</span><span className="text-blue-600">¥ 12,500.00</span></div>
                      </div>
                    </div>
                  )}

                  {modal.mockType === 'download' && (
                    <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Download className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">文件已准备就绪</div>
                        <div className="text-sm text-slate-500 mt-1">在实际应用中，文件将直接保存至您的设备</div>
                      </div>
                    </div>
                  )}

                  {modal.mockType === 'video' && (
                    <div className="space-y-4">
                      <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-inner flex items-center justify-center group">
                        <img src="https://picsum.photos/seed/video-cover/400/225" alt="Video Cover" className="absolute inset-0 w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center z-10 cursor-pointer hover:scale-110 transition-transform shadow-lg border border-white/30">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 z-10">
                          <div className="h-1 bg-white/30 rounded-full flex-1 overflow-hidden">
                            <div className="h-full bg-blue-500 w-1/3"></div>
                          </div>
                          <span className="text-white text-xs font-mono">00:05 / 00:15</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-600 px-1">
                        <div className="flex items-center gap-2">
                          <Video className="w-4 h-4 text-blue-500" />
                          <span>法式碎花裙营销视频.mp4</span>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">1080p</span>
                      </div>
                    </div>
                  )}

                  {modal.mockType === 'default' && (
                    <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-sm text-slate-500">
                        系统将自动执行后续工作流
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-6 pt-0">
                <button 
                  onClick={() => setModal(null)}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors"
                >
                  我知道了
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-200"
          >
            {toast.icon}
            <span className="font-medium text-slate-800">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
