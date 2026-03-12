import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GatewayDemo from './GatewayDemo';
import {
  Activity,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Package,
  Users,
  Archive,
  PieChart,
  Cpu,
  HardDrive,
  Network,
  CheckCircle2,
  Coins,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  Database,
  BrainCircuit,
  Search,
  FileCode2,
  MessageSquareQuote,
  Zap,
  Lock,
  Cloud,
  Server,
  LineChart,
  Anchor,
  Terminal,
  Plus,
  Shield,
  EyeOff,
  Layers,
  Box
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            {/* Logos */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-blue-600 text-white font-black italic tracking-tighter px-2 py-1 rounded-md text-lg">
                快批
              </div>
              <div className="h-4 w-px bg-slate-300 mx-2"></div>
              <div className="flex items-center gap-1.5 text-slate-800 font-semibold text-lg">
                <span className="text-2xl leading-none">🦞</span>
                OpenClaw
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">核心特性</a>
              <a href="#scenarios" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">应用场景</a>
              <a href="#architecture" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">技术架构</a>
              <a href="#private-model" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">混合大模型</a>
              <a href="#hardware" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">智算网关</a>
              <a href="#security" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">安全方案</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">商业方案</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
              申请试用
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">核心特性</a>
            <a href="#scenarios" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">应用场景</a>
            <a href="#architecture" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">技术架构</a>
            <a href="#private-model" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">混合大模型</a>
            <a href="#hardware" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">智算网关</a>
            <a href="#security" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">安全方案</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">商业方案</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              快批 × OpenClaw <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                你的全天候私有数字员工
              </span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
              全球首个基于 OpenClaw 架构的智能进销存代理。数据主权绝对掌控，让 ERP 会思考，更能替你跑腿。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/gateway" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all flex items-center justify-center gap-2 text-lg">
                体验智算网关 (IronBox)
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-medium transition-all border border-slate-200 flex items-center justify-center gap-2 text-lg shadow-sm">
                查看 ClawHub 技能包
              </button>
            </div>
            
            {/* Integrations */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-sm text-slate-400 font-medium">原生支持全渠道办公协同</p>
              <div className="flex items-center gap-6 text-slate-600">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">企业微信</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">钉钉</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <MessageCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-sm font-medium">飞书</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-20 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-200/50 aspect-[16/9] md:aspect-[21/9] bg-slate-900 group">
            {/* Main Image: Wholesale/Warehouse scenario with person */}
            <img 
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Wholesale manager in warehouse using smart ERP" 
              className="w-full h-full object-cover opacity-75 group-hover:opacity-85 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Gradient Overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

            {/* Floating Chat Integration (WeChat/DingTalk) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl max-w-[260px]"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <div className="w-7 h-7 rounded bg-[#07C160] flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-800 font-bold text-sm">老板 (企微)</span>
              </div>
              <div className="text-slate-700 text-sm font-medium leading-relaxed">
                "帮我查下华南仓大红袍的库存，理一份上个月的对账单发给李总。"
              </div>
            </motion.div>

            {/* Floating AI Intelligence & Security Bubble */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl max-w-md border border-slate-700/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <span className="text-white text-sm">🦞</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-bold">快批私有代理</span>
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-medium bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                      <ShieldCheck className="w-3 h-3" />
                      IronBox 本地处理
                    </span>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed mb-4">
                    已在本地完成盘点，华南仓剩余 <span className="text-blue-400 font-bold">120</span> 件。对账单已生成。
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-600/50">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-[11px] mb-0.5">高敏财务数据已脱敏</span>
                        <span className="text-slate-200 text-xs font-medium">是否通过企微安全通道发送？</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shrink-0 ml-2">
                        一键发送
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      title: '业务自动驾驶',
      subtitle: '告别“人找数据”，让 AI 替你跑腿',
      description: '内置 OpenClaw 引擎与 Heartbeat 巡检机制。断货预警、异常订单、财务缺口，AI 7x24 小时主动发现并处理，彻底解放人力，从“被动反应”走向“主动决策”。'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '绝对数据主权',
      subtitle: '核心机密寸步不让，数据物理隔离',
      description: '独创“端云混合”架构。高敏财务与客户数据由本地 IronBox 网关与快批私有云闭环处理，零数据留存，彻底斩断公有大模型的数据泄露风险。'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: '老板绝对掌控',
      subtitle: '企微/钉钉一键审批，AI 绝不擅权',
      description: '无论身在何处，通过微信或钉钉即可随时指挥 ERP。所有涉及资金与改价的敏感操作，均需“人在回路 (HITL)”审批，确保安全可控。'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">重塑大中型批发商的管理范式</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">兼顾降本增效与绝对安全，让 ERP 成为真正值得信赖的业务伙伴。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <div className="text-sm font-semibold text-blue-600 mb-4">{feature.subtitle}</div>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  const [activeTab, setActiveTab] = useState('sales');

  const scenarios = [
    { id: 'sales', title: '销售', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'products', title: '商品', icon: <Package className="w-5 h-5" /> },
    { id: 'customers', title: '客户', icon: <Users className="w-5 h-5" /> },
    { id: 'inventory', title: '库存', icon: <Archive className="w-5 h-5" /> },
    { id: 'finance', title: '财务', icon: <PieChart className="w-5 h-5" /> },
    { id: 'heartbeat', title: 'Heartbeat', icon: <Activity className="w-5 h-5" /> },
  ];

  const scenarioContent: Record<string, { user: string, ai: React.ReactNode, action?: string }> = {
    sales: {
      user: '帮我开一单给华南张总，两件星空灰智能手表',
      ai: (
        <>
          <p className="mb-3">已为您生成销售草稿单：</p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm space-y-1 mb-3">
            <div className="flex justify-between"><span className="text-slate-500">客户</span><span className="font-medium">张总 (华南大区)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">商品</span><span className="font-medium">星空灰智能手表 x2</span></div>
            <div className="flex justify-between pt-2 mt-2 border-t border-slate-200"><span className="text-slate-500">总价</span><span className="font-bold text-blue-600">¥ 3,998.00</span></div>
          </div>
          <p>是否立即发送给张总确认？</p>
        </>
      ),
      action: '确认并发送'
    },
    products: {
      user: '查询一下“极速版路由器”的最新进货价和库存',
      ai: (
        <>
          <p className="mb-3">为您查到“极速版路由器”的最新信息：</p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm space-y-2 mb-3">
            <div className="flex items-center justify-between"><span className="text-slate-500">最新进货价</span><span className="font-bold text-slate-900">¥ 125.00</span></div>
            <div className="flex items-center justify-between"><span className="text-slate-500">建议零售价</span><span className="font-medium text-slate-900">¥ 199.00</span></div>
            <div className="flex items-center justify-between"><span className="text-slate-500">当前总库存</span><span className="font-medium text-emerald-600">850 件</span></div>
          </div>
          <p>该商品近期销量上升，建议提前备货。</p>
        </>
      ),
      action: '生成采购计划'
    },
    customers: {
      user: '列出本月未复购的重点客户',
      ai: (
        <>
          <p className="mb-3">已为您筛选出 5 位本月未复购的重点客户（历史月均采购额 &gt; 5万）：</p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm space-y-2 mb-3">
            <div className="flex justify-between items-center"><span className="font-medium">李老板 (北京)</span><span className="text-xs text-slate-500">上次采购: 35天前</span></div>
            <div className="flex justify-between items-center"><span className="font-medium">王总 (上海)</span><span className="text-xs text-slate-500">上次采购: 28天前</span></div>
            <div className="text-xs text-blue-600 cursor-pointer mt-1">查看全部 5 位客户...</div>
          </div>
          <p>是否需要一键发送专属问候及本月促销清单？</p>
        </>
      ),
      action: '一键发送促销'
    },
    inventory: {
      user: '广州仓的C型号主板还有多少货？',
      ai: (
        <>
          <p className="mb-3">库存预警提示：</p>
          <div className="bg-red-50 p-3 rounded-xl border border-red-100 text-sm space-y-2 mb-3">
            <div className="flex justify-between items-center"><span className="text-red-800">当前剩余</span><span className="font-bold text-red-600">15 件</span></div>
            <div className="flex justify-between items-center"><span className="text-red-800">安全库存线</span><span className="font-medium text-red-600">50 件</span></div>
          </div>
          <p>广州仓 C型号主板已低于安全库存，系统已自动匹配最优供应商（华强北电子），是否自动生成采购单？</p>
        </>
      ),
      action: '生成采购单'
    },
    finance: {
      user: '这个月的现金流情况如何？',
      ai: (
        <>
          <p className="mb-3">本月（截至今日）现金流简报：</p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm space-y-2 mb-3">
            <div className="flex justify-between items-center"><span className="text-slate-500">现金流入</span><span className="font-medium text-emerald-600">+ ¥ 150,000.00</span></div>
            <div className="flex justify-between items-center"><span className="text-slate-500">现金流出</span><span className="font-medium text-red-500">- ¥ 80,000.00</span></div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-200"><span className="font-semibold text-slate-900">净流入</span><span className="font-bold text-slate-900">¥ 70,000.00</span></div>
          </div>
          <p className="text-amber-600 text-sm bg-amber-50 p-2 rounded-lg border border-amber-100">⚠️ 提醒：预计下周有 ¥20,000 应付账款到期，请预留资金。</p>
        </>
      )
    },
    heartbeat: {
      user: '开启全天候智能巡检 (Heartbeat)',
      ai: (
        <>
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-mono bg-emerald-50 px-2 py-1 rounded-md w-fit border border-emerald-100 mb-3">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>Heartbeat Active: 24/7 Monitoring</span>
          </div>
          <p className="mb-3">已进入后台巡检模式。发现异常：</p>
          <div className="bg-red-50 p-3 rounded-xl border border-red-100 text-sm space-y-2 mb-3">
            <div className="flex justify-between items-center"><span className="text-red-800">异常事件</span><span className="font-bold text-red-600">库存水位告警</span></div>
            <div className="flex justify-between items-center"><span className="text-red-800">详情</span><span className="font-medium text-red-600">A型号主板低于安全线，且下周有大单交期</span></div>
          </div>
          <p>已自动拦截相关低利润订单，并向老板企微发送了补货审批单。</p>
        </>
      ),
      action: '查看拦截记录'
    }
  };

  return (
    <section id="scenarios" className="py-24 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">全场景智能覆盖</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">深入业务毛细血管，一句话搞定复杂操作。</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto items-center">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveTab(scenario.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all whitespace-nowrap text-left ${
                  activeTab === scenario.id 
                    ? 'bg-white shadow-md border border-slate-200 text-blue-600' 
                    : 'hover:bg-slate-100 text-slate-600 border border-transparent'
                }`}
              >
                <div className={`${activeTab === scenario.id ? 'text-blue-600' : 'text-slate-400'}`}>
                  {scenario.icon}
                </div>
                <span className="font-semibold text-lg">{scenario.title}</span>
                {activeTab === scenario.id && <ChevronRight className="w-5 h-5 ml-auto hidden lg:block" />}
              </button>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-200 p-2 overflow-hidden">
              <div className="bg-[#f5f5f7] rounded-[2rem] h-[500px] flex flex-col relative">
                {/* Header */}
                <div className="h-16 border-b border-slate-200/60 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-t-[2rem] shrink-0">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-xl">🦞</span> 智能业务助理
                  </div>
                </div>
                
                {/* Chat Content */}
                <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                          {scenarioContent[activeTab].user}
                        </div>
                      </div>
                      
                      {/* AI Message */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center mt-1 shadow-sm">
                          <span className="text-sm">🦞</span>
                        </div>
                        <div className="bg-white text-slate-800 px-5 py-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-slate-100">
                          {scenarioContent[activeTab].ai}
                          
                          {scenarioContent[activeTab].action && (
                            <button className="mt-4 w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-xl border border-blue-200 transition-colors text-sm">
                              {scenarioContent[activeTab].action}
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Input Area */}
                <div className="p-4 bg-white rounded-b-[2rem] border-t border-slate-200/60 shrink-0">
                  <div className="bg-[#f5f5f7] rounded-full h-12 flex items-center px-4 border border-slate-200">
                    <span className="text-slate-400 text-sm">输入指令，例如：“查询库存”...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
            <BrainCircuit className="w-4 h-4" />
            技术架构解密
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">让大模型真正“懂” ERP</h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            ERP 数据的核心是结构化 SQL 数据库，而大模型擅长的是文本。单纯靠模型“背诵”手册没有意义，<strong className="text-slate-900 font-semibold">关键是让它学会“如何操作你的 ERP”。</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* RAG Card */}
          <div className="bg-[#fbfbfd] rounded-[2.5rem] p-8 md:p-10 border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                <Search className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">RAG 实时检索</h3>
                <p className="text-blue-600 font-medium mt-1">解决“知识更新”难题</p>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
                  <Zap className="w-5 h-5 text-amber-500" />
                  为什么 RAG 是首选？
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ERP 的数据是秒级变化的（如实时库存、价格波动）。大模型的训练是静态的，无法记住动态库存。
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  实施方案：业务语义库
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  将快批的 API 文档、业务流程图（SOP）通过向量化存储。AI 代理通过 RAG 实时检索“如何查询库存”的指令，再精准调用工具执行。
                </p>
              </div>
            </div>
          </div>

          {/* Fine-Tuning Card */}
          <div className="bg-[#fbfbfd] rounded-[2.5rem] p-8 md:p-10 border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                <BrainCircuit className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">专项微调 (Fine-Tuning)</h3>
                <p className="text-indigo-600 font-medium mt-1">解决“逻辑强化”难题</p>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
                  <FileCode2 className="w-5 h-5 text-indigo-500" />
                  Text-to-SQL 强化
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  快批的数据库表结构极其复杂（数百个字段）。通用模型无法写出完全准确的复杂查询。我们针对快批 Schema 进行专项微调，大幅提升 AI 生成 SQL 的准确率。
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
                  <MessageSquareQuote className="w-5 h-5 text-emerald-500" />
                  行业“黑话”理解
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  批发行业有大量口语化术语。通过微调，模型能精准识别<span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs mx-1">“打个折”</span>、<span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs mx-1">“抹零”</span>、<span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs mx-1">“拿两箱”</span>等非标准商业语言，转化为标准系统指令。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivateModel() {
  return (
    <section id="private-model" className="py-24 bg-[#fbfbfd] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-6 border border-emerald-100">
            <Lock className="w-4 h-4" />
            快批混合大模型架构
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">商业机密，寸步不让</h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            所有用户都能享受快批私有云端大模型。我们采用<strong className="text-slate-900 font-semibold">混合模式</strong>：日常非核心任务调用通用大模型，核心数据调用私有大模型，从物理和网络层面彻底避免核心商业数据在公有云中泄漏。
          </p>
        </div>

        {/* Strategy - Tiered Deployment */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Public Cloud */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
                  <Cloud className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">通用大模型</h4>
                  <p className="text-blue-600 text-sm font-medium mt-1">处理日常非核心任务</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed relative z-10">
                用于处理非敏感任务，如生成营销文案、回复通用询价、多语言翻译等。充分利用顶级公有云模型强大的泛化与推理能力。
              </p>
            </div>

            {/* Private Cloud */}
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 text-emerald-400 flex items-center justify-center border border-slate-700 shadow-sm">
                  <Server className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">快批私有云端大模型</h4>
                  <p className="text-emerald-400 text-sm font-medium mt-1">处理核心敏感数据</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed relative z-10">
                支持各类国产大模型，专门处理涉及财务账目、客户名单和库存策略的敏感任务，确保核心商业数据不出私有云，保障绝对安全。
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 border border-emerald-100">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">数据隔离</h4>
            <p className="text-slate-600 leading-relaxed">满足大中型批发商对“商业秘密不出库”的硬性要求，彻底杜绝核心财务与客户数据泄露风险。</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <LineChart className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">成本可控</h4>
            <p className="text-slate-600 leading-relaxed">当日调用量超过 1M Tokens 后，私有化部署的 TCO（总拥有成本）在 4 个月左右即可低于 API 调用费。</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 border border-indigo-100">
              <Anchor className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">版本锚定</h4>
            <p className="text-slate-600 leading-relaxed">避免公有云模型更新导致的 Skill 逻辑失效（即“模型退化”问题），确保企业级自动化流程的绝对稳定。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hardware() {
  return (
    <section id="hardware" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6 border border-slate-200">
              <Cpu className="w-4 h-4" />
              必选本地网关
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">智算网关 IronBox</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              快批不支持云端部署 OpenClaw，IronBox 是实现 AI 代理的<strong className="text-slate-900">必选项</strong>。它在本地运行 OpenClaw 引擎，直接对接内网 ERP 数据库。
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Terminal className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-lg mb-1">本地化 OpenClaw 引擎</h4>
                  <p className="text-slate-500">UI 自动化与脚本在本地网关运行，极速响应，不受公网波动影响。</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Database className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-lg mb-1">内网直连，数据不出局</h4>
                  <p className="text-slate-500">安全连接本地 ERP 数据库，无需将核心业务数据暴露在公网，彻底杜绝泄露风险。</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Activity className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-lg mb-1">全天候 Heartbeat 运行</h4>
                  <p className="text-slate-500">独立硬件环境为 Heartbeat 机制提供 24 小时稳定的运行环境，不占用办公电脑资源。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-full min-h-[400px]">
            {/* Mac Mini Style Hardware CSS Illustration */}
            <div className="relative z-10 w-80 h-24 bg-gradient-to-b from-[#fdfdfd] to-[#e2e2e6] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.9)] border border-[#c5c5d0] flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
              {/* Base shadow/stand */}
              <div className="absolute -bottom-3 w-56 h-6 bg-[#1d1d1f] rounded-[100%] blur-xl opacity-30 -z-10"></div>
              <div className="absolute bottom-0 w-56 h-1.5 bg-[#1d1d1f] rounded-b-3xl opacity-15"></div>
              
              {/* Top Logo placeholder */}
              <div className="absolute top-0 w-full h-full flex items-center justify-center opacity-40">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center">
                   <span className="text-slate-600 font-black italic text-xs">快批</span>
                </div>
              </div>
              
              {/* Front indicator light */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 shadow-[0_0_4px_rgba(0,0,0,0.5)]"></div>
            </div>
            
            {/* Decorative background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-50 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-slate-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecuritySolution() {
  return (
    <section id="security" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-emerald-400 text-sm font-semibold mb-6 border border-slate-700">
            <Shield className="w-4 h-4" />
            快批 ERP 代理化安全解决方案
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">企业数字资产保险箱</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            通过<strong className="text-white font-semibold">快批智算网关（IronBox）</strong>与<strong className="text-white font-semibold">快批私有大模型中心（Sovereign Cloud）</strong>的联动，解决企业级数据主权与成本之间的矛盾。
          </p>
        </div>

        {/* Core Architecture Design */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <Network className="w-6 h-6 text-blue-400" />
            快批安全架构设计
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">混合主权路由机制</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                系统根据任务敏感度自动分发请求。
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">低敏任务：</strong>路由至公有云 API（降低计算成本）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">高敏任务：</strong>强制路由至快批私有模型中心，确保 Token 链路闭环</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 border border-amber-500/30">
                <EyeOff className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">边缘脱敏引擎</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                在数据离开“快批智算盒子”前进行强制本地处理。
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">动态掩码：</strong>自动识别并替换 PII 及精确财务数字为占位符</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">本地还原：</strong>策略返回后由本地网关还原真实数据，实现“可用不可见”</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">本地化 RAG 索引</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                AI 的“账本”必须留在本地。
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">私密存储：</strong>业务上下文与历史记忆存储在盒子内部，不上传云端</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                  <span><strong className="text-white">物理隔离：</strong>本地运行检索，仅将相关片段加入推理上下文</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Functional Requirements Table (Visualized as Cards) */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <Layers className="w-6 h-6 text-emerald-400" />
            四层安全隔离机制
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-6 bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">物理隔离层</h4>
                <p className="text-slate-400 text-sm mb-2"><strong className="text-slate-200">策略：</strong>快批 IronBox 智算盒子，独立计算单元，预装加密存储模块。</p>
                <p className="text-emerald-400 text-sm font-medium">预期：确保数据物理驻留在用户现场。</p>
              </div>
            </div>
            <div className="flex gap-6 bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">网络加密层</h4>
                <p className="text-slate-400 text-sm mb-2"><strong className="text-slate-200">策略：</strong>内置安全隧道 (Tailscale)，禁止公网 IP 访问，建立加密 VPC。</p>
                <p className="text-emerald-400 text-sm font-medium">预期：杜绝端口暴露导致的扫描攻击。</p>
              </div>
            </div>
            <div className="flex gap-6 bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">指令执行层</h4>
                <p className="text-slate-400 text-sm mb-2"><strong className="text-slate-200">策略：</strong>人在回路 (HITL) 审批，风险操作必须在移动端确认后方能执行。</p>
                <p className="text-emerald-400 text-sm font-medium">预期：防止 AI 代理“脱缰”造成业务损失。</p>
              </div>
            </div>
            <div className="flex gap-6 bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">环境隔离层</h4>
                <p className="text-slate-400 text-sm mb-2"><strong className="text-slate-200">策略：</strong>Docker 沙箱运行，所有 Skill 在受限容器中运行，剥夺 Root 权限。</p>
                <p className="text-emerald-400 text-sm font-medium">预期：防止恶意 Skill 入侵宿主机系统。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Firewalls */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">快批安全的“三道防火墙”</h3>
            <p className="text-slate-400">商业化合规与准则：零数据留存协议，透明化任务链审计</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-600">
                <span className="text-xl font-bold text-slate-300">1</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">IronBox 网关</h4>
              <p className="text-slate-400 text-sm">在边缘侧完成 PII 脱敏和 RAG 检索，确保“脏数据”不出场。</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-600">
                <span className="text-xl font-bold text-slate-300">2</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">快批私有云</h4>
              <p className="text-slate-400 text-sm">提供具备公有模型智力、但受快批管辖的私有推理环境，解决 Token 安全。</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-600">
                <span className="text-xl font-bold text-slate-300">3</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">OpenClaw HITL</h4>
              <p className="text-slate-400 text-sm">将最终决策权牢牢握在“老板”手中，确保 AI 只跑腿、不擅权。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">商业化与定价</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">从按账号收费转向按效率收费，让 AI 真正替代人工成本。</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Plus Icon in the middle for desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-slate-200 items-center justify-center z-10 shadow-sm text-slate-400">
            <Plus className="w-6 h-6" />
          </div>

          {/* Plan 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10 flex flex-col relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              第一步：必选硬件
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">IronBox 智算网关</h3>
              <p className="text-slate-400 text-sm">本地部署 OpenClaw 引擎，数据物理隔离保护</p>
            </div>
            <div className="mb-8">
              <div className="text-slate-400 text-sm mb-1 font-medium">硬件买断</div>
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">¥2999</span>
                <span className="text-slate-500 text-sm ml-2 font-medium">/台</span>
              </div>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-medium">本地化部署 OpenClaw，数据物理隔离</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-medium">24/7 主动任务流 (Heartbeat) 稳定运行</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-medium">极速响应，不受公网波动影响</span>
              </li>
            </ul>
            <Link to="/gateway" className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-md text-center block">
              体验网关 Dashboard
            </Link>
          </div>

          {/* Plan 2 */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-sm font-bold px-5 py-2 rounded-bl-2xl">
              第二步：订阅 Token
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">SaaS 智能包</h3>
              <p className="text-slate-500 text-sm">购买快批 Token，全面体验混合大模型代理能力</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-slate-900">¥99</span>
              <span className="text-slate-500 font-medium">/月</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">接入快批 ClawHub 技能</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">支持移动端交互 (企微/钉钉/飞书)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">所有用户均可享受快批私有云端大模型</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">每月包含 1000万 基础 Token 额度</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold transition-colors border border-slate-200">
              立即开通
            </button>
          </div>
        </div>

        {/* Token Pricing Standards */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">超额 Token 计费标准</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">SaaS 智能包已包含基础 Token 费用。当您的业务量激增，超出基础额度后，将按以下极具性价比的标准计费。</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Public API */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                <Cloud className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">通用大模型调用</h4>
              <p className="text-slate-500 text-sm mb-4">用于日常非核心任务</p>
              <div className="mb-4 pb-4 border-b border-slate-100">
                <span className="text-3xl font-bold text-slate-900">¥15</span>
                <span className="text-slate-500 text-sm"> / 1M Tokens</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"/> <span>超额后按实际调用量计费</span></li>
              </ul>
            </div>

            {/* Private Cloud */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                核心保护
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                <Server className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">快批私有云端大模型</h4>
              <p className="text-slate-400 text-sm mb-4">用于核心敏感数据处理</p>
              <div className="mb-4 pb-4 border-b border-slate-700">
                <span className="text-3xl font-bold text-white">¥8</span>
                <span className="text-slate-400 text-sm"> / 1M Tokens</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"/> <span>超额后按实际调用量计费</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-blue-600 text-white font-black italic tracking-tighter px-2 py-0.5 rounded text-sm">
            快批
          </div>
          <span className="text-lg font-bold text-slate-900">Agentic ERP</span>
        </div>
        <div className="text-slate-500 text-sm font-medium">
          &copy; 2026 Kuaipi Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Scenarios />
        <Architecture />
        <PrivateModel />
        <Hardware />
        <SecuritySolution />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gateway" element={<GatewayDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
