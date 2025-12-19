// src/pages/CasesPage.jsx
import React, { useState } from 'react';
// 1. 修复：所有图标必须在这里一次性引入，不能写在文件底部
import { ArrowLeft, Loader2, X, Grid, Box, FileText, Tags } from 'lucide-react';
import { casesData } from '../data/casesData';

const CasesPage = ({ onNavigate }) => {
    const [filter, setFilter] = useState('all');
    const [selectedCase, setSelectedCase] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    // 控制是否显示线框图的状态
    const [isWireframe, setIsWireframe] = useState(false);

    // 筛选逻辑
    const filteredCases = filter === 'all' 
        ? casesData 
        : casesData.filter(item => item.category === filter);

    // 模拟加载更多
    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setIsLoadingMore(false);
            alert("已加载全部历史作品 (演示功能)");
        }, 1500);
    };

    // 打开详情页时的处理函数 (同时重置线框视图状态)
    const handleOpenCase = (item) => {
        setSelectedCase(item);
        setIsWireframe(false); // 每次打开新案例时，默认显示渲染图
    };

    // 辅助函数：根据颜色名称返回对应的 Tailwind 类
    const getTagColors = (colorName) => {
        const colors = {
            brand: "bg-sky-500/20 text-sky-400 border-sky-500/30",
            "neon-purple": "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
            emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
            blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        };
        return colors[colorName] || colors['brand'];
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12 animate-in fade-in duration-500">
            
            {/* 顶部标题区 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <button 
                    onClick={() => onNavigate('home')}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
                >
                    <div className="p-1 rounded bg-slate-800 border border-slate-700 group-hover:bg-slate-700">
                        <ArrowLeft size={16} />
                    </div>
                    <span>返回首页</span>
                </button>

                <div className="relative z-10">
                    <h1 className="text-4xl font-black text-white mb-4">作品画廊</h1>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        探索 Solomon AI 与独立开发者合作创造的数字资产。点击下方卡片查看细节。
                    </p>
                    
                    {/* 筛选按钮组 */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {[
                            { id: 'all', label: '全部作品' },
                            { id: 'character', label: '角色模型' },
                            { id: 'environment', label: '环境资产' },
                            { id: 'prop', label: '道具/载具' }
                        ].map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setFilter(btn.id)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                                    filter === btn.id 
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                                    : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white'
                                }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 核心画廊区域 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCases.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => handleOpenCase(item)} 
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 cursor-pointer group hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getTagColors(item.tagColor)}`}>
                                        {item.tagType}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{item.tris}</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                                <div className="flex gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs text-slate-500 border border-slate-700 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 加载更多按钮 */}
                <div className="text-center mt-16">
                    <button 
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="px-8 py-3 border border-slate-700 text-slate-400 rounded-lg hover:border-indigo-500 hover:text-white transition-all flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoadingMore ? (
                            <>
                                <Loader2 className="animate-spin w-4 h-4" />
                                正在从服务器获取...
                            </>
                        ) : (
                            "加载更多历史作品"
                        )}
                    </button>
                </div>
            </div>

            {/* 详情弹窗 (Modal) */}
            {selectedCase && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300 select-none">
                    <div 
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedCase(null)}
                    ></div>
                    
                    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden relative z-10 shadow-2xl shadow-indigo-500/10 flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
                        
                        {/* 关闭按钮 */}
                        <button 
                            onClick={() => setSelectedCase(null)}
                            className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-red-500/90 text-slate-300 hover:text-white rounded-full p-2 transition-all backdrop-blur-md border border-white/5 hover:border-red-500/30 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* --- 左侧：展示区 --- */}
                        <div className="w-full md:w-2/3 relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden group p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-[#050a14]">
                            
                            {/* --- 切换按钮 --- */}
                            {selectedCase.wireframe && (
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
                                    <button
                                        onClick={() => setIsWireframe(false)}
                                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                                            !isWireframe 
                                            ? 'bg-indigo-500/90 text-white shadow-md' 
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        <Box size={14} /> 渲染
                                    </button>
                                    <button
                                        onClick={() => setIsWireframe(true)}
                                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                                            isWireframe 
                                            ? 'bg-indigo-500/90 text-white shadow-md' 
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        <Grid size={14} /> 拓扑
                                    </button>
                                </div>
                            )}

                            {/* --- 核心展示逻辑 --- */}
                            {isWireframe ? (
                                // 1. 拓扑图模式
                                <div className="w-full h-full relative animate-in fade-in duration-500 flex items-center justify-center rounded-xl overflow-hidden border border-white/5 bg-[#111]/50 backdrop-blur-sm">
                                    <img 
                                        src={selectedCase.wireframe} 
                                        alt="Wireframe Topology" 
                                        className="w-full h-full object-contain opacity-90" 
                                    />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-indigo-200 text-xs px-4 py-1.5 rounded-full border border-indigo-500/30 font-mono">
                                        Wireframe View ({selectedCase.tris})
                                    </div>
                                </div>
                            ) : (
                                // 2. 正常模式 (3D 或 图片)
                                selectedCase.modelPath ? (
                                    <>
                                        <model-viewer
                                            src={selectedCase.modelPath}
                                            alt={selectedCase.title}
                                            auto-rotate
                                            camera-controls
                                            shadow-intensity="2" 
                                            environment-image="neutral"
                                            exposure="1.1" 
                                            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                                            class="animate-in fade-in duration-500 drop-shadow-2xl"
                                        >
                                            <div slot="progress-bar" className="absolute top-0 left-0 w-full h-0.5 bg-slate-800">
                                                <div className="h-full bg-indigo-500 transition-all duration-300 logic-bar"></div>
                                            </div>
                                        </model-viewer>
                                        
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white/80 text-xs px-4 py-1.5 rounded-full pointer-events-none backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            🖐️ 拖拽旋转 • 滚轮缩放
                                        </div>
                                    </>
                                ) : (
                                    <img 
                                        src={selectedCase.image} 
                                        alt="Detail" 
                                        className="w-full h-full object-contain rounded-xl border border-white/5" 
                                    />
                                )
                            )}
                        </div>

                        {/* 右侧：信息区 */}
                        <div className="w-full md:w-1/3 p-10 flex flex-col bg-slate-900/95 border-l border-slate-700/50 overflow-y-auto">
                            <div className="mb-auto">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h2 className="text-3xl font-black text-white leading-tight">{selectedCase.title}</h2>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-8 items-center">
                                     <span className="inline-flex items-center bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/20 font-mono">
                                        <Box size={12} className="mr-1.5"/> {selectedCase.tris}
                                    </span>
                                    {selectedCase.modelPath && (
                                         <span className="inline-flex items-center bg-emerald-500/10 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/20">
                                            <Box size={12} className="mr-1.5" /> 3D Interactive
                                        </span>
                                    )}
                                </div>
                                
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <FileText size={14}/> Asset Description
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed pl-4 border-l-2 border-indigo-500/50 py-1">
                                            {selectedCase.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <Tags size={14}/> Technical Specs
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCase.tags.map((tag, idx) => (
                                                <span key={idx} className="text-xs text-slate-400 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-6 border-t border-slate-800/50">
                                <div className="bg-slate-800/40 rounded-xl p-4 text-center border border-slate-700/30 backdrop-blur-sm">
                                    <p className="text-[11px] text-slate-400 font-medium">
                                        此资产为 <span className="text-indigo-400 font-bold">Solomon AI</span> 独家技术展示标准。<br/>
                                        商业合作请联系我们获取完整交付方案。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CasesPage;