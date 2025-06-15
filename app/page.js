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
  const [isLandscape, setIsLandscape] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [showLandscapeHint, setShowLandscapeHint] = useState(false)
  const [hasUserDismissedHint, setHasUserDismissedHint] = useState(false)

  // 检测屏幕方向和尺寸
  useEffect(() => {
    const updateScreenInfo = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        const height = window.innerHeight
        setScreenSize({ width, height })
        
        // 判断是否为横屏：宽度大于高度且是移动设备尺寸
        const isMobile = width <= 1024 // 通常认为1024px以下为移动设备
        const isLandscapeOrientation = width > height
        setIsLandscape(isMobile && isLandscapeOrientation)
        
        // 判断是否显示横屏提醒
        // 当宽度小于768px且是竖屏时，显示提醒（除非用户已关闭）
        const shouldShowHint = width < 768 && height > width && !hasUserDismissedHint
        setShowLandscapeHint(shouldShowHint)
      }
    }

    updateScreenInfo()
    window.addEventListener('resize', updateScreenInfo)
    window.addEventListener('orientationchange', () => {
      // 延迟一点时间等待方向变化完成
      setTimeout(updateScreenInfo, 200)
    })

    return () => {
      window.removeEventListener('resize', updateScreenInfo)
      window.removeEventListener('orientationchange', updateScreenInfo)
    }
  }, [hasUserDismissedHint])

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

  // 动态计算容器样式
  const getContainerStyles = () => {
    if (isLandscape) {
      return {
        // 横屏时调整高度和间距
        maxHeight: '98vh', // 增加到98vh，几乎占满整个屏幕
        padding: '0.25rem'
      }
    }
    return {
      maxHeight: '85vh',
      padding: '0.5rem 1rem'
    }
  }

  // 动态计算内容区域布局
  const getContentLayoutClasses = () => {
    if (isLandscape) {
      // 横屏时使用更紧凑的布局
      return "flex flex-row gap-2 sm:gap-4 items-center justify-center h-full"
    }
    return "flex flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center h-full"
  }

  // 动态计算分隔线样式
  const getDividerStyles = () => {
    if (isLandscape) {
      return {
        minHeight: '120px',
        maxHeight: '60%'
      }
    }
    return {
      minHeight: '200px',
      maxHeight: '80%'
    }
  }

  // 关闭横屏提醒
  const dismissLandscapeHint = () => {
    setHasUserDismissedHint(true)
    setShowLandscapeHint(false)
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
        
        /* 横屏优化样式 */
        @media screen and (orientation: landscape) and (max-width: 1024px) {
          .landscape-optimized {
            /* 横屏时针对性优化 */
            font-size: 0.875rem !important;
          }
          
          .landscape-compact {
            padding: 0.25rem !important;
            gap: 0.5rem !important;
          }
        }
        
        /* 超小横屏优化（如 iPhone SE 横屏） */
        @media screen and (orientation: landscape) and (max-height: 450px) {
          .ultra-compact {
            font-size: 0.75rem !important;
            padding: 0.125rem !important;
          }
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
        className={`fixed z-50 group ${isLandscape ? 'top-2 left-2' : 'top-4 left-4'}`}
        title="玄乎儿方位"
      >
        <div className={`relative bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-300 rounded-xl shadow-2xl border-2 border-amber-700 hover:border-amber-600 transform hover:scale-105 ${isLandscape ? 'p-2' : 'p-3'}`}>
          {/* 内部阴影效果 */}
          <div className="absolute inset-1 bg-gradient-to-br from-amber-200/30 to-transparent rounded-lg pointer-events-none"></div>
          {/* 宝石装饰 */}
          <div className={`absolute -top-1 -right-1 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border border-emerald-700 shadow-lg ${isLandscape ? 'w-2 h-2' : 'w-3 h-3'}`}>
            <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
          </div>
          <svg className={`text-amber-900 relative z-10 drop-shadow-sm ${isLandscape ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 12l-4-4v8l4-4zm0 0l-4 4m4-4H8" />
          </svg>
        </div>
      </Link>

      {/* 全屏按钮 - 炉石风格 */}
      <button
        onClick={toggleFullscreen}
        className={`fixed z-50 group ${isLandscape ? 'top-2 right-2' : 'top-4 right-4'}`}
        title={isFullscreen ? "退出全屏" : "进入全屏"}
      >
        <div className={`relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 transition-all duration-300 rounded-xl shadow-2xl border-2 border-blue-800 hover:border-blue-700 transform hover:scale-105 ${isLandscape ? 'p-2' : 'p-3'}`}>
          {/* 内部阴影效果 */}
          <div className="absolute inset-1 bg-gradient-to-br from-blue-200/30 to-transparent rounded-lg pointer-events-none"></div>
          {/* 宝石装饰 */}
          <div className={`absolute -top-1 -right-1 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border border-purple-700 shadow-lg ${isLandscape ? 'w-2 h-2' : 'w-3 h-3'}`}>
            <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
          </div>
          {isFullscreen ? (
            // 退出全屏图标
            <svg className={`text-blue-100 relative z-10 drop-shadow-sm ${isLandscape ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
            </svg>
          ) : (
            // 进入全屏图标
            <svg className={`text-blue-100 relative z-10 drop-shadow-sm ${isLandscape ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
            </svg>
          )}
        </div>
      </button>

      {/* 横屏提醒 - 魔法卷轴风格 */}
      {showLandscapeHint && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60] animate-in fade-in duration-500">
          <div className="relative">
            {/* 背景光效 */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-emerald-500/30 to-emerald-600/20 rounded-2xl blur-xl scale-110"></div>
            
            {/* 主卡片 */}
            <div className="relative bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 rounded-2xl border-3 border-emerald-600 shadow-2xl max-w-sm mx-4 overflow-hidden">
              
              {/* 装饰纹理 */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-300/20 to-emerald-400/30"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3)_0%,transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.3)_0%,transparent_50%)]"></div>
              </div>
              
              {/* 角落宝石 */}
              {[
                { position: 'top-2 left-2', color: 'from-emerald-400 to-emerald-600' },
                { position: 'top-2 right-2', color: 'from-teal-400 to-teal-600' },
                { position: 'bottom-2 left-2', color: 'from-green-400 to-green-600' },
                { position: 'bottom-2 right-2', color: 'from-lime-400 to-lime-600' }
              ].map((gem, index) => (
                <div key={index} className={`absolute ${gem.position} w-3 h-3 bg-gradient-to-br ${gem.color} rounded-full border border-emerald-700 z-10`}>
                  <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                </div>
              ))}
              
              {/* 关闭按钮 */}
              <button
                onClick={dismissLandscapeHint}
                className="absolute top-3 right-3 z-20 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
                title="关闭提醒"
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* 内容区域 */}
              <div className="relative z-10 p-6 text-center">
                {/* 图标 */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l3 3m0 0l3-3m-3 3V3" />
                    </svg>
                  </div>
                </div>
                
                {/* 标题 */}
                <h3 className="text-lg font-bold text-emerald-800 mb-2 drop-shadow-sm">
                  🌟 横屏体验更佳
                </h3>
                
                {/* 描述 */}
                <p className="text-sm text-emerald-700 mb-4 leading-relaxed">
                  将设备横屏使用，可获得更大的表盘显示效果和更好的操作体验
                </p>
                
                {/* 操作提示 */}
                <div className="text-xs text-emerald-600 bg-emerald-50/50 rounded-lg px-3 py-2 border border-emerald-200">
                  💡 旋转设备至横屏模式即可体验
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 背景遮罩 */}
      {showLandscapeHint && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[59] animate-in fade-in duration-300"
          onClick={dismissLandscapeHint}
        />
      )}

      {/* 主容器 - 炉石传说卡牌风格 */}
      <div className={`min-h-screen flex items-center justify-center ${isLandscape ? 'landscape-compact p-1 sm:p-2' : 'p-2 sm:p-4 lg:p-6'}`}>
        <div 
          className={`relative w-[95%] sm:w-[90%] lg:w-[80%] max-w-[1200px] ${isLandscape && screenSize.height <= 450 ? 'ultra-compact' : ''}`}
          style={getContainerStyles()}
        >
          
          {/* 外层装饰边框 */}
          <div className={`absolute bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-3xl transform rotate-1 ${isLandscape ? '-inset-2' : '-inset-4'}`}></div>
          <div className={`absolute bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl transform -rotate-0.5 ${isLandscape ? '-inset-1.5' : '-inset-3'}`}></div>
          
          {/* 主卡牌容器 */}
          <div className={`relative bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 rounded-2xl overflow-hidden ${isLandscape ? 'border-2 border-amber-600' : 'border-4 border-amber-600'}`}>
            
            {/* 卡牌内部装饰纹理 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-300/20 to-amber-400/30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.3)_0%,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(184,134,11,0.3)_0%,transparent_50%)]"></div>
            </div>
            
            
            {/* 角落装饰 */}
            {[
              { position: isLandscape ? 'top-1 left-1' : 'top-2 left-2', color: 'from-ruby-400 to-ruby-600' },
              { position: isLandscape ? 'top-1 right-1' : 'top-2 right-2', color: 'from-sapphire-400 to-sapphire-600' },
              { position: isLandscape ? 'bottom-1 left-1' : 'bottom-2 left-2', color: 'from-amethyst-400 to-amethyst-600' },
              { position: isLandscape ? 'bottom-1 right-1' : 'bottom-2 right-2', color: 'from-topaz-400 to-topaz-600' }
            ].map((gem, index) => (
              <div key={index} className={`absolute ${gem.position} bg-gradient-to-br ${gem.color} rounded-full border border-amber-700 z-10 ${isLandscape ? 'w-3 h-3' : 'w-4 h-4'}`}>
                <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </div>
            ))}
            
            {/* 内容区域 */}
            <div className={`relative z-10 ${isLandscape ? 'p-2 sm:p-3' : 'p-4 sm:p-6 lg:p-8'}`}>
              
              {/* 始终保持横向布局 */}
              <div className={getContentLayoutClasses()}>
                
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <PomodoroTimer />
                </div>
                
                {/* 分隔线 - 魔法风格 */}
                <div className="relative self-stretch flex items-center" style={getDividerStyles()}>
                  <div className="w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent h-full rounded-full shadow-lg"></div>
                  {/* 中央装饰宝石 */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-full border-2 border-amber-600 shadow-lg ${isLandscape ? 'w-4 h-4' : 'w-6 h-6'}`}>
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
