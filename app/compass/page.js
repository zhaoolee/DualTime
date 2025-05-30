'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Compass = dynamic(() => import('../components/Compass'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gray-100 rounded-full flex items-center justify-center"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        <div className="text-gray-500 text-xs sm:text-sm">加载中...</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">0°</div>
        <div className="text-xs text-gray-500">加载中...</div>
      </div>
    </div>
  )
})

export default function CompassPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center p-1 sm:p-2 lg:p-4 xl:p-6 relative"
         style={{ overscrollBehavior: 'none' }}>
      
      {/* 返回按钮 */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl border border-gray-200/50"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      {/* 全屏按钮 */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl border border-gray-200/50"
        title={isFullscreen ? "退出全屏" : "进入全屏"}
      >
        {isFullscreen ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
          </svg>
        )}
      </button>

      {/* 主要内容区域 */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[1200px] p-4">
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-center select-none">
            指南针
          </h1>
          <Compass />
        </div>
      </div>
    </div>
  )
} 