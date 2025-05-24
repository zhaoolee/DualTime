'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// 禁用服务端渲染，避免 hydration 错误
const PomodoroTimer = dynamic(() => import('./components/PomodoroTimer'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gray-100 rounded-full flex items-center justify-center"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        <div className="text-gray-500 text-xs sm:text-sm">加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">00:00</div>
      </div>
    </div>
  )
})

const Clock = dynamic(() => import('./components/Clock'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gray-100 rounded-full flex items-center justify-center"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        <div className="text-gray-500 text-xs sm:text-sm">加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">12:00 AM</div>
        <div className="text-xs text-gray-500">加载中...</div>
      </div>
    </div>
  )
})

export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false)

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-1 sm:p-2 lg:p-4 xl:p-6 relative"
         style={{ overscrollBehavior: 'none' }}>
      
      {/* 全屏按钮 */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl border border-gray-200/50"
        title={isFullscreen ? "退出全屏" : "进入全屏"}
      >
        {isFullscreen ? (
          // 退出全屏图标
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
          </svg>
        ) : (
          // 进入全屏图标
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
          </svg>
        )}
      </button>

      {/* 响应式容器 - 移动端占更多宽度，高度不超过页面高度的80% */}
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl p-2 sm:p-3 lg:p-6 xl:p-8 w-[95%] sm:w-[90%] lg:w-[80%] max-w-[1200px] max-h-[80vh] overflow-hidden">
        
        {/* 始终保持横向布局 */}
        <div className="flex flex-row gap-2 sm:gap-3 lg:gap-6 xl:gap-8 items-center justify-center h-full">
          
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h2 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3 xl:mb-4 text-center select-none">番茄钟</h2>
            <PomodoroTimer />
          </div>
          
          {/* 分隔线 - 高度自适应 */}
          <div className="w-px bg-gray-200 self-stretch min-h-[200px] max-h-[80%]"></div>
          
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h2 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3 xl:mb-4 text-center select-none">时钟</h2>
            <Clock />
          </div>
          
        </div>
      </div>
    </div>
  )
}
