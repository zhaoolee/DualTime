'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// 禁用服务端渲染，避免 hydration 错误
const PomodoroTimer = dynamic(() => import('./components/PomodoroTimer'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center border-4 border-amber-400 shadow-2xl"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        <div className="text-amber-700 text-xs sm:text-sm font-bold">魔法加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-800 mb-1 sm:mb-2 drop-shadow-lg">00:00</div>
      </div>
    </div>
  )
})

const Clock = dynamic(() => import('./components/Clock'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-2xl"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        <div className="text-blue-700 text-xs sm:text-sm font-bold">时光加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-800 mb-1 sm:mb-2 drop-shadow-lg">12:00 AM</div>
        <div className="text-xs text-blue-600 font-semibold">加载中...</div>
      </div>
    </div>
  )
})

export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [particles, setParticles] = useState([])

  // 生成粒子数据（仅在客户端）
  useEffect(() => {
    const particleData = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3
    }))
    setParticles(particleData)
  }, [])

  useEffect(() => {
    // 更精确的下拉刷新防护 - 只在页面顶部且是下拉动作时阻止
    const preventPullToRefresh = (e) => {
      // 如果页面已经滚动到顶部，且是向下滑动，则阻止默认行为
      if (window.scrollY === 0 && e.touches && e.touches.length > 0) {
        // 检查是否是在表盘区域的触摸
        const touch = e.touches[0]
        const element = document.elementFromPoint(touch.clientX, touch.clientY)
        if (element && (element.closest('.timer-dial') || element.closest('.clock-dial'))) {
          e.preventDefault()
        }
      }
    }
    
    document.addEventListener('touchstart', preventPullToRefresh, { passive: false })
    document.addEventListener('touchmove', preventPullToRefresh, { passive: false })
    
    return () => {
      document.removeEventListener('touchstart', preventPullToRefresh)
      document.removeEventListener('touchmove', preventPullToRefresh)
    }
  }, [])

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // 切换全屏
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.log('全屏切换失败:', error)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden"
         style={{ 
           overscrollBehavior: 'none' 
         }}>
      
      {/* 简约金色光柱背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 基础暗色背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* 静态金色光柱 - 左上到右下 */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                transparent 0%,
                transparent 20%,
                rgba(255, 215, 0, 0.1) 30%,
                rgba(255, 193, 7, 0.3) 40%,
                rgba(255, 179, 0, 0.5) 50%,
                rgba(255, 193, 7, 0.3) 60%,
                rgba(255, 215, 0, 0.1) 70%,
                transparent 80%,
                transparent 100%
              )
            `,
            animation: 'breathe 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* 添加CSS动画样式 */}
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
      
      {/* 魔法粒子背景效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* 指南针链接 - 炉石风格 */}
      <Link
        href="/compass"
        className="fixed top-4 left-4 z-50 group"
                    title="玄乎儿方位"
      >
        <div className="relative bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-300 rounded-xl p-3 shadow-2xl border-2 border-amber-700 hover:border-amber-600 transform hover:scale-105">
          {/* 内部阴影效果 */}
          <div className="absolute inset-1 bg-gradient-to-br from-amber-200/30 to-transparent rounded-lg pointer-events-none"></div>
          {/* 宝石装饰 */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border border-emerald-700 shadow-lg"></div>
          <svg className="w-6 h-6 text-amber-900 relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 12l-4-4v8l4-4zm0 0l-4 4m4-4H8" />
          </svg>
        </div>
      </Link>

      {/* 全屏按钮 - 炉石风格 */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 group"
        title={isFullscreen ? "退出全屏" : "进入全屏"}
      >
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 transition-all duration-300 rounded-xl p-3 shadow-2xl border-2 border-blue-800 hover:border-blue-700 transform hover:scale-105">
          {/* 内部阴影效果 */}
          <div className="absolute inset-1 bg-gradient-to-br from-blue-200/30 to-transparent rounded-lg pointer-events-none"></div>
          {/* 宝石装饰 */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border border-purple-700 shadow-lg"></div>
          {isFullscreen ? (
            // 退出全屏图标
            <svg className="w-6 h-6 text-blue-100 relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
            </svg>
          ) : (
            // 进入全屏图标
            <svg className="w-6 h-6 text-blue-100 relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
            </svg>
          )}
        </div>
      </button>

      {/* 主容器 - 炉石传说卡牌风格 */}
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6">
        <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] max-w-[1200px] max-h-[85vh]">
          
          {/* 外层装饰边框 */}
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-3xl transform rotate-1"></div>
          <div className="absolute -inset-3 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl transform -rotate-0.5"></div>
          
          {/* 主卡牌容器 */}
          <div className="relative bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 rounded-2xl border-4 border-amber-600 overflow-hidden">
            
            {/* 卡牌内部装饰纹理 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-300/20 to-amber-400/30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.3)_0%,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(184,134,11,0.3)_0%,transparent_50%)]"></div>
            </div>
            
            
            {/* 角落装饰 */}
            {[
              { position: 'top-2 left-2', color: 'from-ruby-400 to-ruby-600' },
              { position: 'top-2 right-2', color: 'from-sapphire-400 to-sapphire-600' },
              { position: 'bottom-2 left-2', color: 'from-amethyst-400 to-amethyst-600' },
              { position: 'bottom-2 right-2', color: 'from-topaz-400 to-topaz-600' }
            ].map((gem, index) => (
              <div key={index} className={`absolute ${gem.position} w-4 h-4 bg-gradient-to-br ${gem.color} rounded-full border border-amber-700 z-10`}>
                <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </div>
            ))}
            
            {/* 内容区域 */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8">
              
              {/* 始终保持横向布局 */}
              <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center h-full">
                
                <div className="flex-1 min-w-0 flex flex-col justify-center">

                  <PomodoroTimer />
                </div>
                
                {/* 分隔线 - 魔法风格 */}
                <div className="relative self-stretch min-h-[200px] max-h-[80%] flex items-center">
                  <div className="w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent h-full rounded-full shadow-lg"></div>
                  {/* 中央装饰宝石 */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-full border-2 border-amber-600 shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-amber-100/50 to-transparent rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col justify-center">

                  <Clock />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
