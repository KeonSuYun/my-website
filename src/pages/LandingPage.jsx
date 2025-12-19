// src/pages/LandingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, Layers, Cpu, Hammer, CheckCircle, Zap, ShieldCheck, Box 
} from 'lucide-react';

// --- 内部组件：对比滑块 ---
// (保持原有的逻辑不变，只是搬到了这里)
const ComparisonSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const onMouseMove = (e) => handleMove(e.clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="w-full max-w-4xl mx-auto my-12">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">亲眼见证拓扑优化</h3>
                <p className="text-slate-400">左滑查看 AI 直出高模，右滑查看 Solomon 优化后的游戏级低模</p>
            </div>
            
            <div 
                ref={containerRef}
                className="relative w-full aspect-video overflow-hidden rounded-xl border border-slate-700 cursor-ew-resize select-none group touch-none"
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* 底图：优化后的低模 */}
                <div className="absolute inset-0 w-full h-full bg-slate-800">
                    <img 
                        src="https://placehold.co/1200x675/1e293b/FFF?text=Low+Poly+Topology+(Optimized)+-+Ready+for+Engine" 
                        alt="Optimized" 
                        className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold border border-green-500/50">
                        Solomon Optimized: 5,000 Tris
                    </div>
                </div>

                {/* 顶图：AI生成的原始高模 */}
                <div 
                    className="absolute inset-0 w-full h-full bg-slate-700 pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src="https://placehold.co/1200x675/475569/FFF?text=Raw+AI+Mesh+(500k+Polys)+-+Unusable" 
                        alt="Raw AI" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold border border-red-500/50">
                        Raw AI Output: 1,500,000 Tris
                    </div>
                </div>

                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-900">
                        <Layers size={16} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Landing Page 主体 ---
const LandingPage = ({ onNavigate }) => {
    return (
        <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                        <Zap size={16} />
                        <span>为独立游戏开发者而生</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        AI 的极限创造力 <br />
                        <span className="gradient-text">人工的工业级品质</span>
                    </h1>
                    <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        Solomon AI 是您的专属 AI 技术美术 (TA)。
                        我们通过 "AI 生成 + 人工精修" 的混合管线，为您提供 100% 可直接进引擎的游戏资产，不仅价格亲民，更符合商业标准。
                    </p>
                    <div className="flex justify-center gap-4 flex-col sm:flex-row px-4 items-center">
                        {/* ⚠️ 修改：点击使用 onNavigate 跳转到 cases 页面 */}
                        <button 
                            onClick={() => onNavigate('cases')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg shadow-indigo-500/20 inline-flex items-center gap-2"
                        >
                            查看案例 <ChevronRight size={20} />
                        </button>
                        
                        <button 
                            onClick={() => onNavigate('contact')}
                            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all"
                        >
                            联系试稿
                        </button>
                    </div>
                </div>
            </section>

            {/* 核心优势 */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/30 transition-colors">
                            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">文生图概念验证</h3>
                            <p className="text-slate-400">拒绝反复修改原画。我们利用文生图模型，快速生成多种风格的概念设计，让您在立项初期就能看清方向。</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 relative overflow-hidden hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                <Box size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">AI 辅助全流程</h3>
                            <p className="text-slate-400">从 AI 生成高模纹理，到 AI 辅助重拓扑与 UV 展开。我们利用技术将 3D 制作周期缩短 60%。</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-green-500/30 transition-colors">
                            <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4 text-green-400">
                                <Hammer size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">人工兜底交付</h3>
                            <p className="text-slate-400">AI 搞不定的细节，我们来。所有资产均经过人工烘焙、修补瑕疵与标准骨骼绑定，确保开箱即用。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 交互展示区 */}
            <section id="showcase" className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">质量对比</h2>
                        <p className="mt-4 text-slate-400">AI 提供创造力，我们提供可用性。</p>
                    </div>
                    
                    <ComparisonSlider />
                </div>
            </section>

            {/* 生产管线 */}
            <section id="process" className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Solomon 生产管线</h2>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
                        
                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { title: "概念生成", desc: "Text-to-Image 文生图，快速迭代美术风格", icon: "🎨" },
                                { title: "3D 生成", desc: "AI 生成带纹理的高精度模型与贴图", icon: "✨" },
                                { title: "拓扑优化", desc: "AI 辅助重拓扑 + UV 拆分 + 组件分离", icon: "🕸️" },
                                { title: "人工交付", desc: "人工烘焙、修复瑕疵、绑定与最终质检", icon: "🛠️" }
                            ].map((step, index) => (
                                <div key={index} className="bg-slate-800 border border-slate-700 p-6 rounded-xl text-center hover:border-indigo-500 transition-colors cursor-default group">
                                    <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 交付标准 */}
            <section id="standards" className="py-20 bg-slate-950">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-6">不懂美术没关系，<br/><span className="text-indigo-400">我们懂标准</span></h2>
                            <p className="text-slate-400 mb-6">
                                我们制定了严格的 SOP (标准作业程序)，确保每一份资产都符合工业标准。
                            </p>
                            <div className="space-y-4">
                                {[
                                    "四边面为主 (Quad-based) 拓扑结构",
                                    "无拉伸 UV 展开，利用率 > 70%",
                                    "标准英文命名规范 (无 Object001)",
                                    "平滑组 (Smoothing Groups) 完美烘焙"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle size={20} className="text-indigo-500" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-indigo-500/10 transition-shadow">
                                <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-green-400"/>
                                    <span className="font-mono text-sm text-slate-300">Solomon_Asset_Spec.json</span>
                                </div>
                                <div className="p-6 font-mono text-sm space-y-2">
                                    <div className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-500">Format</span>
                                        <span className="text-indigo-300">.FBX / .OBJ / .BLEND</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-500">Poly Count</span>
                                        <span className="text-indigo-300">Mobile (3k) / PC (15k)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-500">Rigging</span>
                                        <span className="text-indigo-300">Mixamo / Unreal Standard</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;