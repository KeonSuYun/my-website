// src/App.jsx
import React, { useState, useEffect } from 'react';

// 引入位于 pages 文件夹下的组件
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import CasesPage from './pages/CasesPage';

export default function App() {
    // 状态管理：'home' | 'contact' | 'cases'
    const [currentView, setCurrentView] = useState('home'); 

    // 每次切换页面时滚动到顶部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentView]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans selection:bg-indigo-500/30">
            <style>{`
                .glass-panel {
                    background: rgba(30, 41, 59, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .gradient-text {
                    background: linear-gradient(to right, #818cf8, #c084fc);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            {/* 顶部导航栏 (Global Navigation) */}
            <nav className="fixed w-full z-50 glass-panel border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo 区域：点击回首页 */}
                        <div 
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setCurrentView('home')}
                        >
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <span className="font-bold text-white">S</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">Solomon AI</span>
                        </div>
                        
                        {/* 菜单区域 */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#process" className="hover:text-indigo-400 transition-colors" onClick={() => setCurrentView('home')}>工作流</a>
                                
                                {/* ⚠️ 修改：使用 onClick 切换到 Cases 视图，而不是 href 跳转 */}
                                <button 
                                    onClick={() => setCurrentView('cases')}
                                    className={`hover:text-indigo-400 transition-colors ${currentView === 'cases' ? 'text-indigo-400 font-bold' : ''}`}
                                >
                                    作品画廊
                                </button>
                                
                                <a href="#standards" className="hover:text-indigo-400 transition-colors" onClick={() => setCurrentView('home')}>交付标准</a>
                                
                                <button 
                                    onClick={() => setCurrentView('contact')}
                                    className={`px-4 py-2 rounded-md font-medium transition-all ${
                                        currentView === 'contact' 
                                        ? 'bg-slate-800 text-indigo-400 border border-indigo-500/50' 
                                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20'
                                    }`}
                                >
                                    联系试稿
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 页面路由内容区 */}
            <main>
                {currentView === 'home' && (
                    <LandingPage onNavigate={setCurrentView} />
                )}
                {currentView === 'cases' && (
                    <CasesPage onNavigate={setCurrentView} />
                )}
                {currentView === 'contact' && (
                    <ContactPage onNavigate={setCurrentView} />
                )}
            </main>

            {/* 全局 Footer */}
            <footer className="bg-slate-950 border-t border-slate-800 py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-xs font-bold text-white">S</div>
                        <span className="font-bold text-slate-300">Solomon AI</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                        &copy; 2024 Solomon AI. Empowering Indie Developers.
                    </div>
                </div>
            </footer>
        </div>
    );
}