import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, Route, BrainCircuit, Shield, ActivitySquare, Cpu, Database, ArrowLeft, CheckCircle2, Cloud, Lock, MessageSquare, Send, Bot, User, ToggleLeft, ToggleRight, ShieldAlert, Globe, Key, Zap, Layers, Network, Terminal, Settings, Store, Download, Check, ShieldCheck,
  AlertTriangle, ShoppingCart, Truck, FileText, BarChart, Clock, PieChart, Package, ListChecks, Map, Calendar,
  UserMinus, Star, Target, Activity, Gift, Bell, TrendingUp, Tags, Heart, Eye, PlayCircle, Users,
  FileSpreadsheet, Mail, MessageCircle, Receipt, RefreshCw, FolderTree, MousePointerClick, Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GatewayDemo() {
  const [activeTab, setActiveTab] = useState('market');
  const [marketTab, setMarketTab] = useState('clawhub'); // 'kuaipi' or 'clawhub'
  const [logs, setLogs] = useState<string[]>([]);
  const [isHeartbeatActive, setIsHeartbeatActive] = useState(true);
  
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', content: '您好，我是 IronBox 智算网关的 AI 助手。您可以测试我已挂载的各项技能，例如“智能库存预警”、“网页数据通用抓取”等。' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Lifted state for installed skills
  const [installedSkills, setInstalledSkills] = useState([
    { id: 'erp1', name: '智能库存预警', status: true, type: 'ERP Skill' },
    { id: 'ch1', name: '网页数据通用抓取', status: true, type: 'Web Automation' }
  ]);

  useEffect(() => {
    if (!isHeartbeatActive) return;
    
    const newLogs = [
      "[02:00:01] System: Initiating nightly reconciliation...",
      "[02:05:12] System: Reconciliation complete. No anomalies found.",
      "[04:30:00] Sync: Syncing local inventory with cloud...",
      "[06:15:22] Task: Generating daily sales report...",
      "[08:00:00] Route: Pushing report to WeChat Work channel...",
      "[09:12:45] AI Engine: Executing UI automation for order #8821...",
      "[09:13:02] AI Engine: Order #8821 processed successfully.",
      "[10:05:11] Monitor: Checking inventory levels...",
      "[10:05:15] Alert: Product 'A-Motherboard' below safety stock.",
      "[10:05:18] AI Engine: Drafting purchase order for supplier 'HQB Electronics'..."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < newLogs.length) {
        setLogs(prev => [...prev, newLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isHeartbeatActive]);

  useEffect(() => {
    if (activeTab === 'ai') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, activeTab]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const newUserMsg = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, newUserMsg]);
    setChatInput('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: 'bot', 
        content: `已收到指令："${newUserMsg.content}"。正在通过 AI 引擎调度相关技能与本地数据... (模拟返回结果)` 
      }]);
    }, 1000);
  };

  const handleInstallSkill = (skill: any) => {
    if (!installedSkills.find(s => s.id === skill.id)) {
      setInstalledSkills(prev => [...prev, { id: skill.id, name: skill.name, status: true, type: skill.type }]);
    }
  };

  const toggleSkillStatus = (id: string) => {
    setInstalledSkills(prev => prev.map(s => s.id === id ? { ...s, status: !s.status } : s));
  };

  const handleTestSkill = (skillName: string) => {
    setActiveTab('ai');
    setChatInput(`请帮我执行【${skillName}】相关的任务：`);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const renderOverview = () => (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">网关概览</h2>
        <p className="text-slate-500 mt-1">查看系统运行状态与核心指标</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
          <div className="text-slate-500 text-sm font-medium mb-1">CPU 负载</div>
          <div className="text-2xl font-bold text-slate-900 flex items-end gap-2">
            12% <span className="text-xs text-emerald-600 font-normal mb-1">正常</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div className="w-[12%] h-full bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
          <div className="text-slate-500 text-sm font-medium mb-1">内存使用</div>
          <div className="text-2xl font-bold text-slate-900 flex items-end gap-2">
            3.2<span className="text-lg text-slate-500">GB</span> <span className="text-xs text-slate-400 font-normal mb-1">/ 8GB</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div className="w-[40%] h-full bg-indigo-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
          <div className="text-slate-500 text-sm font-medium mb-1">今日 AI 调用次数</div>
          <div className="text-2xl font-bold text-slate-900 flex items-end gap-2">
            1,402 <span className="text-xs text-emerald-600 font-normal mb-1">+12%</span>
          </div>
          <div className="text-xs text-slate-400 mt-3">混合大模型推理</div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
          <div className="text-slate-500 text-sm font-medium mb-1">网络延迟 (ERP内网)</div>
          <div className="text-2xl font-bold text-slate-900 flex items-end gap-2">
            2<span className="text-lg text-slate-500">ms</span>
          </div>
          <div className="text-xs text-emerald-600 mt-3 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> 极速直连
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
        <h3 className="text-slate-900 font-semibold mb-6 flex items-center gap-2">
          <Network className="w-5 h-5 text-indigo-500" />
          本地部署拓扑图
        </h3>
        <div className="flex items-center justify-between max-w-4xl mx-auto py-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
              <Database className="w-8 h-8 text-slate-600" />
            </div>
            <div className="text-sm font-medium text-slate-700">内网 ERP 数据库</div>
          </div>
          
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-full h-0.5 bg-slate-200 absolute"></div>
            <div className="w-full h-0.5 bg-emerald-500/50 absolute" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
            <div className="bg-white px-3 py-1 rounded-full border border-slate-200 text-xs text-slate-500 z-10 font-mono shadow-sm">
              Local LAN (0ms)
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)] relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
              <Cpu className="w-10 h-10 text-blue-600" />
            </div>
            <div className="text-sm font-bold text-slate-900">IronBox 智算网关</div>
            <div className="text-xs text-blue-600 font-mono bg-blue-100 px-2 py-0.5 rounded">Core Engine</div>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-full h-0.5 bg-slate-200 absolute"></div>
            <div className="bg-white px-3 py-1 rounded-full border border-slate-200 text-xs text-slate-500 z-10 font-mono flex items-center gap-1 shadow-sm">
              <Lock className="w-3 h-3 text-amber-500" /> Encrypted
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
              <Cloud className="w-8 h-8 text-slate-600" />
            </div>
            <div className="text-sm font-medium text-slate-700">快批混合大模型</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAIEngine = () => (
    <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-6 shrink-0 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">AI 引擎 & 对话测试</h2>
          <p className="text-slate-500 mt-1">配置 AI 技能并测试大模型与本地数据的交互</p>
        </div>
        <button 
          onClick={() => setActiveTab('market')}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
        >
          <Store className="w-4 h-4" />
          前往技能市场获取更多技能
        </button>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
        {/* Skills List */}
        <div className="col-span-1 bg-white border border-slate-200 shadow-sm rounded-xl p-6 flex flex-col overflow-hidden">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 shrink-0">
            <Layers className="w-5 h-5 text-purple-500" />
            已挂载技能 ({installedSkills.length})
          </h3>
          <div className="space-y-3 overflow-y-auto pr-2 flex-1">
            {installedSkills.map((skill) => (
              <div key={skill.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-slate-900 font-medium text-sm">{skill.name}</div>
                  <div 
                    className={`flex items-center gap-1 cursor-pointer transition-colors ${skill.status ? 'text-blue-600' : 'text-slate-400'}`}
                    onClick={() => toggleSkillStatus(skill.id)}
                  >
                    {skill.status ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                  </div>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> {skill.type}
                </div>
              </div>
            ))}
            {installedSkills.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-sm">
                暂无挂载的技能，请前往技能市场安装。
              </div>
            )}
          </div>
        </div>

        {/* AI Chat Testing */}
        <div className="col-span-2 bg-white border border-slate-200 shadow-sm rounded-xl flex flex-col overflow-hidden">
          <div className="h-14 border-b border-slate-200 bg-slate-50 flex items-center px-6 shrink-0">
            <MessageSquare className="w-5 h-5 text-emerald-500 mr-2" />
            <h3 className="font-semibold text-slate-800">对话测试沙箱</h3>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-emerald-500'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-sm' 
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Test Pills */}
          {installedSkills.length > 0 && (
            <div className="px-6 py-3 bg-white border-t border-slate-200 shrink-0 flex items-center gap-2 overflow-x-auto">
              <span className="text-xs text-slate-500 shrink-0 font-medium">快捷测试:</span>
              {installedSkills.map(skill => (
                <button 
                  key={skill.id}
                  onClick={() => setChatInput(`请帮我执行【${skill.name}】相关的任务：`)}
                  className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-xs font-medium transition-colors whitespace-nowrap border border-slate-200 hover:border-blue-200"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          )}

          <div className="p-4 bg-white border-t border-slate-200 shrink-0">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="输入测试指令，例如：查询 A-Motherboard 的库存"
                className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm shadow-sm">
                <Send className="w-4 h-4" />
                发送
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarket = () => {
    const clawhubSkills = [
      { id: 'ch1', name: '网页数据通用抓取', desc: '输入任意URL，自动解析DOM结构并提取结构化表格或文本数据。', type: 'Web Automation', icon: Globe },
      { id: 'ch2', name: 'Excel/CSV 自动化处理', desc: '支持多表合并、数据清洗、透视表生成及复杂宏脚本的替代执行。', type: 'Data Processing', icon: FileSpreadsheet },
      { id: 'ch3', name: '智能邮件分发与回复', desc: '接入 IMAP/SMTP，自动阅读、分类来信，并根据预设知识库起草回复。', type: 'Communication', icon: Mail },
      { id: 'ch4', name: '自然语言转 SQL 直连', desc: '将自然语言转化为安全的只读 SQL 语句，直接查询 MySQL/PG 等数据库。', type: 'Database', icon: Database },
      { id: 'ch5', name: '企微/钉钉机器人适配', desc: '标准化的消息推送、交互式卡片处理，无缝对接企业内部通讯软件。', type: 'Integration', icon: MessageCircle },
      { id: 'ch6', name: '发票 OCR 与自动录入', desc: '高精度识别 PDF/图片格式的发票信息，并自动填报到指定财务系统。', type: 'Document AI', icon: Receipt },
      { id: 'ch7', name: '跨系统 API 数据桥接', desc: '提供通用的 REST/GraphQL 轮询与 Webhook 触发机制，打通数据孤岛。', type: 'Integration', icon: RefreshCw },
      { id: 'ch8', name: '本地文件智能整理', desc: '扫描指定目录，根据文件内容或元数据自动重命名并归档到对应文件夹。', type: 'OS Automation', icon: FolderTree },
      { id: 'ch9', name: '浏览器 UI 自动化执行', desc: '针对无 API 的老旧系统，通过模拟鼠标点击和键盘输入完成自动化录入。', type: 'RPA', icon: MousePointerClick },
      { id: 'ch10', name: '多模态 PDF 报告生成', desc: '将结构化数据、图表和文本动态组合，生成排版精美的 PDF 业务报告。', type: 'Reporting', icon: FileText }
    ];

    const erpSkills = [
      { id: 'erp1', name: '智能库存预警', desc: '预测缺货风险并自动报警，结合历史动销率计算安全库存。', type: 'ERP Skill', icon: AlertTriangle },
      { id: 'erp2', name: '一键采购单生成', desc: '根据历史销量、当前库存及供应商起订量自动生成采购草稿。', type: 'ERP Skill', icon: ShoppingCart },
      { id: 'erp3', name: '多仓调拨优化', desc: '自动计算最优的跨仓库调拨方案，降低整体物流与仓储成本。', type: 'ERP Skill', icon: Truck },
      { id: 'erp4', name: '异常订单拦截', desc: '基于规则与AI识别价格异常、地址异常或黄牛刷单并自动拦截。', type: 'ERP Skill', icon: ShieldAlert },
      { id: 'erp5', name: '财务对账助手', desc: '自动核对支付流水与业务订单，智能标记差异项与异常账单。', type: 'ERP Skill', icon: FileText },
      { id: 'erp6', name: '滞销品分析', desc: '多维度找出滞销库存，并自动生成打折促销或捆绑销售方案。', type: 'ERP Skill', icon: BarChart },
      { id: 'erp7', name: '供应商交期预测', desc: '根据历史采购数据与外部物流因素，预测供应商实际交货时间。', type: 'ERP Skill', icon: Clock },
      { id: 'erp8', name: 'BOM成本动态核算', desc: '实时根据原材料市场价格波动，自动更新并预警成品BOM成本。', type: 'ERP Skill', icon: PieChart },
      { id: 'erp9', name: '退换货自动定损', desc: '根据退货记录、物流重量和用户上传图片初步判定责任归属。', type: 'ERP Skill', icon: Package },
      { id: 'erp10', name: '智能盘点计划', desc: '根据商品动销率、价值级别自动生成科学的循环盘点任务。', type: 'ERP Skill', icon: ListChecks },
      { id: 'erp11', name: '运费模板智能匹配', desc: '根据订单重量、体积和目的地，自动选择成本最优的物流承运商。', type: 'ERP Skill', icon: Map },
      { id: 'erp12', name: '批次效期追踪', desc: '针对食品/医药等行业自动追踪批次，提前预警临期商品。', type: 'ERP Skill', icon: Calendar }
    ];

    const crmSkills = [
      { id: 'crm1', name: '客户流失预警', desc: '分析客户购买频率与互动下降趋势，提前预警高流失风险客户。', type: 'CRM Skill', icon: UserMinus },
      { id: 'crm2', name: '高价值客户挖掘', desc: '基于 RFM 模型与消费行为，自动识别并提取潜在高价值客户。', type: 'CRM Skill', icon: Star },
      { id: 'crm3', name: '智能跟进话术', desc: '根据客户历史沟通记录与偏好，自动生成个性化的销售跟进话术。', type: 'CRM Skill', icon: MessageSquare },
      { id: 'crm4', name: '销售线索打分', desc: '根据客户互动行为、企业规模等维度对销售线索进行自动化评级。', type: 'CRM Skill', icon: Target },
      { id: 'crm5', name: '投诉情感分析', desc: '自动识别客服工单中的客户情绪，优先高亮并升级处理愤怒客户。', type: 'CRM Skill', icon: Activity },
      { id: 'crm6', name: '个性化商品推荐', desc: '根据客户历史订单与浏览轨迹，生成专属的商品推荐列表。', type: 'CRM Skill', icon: Gift },
      { id: 'crm7', name: '沉睡客户唤醒', desc: '自动筛选长时间未复购的沉睡客户，并生成定向营销短信/邮件。', type: 'CRM Skill', icon: Bell },
      { id: 'crm8', name: '销售业绩预测', desc: '基于当前商机漏斗和历史转化率，智能预测本月/本季度的销售额。', type: 'CRM Skill', icon: TrendingUp },
      { id: 'crm9', name: '客户画像自动打标', desc: '提取聊天记录和购买行为，利用 NLP 自动为客户打上精准标签。', type: 'CRM Skill', icon: Tags },
      { id: 'crm10', name: '智能报价单生成', desc: '根据客户等级、历史底价及当前库存成本，自动生成阶梯报价单。', type: 'CRM Skill', icon: FileText },
      { id: 'crm11', name: '节假日关怀自动化', desc: '自动匹配客户特征与宗教/文化背景，发送节假日问候和专属优惠券。', type: 'CRM Skill', icon: Heart },
      { id: 'crm12', name: '竞品提及监控', desc: '在客户沟通记录中自动提取竞品提及信息，并汇总生成竞争态势报告。', type: 'CRM Skill', icon: Eye }
    ];

    return (
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">技能市场</h2>
            <p className="text-slate-500 mt-1">发现并安装更多 AI 技能与自动化工作流，扩展网关能力</p>
          </div>
        </div>

        {/* Market Tabs */}
        <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-lg w-fit">
          <button 
            onClick={() => setMarketTab('clawhub')} 
            className={`px-5 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${marketTab === 'clawhub' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <ShieldCheck className="w-4 h-4" />
            Clawhub 官方市场
          </button>
          <button 
            onClick={() => setMarketTab('kuaipi')} 
            className={`px-5 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${marketTab === 'kuaipi' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Cloud className="w-4 h-4" />
            快批专属生态
          </button>
        </div>

        {marketTab === 'clawhub' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-900">Top 10 热门官方技能</h3>
              <span className="text-sm text-slate-500 ml-2">由 OpenClaw 官方认证并维护的底层自动化能力</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {clawhubSkills.map((skill, index) => {
                const isInstalled = installedSkills.some(s => s.id === skill.id);
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 flex gap-4 hover:border-blue-300 transition-colors relative overflow-hidden">
                    {index < 3 && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                        TOP {index + 1}
                      </div>
                    )}
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="pr-10">
                          <h4 className="text-slate-900 font-semibold">{skill.name}</h4>
                          <div className="text-xs text-blue-600 font-medium mt-0.5 bg-blue-50 inline-block px-1.5 py-0.5 rounded">官方认证</div>
                        </div>
                        <div className="flex items-center gap-2">
                          {isInstalled && (
                            <button 
                              onClick={() => handleTestSkill(skill.name)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors border border-emerald-100"
                            >
                              <PlayCircle className="w-3.5 h-3.5" /> 测试
                            </button>
                          )}
                          <button 
                            onClick={() => handleInstallSkill(skill)}
                            disabled={isInstalled}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                              isInstalled 
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                            }`}
                          >
                            {isInstalled ? (
                              <><Check className="w-3.5 h-3.5" /> 已安装</>
                            ) : (
                              <><Download className="w-3.5 h-3.5" /> 安装</>
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm mt-2 leading-relaxed">{skill.desc}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-slate-400 flex items-center gap-1"><Zap className="w-3 h-3" /> {skill.type}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {marketTab === 'kuaipi' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
            {/* ERP Skills Section */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                快批专属技能 - ERP 核心
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {erpSkills.map(skill => {
                  const isInstalled = installedSkills.some(s => s.id === skill.id);
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 flex gap-4 hover:border-emerald-300 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-slate-900 font-semibold">{skill.name}</h4>
                            <div className="text-xs text-emerald-600 font-medium mt-0.5 bg-emerald-50 inline-block px-1.5 py-0.5 rounded">ERP Skill</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {isInstalled && (
                              <button 
                                onClick={() => handleTestSkill(skill.name)}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors border border-emerald-100"
                              >
                                <PlayCircle className="w-3.5 h-3.5" /> 测试
                              </button>
                            )}
                            <button 
                              onClick={() => handleInstallSkill(skill)}
                              disabled={isInstalled}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                                isInstalled 
                                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                              }`}
                            >
                              {isInstalled ? (
                                <><Check className="w-3.5 h-3.5" /> 已安装</>
                              ) : (
                                <><Download className="w-3.5 h-3.5" /> 安装</>
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">{skill.desc}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-slate-400 flex items-center gap-1"><Zap className="w-3 h-3" /> {skill.type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CRM Skills Section */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                快批专属技能 - CRM 核心
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {crmSkills.map(skill => {
                  const isInstalled = installedSkills.some(s => s.id === skill.id);
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 flex gap-4 hover:border-emerald-300 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-slate-900 font-semibold">{skill.name}</h4>
                            <div className="text-xs text-emerald-600 font-medium mt-0.5 bg-emerald-50 inline-block px-1.5 py-0.5 rounded">CRM Skill</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {isInstalled && (
                              <button 
                                onClick={() => handleTestSkill(skill.name)}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors border border-emerald-100"
                              >
                                <PlayCircle className="w-3.5 h-3.5" /> 测试
                              </button>
                            )}
                            <button 
                              onClick={() => handleInstallSkill(skill)}
                              disabled={isInstalled}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                                isInstalled 
                                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                              }`}
                            >
                              {isInstalled ? (
                                <><Check className="w-3.5 h-3.5" /> 已安装</>
                              ) : (
                                <><Download className="w-3.5 h-3.5" /> 安装</>
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">{skill.desc}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-slate-400 flex items-center gap-1"><Zap className="w-3 h-3" /> {skill.type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  const renderSecurity = () => (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">安全防护</h2>
        <p className="text-slate-500 mt-1">实时监控网关的安全状态与拦截记录</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-slate-600 font-medium">防火墙状态</div>
            <Shield className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">Active</div>
          <div className="text-sm text-emerald-600 font-medium">今日拦截 124 次异常请求</div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-slate-600 font-medium">数据加密</div>
            <Key className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">AES-256</div>
          <div className="text-sm text-blue-600 font-medium">端到端加密已启用</div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-slate-600 font-medium">外部连接</div>
            <Globe className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">3</div>
          <div className="text-sm text-amber-600 font-medium">仅允许白名单 IP 访问</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-red-500" />
          近期拦截记录
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500 border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="py-3 px-4 font-medium rounded-tl-lg">时间</th>
                <th className="py-3 px-4 font-medium">来源 IP</th>
                <th className="py-3 px-4 font-medium">拦截原因</th>
                <th className="py-3 px-4 font-medium rounded-tr-lg">动作</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                { time: '10:24:05', ip: '45.22.19.102', reason: 'SQL 注入尝试', action: 'IP 封禁' },
                { time: '09:12:33', ip: '112.85.33.11', reason: '未授权的 API 访问', action: '拒绝请求' },
                { time: '08:45:12', ip: '89.102.4.55', reason: '高频请求 (DDoS)', action: '限流' },
                { time: '02:11:09', ip: '193.55.2.1', reason: '异常的地理位置', action: '拒绝请求' }
              ].map((log, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-500">{log.time}</td>
                  <td className="py-3 px-4 font-mono">{log.ip}</td>
                  <td className="py-3 px-4 text-red-600 font-medium">{log.reason}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded bg-red-50 text-red-600 text-xs font-bold border border-red-100">
                      {log.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderMonitoring = () => (
    <div className="max-w-6xl mx-auto space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-2 shrink-0">
        <h2 className="text-2xl font-bold text-slate-900">监控日志</h2>
        <p className="text-slate-500 mt-1">查看网关底层运行日志与事件流</p>
      </div>

      <div className="bg-slate-900 rounded-xl overflow-hidden flex flex-col flex-1 shadow-lg border border-slate-800">
        <div className="h-12 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 text-sm font-mono">gateway-core.log</span>
          </div>
          <button 
            onClick={() => setIsHeartbeatActive(!isHeartbeatActive)}
            className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-bold transition-colors ${
              isHeartbeatActive 
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
            }`}
          >
            {isHeartbeatActive ? '暂停输出' : '恢复输出'}
          </button>
        </div>
        
        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-[#0a0c10]">
          <div className="space-y-2">
            {logs.map((log, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                key={index} 
                className={`flex gap-3 ${
                  log?.includes('Alert') ? 'text-amber-400' : 
                  log?.includes('AI Engine') ? 'text-blue-400' : 
                  'text-slate-300'
                }`}
              >
                <span className="shrink-0 opacity-50">{log?.substring(0, 10)}</span>
                <span>{log?.substring(11)}</span>
              </motion.div>
            ))}
            {isHeartbeatActive && (
              <div className="flex gap-3 text-slate-600 animate-pulse mt-2">
                <span className="shrink-0">[--:--:--]</span>
                <span>Waiting for next event...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 flex flex-col">
      {/* Top Navigation */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            返回官网
          </Link>
          <div className="h-4 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-900 font-bold tracking-wide">IronBox Gateway</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 ml-2">v2.0.0</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
            <span className="text-slate-700 font-medium">System Online</span>
          </div>
          <div className="text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200">IP: 192.168.1.105</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 bg-white p-4 flex flex-col gap-1 shrink-0 z-0">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3 mt-2">Core Functions</div>
          
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'overview' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}>
            <LayoutDashboard className="w-4 h-4" />
            网关概览
          </button>
          
          <button 
            onClick={() => setActiveTab('market')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'market' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}>
            <Store className="w-4 h-4" />
            技能市场
          </button>

          <button 
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'ai' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}>
            <BrainCircuit className="w-4 h-4" />
            AI 引擎 & 测试
          </button>
          
          <button 
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'security' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}>
            <Shield className="w-4 h-4" />
            安全防护
          </button>

          <button 
            onClick={() => setActiveTab('monitoring')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'monitoring' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}>
            <ActivitySquare className="w-4 h-4" />
            监控日志
          </button>
          
          <div className="mt-auto pt-4 border-t border-slate-200">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors w-full font-medium">
              <Settings className="w-4 h-4" />
              系统设置
            </button>
          </div>
        </aside>

        {/* Dashboard Area */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'market' && renderMarket()}
            {activeTab === 'ai' && renderAIEngine()}
            {activeTab === 'security' && renderSecurity()}
            {activeTab === 'monitoring' && renderMonitoring()}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
