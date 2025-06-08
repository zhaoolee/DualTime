'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Compass = dynamic(() => import('../components/Compass'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center border-4 border-emerald-400 shadow-2xl"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        <div className="text-emerald-700 text-xs sm:text-sm font-bold">玄乎儿方位加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-emerald-800 mb-1 sm:mb-2 drop-shadow-lg">0°</div>
        <div className="text-xs text-emerald-600 font-semibold">探寻神秘方向...</div>
      </div>
    </div>
  )
})

export default function CompassPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [particles, setParticles] = useState([])

  // 生成魔法粒子数据
  useEffect(() => {
    const particleData = [...Array(25)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: 3 + Math.random() * 4
    }))
    setParticles(particleData)
  }, [])

  useEffect(() => {
    // 更精确的下拉刷新防护 - 只在页面顶部且是下拉动作时阻止
    const preventPullToRefresh = (e) => {
      if (window.scrollY === 0 && e.touches && e.touches.length > 0) {
        const touch = e.touches[0]
        const element = document.elementFromPoint(touch.clientX, touch.clientY)
        if (element && element.closest('.compass-dial')) {
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
           background: `
             radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 70%),
             linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #064e3b 100%)
           `,
           overscrollBehavior: 'none' 
         }}>
      
      {/* 魔法粒子背景效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-emerald-300 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
        {/* 额外的蓝色粒子 */}
        {particles.slice(0, 10).map((particle) => (
          <div
            key={`blue-${particle.id}`}
            className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full opacity-40 animate-ping"
            style={{
              left: `${(particle.left + 20) % 100}%`,
              top: `${(particle.top + 30) % 100}%`,
              animationDelay: `${particle.animationDelay + 1}s`,
              animationDuration: `${particle.animationDuration + 1}s`
            }}
          />
        ))}
      </div>

      {/* 返回按钮 - 炉石风格 */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 group"
        title="返回时空之屋"
      >
        <div className="relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-300 hover:via-emerald-400 hover:to-emerald-500 transition-all duration-300 rounded-xl p-3 shadow-2xl border-2 border-emerald-700 hover:border-emerald-600 transform hover:scale-105">
          {/* 内部阴影效果 */}
          <div className="absolute inset-1 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-lg pointer-events-none"></div>
          {/* 宝石装饰 */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border border-amber-700 shadow-lg"></div>
          <svg className="w-6 h-6 text-emerald-900 relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
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
            <svg className="w-6 h-6 text-blue-100 relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-blue-100 relative z-10 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
            </svg>
          )}
        </div>
      </button>

      {/* 主容器 - 炉石传说卡牌风格 */}
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6">
        <div className="relative w-[95%] sm:w-[90%] lg:w-[80%] max-w-[800px] max-h-[90vh]">
          
          {/* 外层装饰边框 */}
          <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl transform rotate-1"></div>
          <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl transform -rotate-0.5"></div>
          
          {/* 主卡牌容器 */}
          <div className="relative bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 rounded-2xl border-4 border-emerald-600 overflow-hidden">
            
            {/* 卡牌内部装饰纹理 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-300/20 to-emerald-400/30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.3)_0%,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(21,128,61,0.3)_0%,transparent_50%)]"></div>
            </div>
            
            {/* 角落装饰宝石 */}
            {[
              { position: 'top-2 left-2', color: 'from-ruby-400 to-ruby-600' },
              { position: 'top-2 right-2', color: 'from-sapphire-400 to-sapphire-600' },
              { position: 'bottom-2 left-2', color: 'from-amethyst-400 to-amethyst-600' },
              { position: 'bottom-2 right-2', color: 'from-topaz-400 to-topaz-600' }
            ].map((gem, index) => (
              <div key={index} className={`absolute ${gem.position} w-4 h-4 bg-gradient-to-br ${gem.color} rounded-full border border-emerald-700 z-10`}>
                <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </div>
            ))}
            
            {/* 顶部标题装饰 */}
            <div className="relative z-10 text-center pt-6 pb-4">
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center border-2 border-emerald-700 shadow-lg">
                  <div className="w-2 h-2 bg-emerald-200 rounded-full"></div>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 bg-clip-text text-transparent drop-shadow-lg">
                  玄乎儿方位
                </h1>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-2 border-blue-700 shadow-lg">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* 内容区域 - 增加上下边距为方位文字留空间 */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
              <Compass />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 