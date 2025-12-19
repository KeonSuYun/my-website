import React, { useState } from 'react';
import { 
  ArrowLeft, User, Mail, Cloud, Loader2, Send, 
  Sparkles, Gem, AlertCircle, Link as LinkIcon
} from 'lucide-react';

const ContactPage = ({ onNavigate }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // 注意：请将此处的 URL 替换为您在 Formspree 注册后获得的各种 URL
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeejjeak"; 
    
    return (
        <div className="min-h-screen pt-24 pb-12 animate-in slide-in-from-right-10 duration-500 bg-slate-950">
             {/* 背景装饰 */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="mb-8">
                    <button 
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                    >
                        <div className="p-1 rounded bg-slate-800 border border-slate-700 group-hover:bg-slate-700">
                            <ArrowLeft size={16} />
                        </div>
                        <span>返回首页</span>
                    </button>
                </div>

                <div className="glass-panel rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/50">
                    
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-4">开启合作</h2>
                        <p className="text-slate-400 max-w-lg mx-auto">
                            Solomon AI 为独立开发者提供从概念到引擎资产的全流程服务。
                            请选择您的需求类型，我们将在 24 小时内评估并回复。
                        </p>
                    </div>

                    {/* 表单开始 - 集成 Formspree */}
                    <form 
                        action={FORMSPREE_ENDPOINT} 
                        method="POST" 
                        encType="multipart/form-data" 
                        className="space-y-8 relative z-10"
                    >
                        {/* 服务层级选择 (核心业务逻辑) */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <label className="cursor-pointer relative group">
                                <input type="radio" name="service_tier" value="Free Trial" className="peer sr-only" defaultChecked />
                                <div className="h-full rounded-xl border border-slate-700 bg-slate-800/50 p-5 hover:bg-slate-800 peer-checked:border-indigo-500 peer-checked:bg-indigo-900/20 peer-checked:ring-1 peer-checked:ring-indigo-500 transition-all">
                                    <div className="flex items-center gap-2 mb-2 text-indigo-400">
                                        <Sparkles size={20} />
                                        <span className="font-bold">免费试稿 (Free Trial)</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-3">体验 Solomon AI 的生成能力与基础工作流。</p>
                                    <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                                        <li>生成概念图 (Concept Art)</li>
                                        <li>高模白膜预览 或 基础 UV 展开</li>
                                        <li><span className="text-red-400">不包含</span> 手工拓扑精修与烘焙</li>
                                    </ul>
                                </div>
                            </label>

                            <label className="cursor-pointer relative group">
                                <input type="radio" name="service_tier" value="Commercial Production" className="peer sr-only" />
                                <div className="h-full rounded-xl border border-slate-700 bg-slate-800/50 p-5 hover:bg-slate-800 peer-checked:border-green-500 peer-checked:bg-green-900/20 peer-checked:ring-1 peer-checked:ring-green-500 transition-all">
                                    <div className="flex items-center gap-2 mb-2 text-green-400">
                                        <Gem size={20} />
                                        <span className="font-bold">商业制作 (Paid)</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-3">全流程工业级交付，直接进引擎。</p>
                                    <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                                        <li>包含试稿所有内容</li>
                                        <li>人工重拓扑 & PBR 材质烘焙</li>
                                        <li>骨骼绑定 (Rigging)</li>
                                        {/* 新增：基础动画能力 */}
                                        <li className="font-semibold text-green-300">基础动画 (Idle/Walk/Run/Attack)</li>
                                    </ul>
                                </div>
                            </label>
                        </div>

                        {/* 基础信息 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">联系人 / 工作室</label>
                                <div className="relative">
                                    <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent block p-3 pl-10 placeholder-slate-600 outline-none transition-all" placeholder="您的称呼" />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                                        <User size={16} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">联系方式 (Email/微信)</label>
                                <div className="relative">
                                    <input type="text" name="contact" required className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent block p-3 pl-10 placeholder-slate-600 outline-none transition-all" placeholder="方便我们要取报价单" />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                                        <Mail size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 需求详情 */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">需求描述</label>
                            <textarea name="message" rows="4" className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent block p-4 placeholder-slate-600 outline-none transition-all resize-none" placeholder="例如：赛博朋克风格的女剑士，需要面数控制在10k以内，Unity URP管线。如果是动画需求，请注明需要的动作列表..."></textarea>
                        </div>

                        {/* 文件上传区域 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 直接上传 */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">参考图上传 (仅图片/PDF)</label>
                                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-950 hover:bg-slate-900 hover:border-indigo-500 transition-all group">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Cloud size={24} className="text-slate-500 mb-2 group-hover:text-indigo-400 transition-colors" />
                                        <p className="text-xs text-slate-400 text-center">点击上传参考图<br/>(Max 10MB)</p>
                                    </div>
                                    <input type="file" name="attachment" className="hidden" accept="image/*,.pdf" />
                                </label>
                            </div>

                            {/* 网盘链接 (解决大文件问题) */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">项目文件链接 (推荐)</label>
                                <div className="h-32 rounded-lg border border-slate-700 bg-slate-950 p-4 flex flex-col justify-center">
                                    <div className="relative mb-2">
                                        <input type="url" name="cloud_link" className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded focus:ring-1 focus:ring-indigo-500 block p-2 pl-8 placeholder-slate-600 outline-none" placeholder="Google Drive / Dropbox / 百度网盘链接" />
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-slate-500">
                                            <LinkIcon size={14} />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-500 leading-tight">
                                        <AlertCircle size={10} className="inline mr-1"/>
                                        为确保安全与传输速度，请将3D工程/压缩包上传至网盘，并填入链接。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full group relative flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-600 transition-all shadow-lg shadow-indigo-600/20"
                        >
                            <span className="flex items-center gap-2">
                                提交申请 <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        
                        <p className="text-[10px] text-center text-slate-600 mt-4">
                            提交即代表同意接收 Solomon AI 的报价方案。所有的资产所有权在付费后归您所有。
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;