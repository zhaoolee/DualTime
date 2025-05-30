'use client'

import { useState, useEffect } from 'react'

export default function Compass() {
  const [heading, setHeading] = useState(0)
  const [error, setError] = useState(null)
  const [permissionState, setPermissionState] = useState('prompt')
  const [isInitialized, setIsInitialized] = useState(false)

  const handleOrientation = (event) => {
    // For iOS devices - uses webkitCompassHeading
    if (event.webkitCompassHeading) {
      setHeading(event.webkitCompassHeading)
    }
    // For Android devices - calculate from alpha angle
    else if (event.alpha) {
      setHeading(360 - event.alpha)
    }
  }

  const initializeCompass = () => {
    try {
      window.addEventListener('deviceorientation', handleOrientation, true)
      setIsInitialized(true)
      setPermissionState('granted')
    } catch (err) {
      setError('初始化指南针失败')
      setPermissionState('denied')
    }
  }

  useEffect(() => {
    // 如果不需要请求权限（Android和旧版iOS），直接初始化
    if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
      if (typeof DeviceOrientationEvent === 'undefined') {
        setError('设备方向API不可用')
        return
      }
      initializeCompass()
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true)
    }
  }, [])

  const getDirectionInfo = (heading) => {
    const directions = [
      { text: '北', element: '水', animal: '玄武', color: 'text-blue-600' },
      { text: '东北', element: '土', animal: '螣蛇', color: 'text-yellow-700' },
      { text: '东', element: '木', animal: '青龙', color: 'text-green-600' },
      { text: '东南', element: '木', animal: '朱雀', color: 'text-red-600' },
      { text: '南', element: '火', animal: '朱雀', color: 'text-red-600' },
      { text: '西南', element: '土', animal: '勾陈', color: 'text-yellow-700' },
      { text: '西', element: '金', animal: '白虎', color: 'text-gray-600' },
      { text: '西北', element: '金', animal: '饕餮', color: 'text-gray-600' }
    ]
    const index = Math.round(heading / 45) % 8
    return directions[index]
  }

  const handlePermissionRequest = async () => {
    try {
      // 直接在点击事件中请求权限
      const permission = await DeviceOrientationEvent.requestPermission()
      if (permission === 'granted') {
        initializeCompass()
      } else {
        throw new Error('需要访问设备方向的权限')
      }
    } catch (err) {
      setError(err.message)
      setPermissionState('denied')
    }
  }

  if (error) {
    return (
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gray-100 rounded-full flex items-center justify-center p-4 text-center"
             style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
          <div className="text-gray-500 text-xs sm:text-sm">{error}</div>
        </div>
      </div>
    )
  }

  if (!isInitialized && typeof DeviceOrientationEvent.requestPermission === 'function') {
    return (
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <div 
          className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-gray-100 rounded-full flex items-center justify-center p-4 text-center"
          style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}
        >
          <div className="flex flex-col items-center space-y-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <div className="text-gray-500 text-xs sm:text-sm text-center mb-2">
              需要访问设备方向
            </div>
            <button
              onClick={handlePermissionRequest}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              允许访问
            </button>
          </div>
        </div>
      </div>
    )
  }

  const directionInfo = getDirectionInfo(heading)

  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="compass-dial w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] bg-white rounded-full relative shadow-xl"
           style={{ maxWidth: 'min(40vw, 50vh)', maxHeight: 'min(40vw, 50vh)' }}>
        {/* 背景图案 - 八卦纹 */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-100 bg-gradient-to-br from-gray-50 to-white"
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L50 0 A50 50 0 0 1 100 50 Z' fill='%23f3f4f6'/%3E%3Cpath d='M50 50 L100 50 A50 50 0 0 1 50 100 Z' fill='%23e5e7eb'/%3E%3Cpath d='M50 50 L50 100 A50 50 0 0 1 0 50 Z' fill='%23f3f4f6'/%3E%3Cpath d='M50 50 L0 50 A50 50 0 0 1 50 0 Z' fill='%23e5e7eb'/%3E%3C/svg%3E\")" }}>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* 方位标记 */}
            <div className="absolute inset-0 flex items-center justify-center"
                 style={{ transform: `rotate(${-heading}deg)` }}>
              <div className="w-full h-full border-4 border-gray-200 rounded-full flex items-center justify-center">
                {/* 北方 - 红色 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-red-500"></div>
                {/* 其他方位 - 灰色 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-gray-300"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-6 bg-gray-300"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1 w-6 bg-gray-300"></div>
                
                {/* 八卦方位文字 */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-full text-sm font-bold text-red-600">北</div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-full text-sm font-bold text-blue-600">南</div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-full text-sm font-bold text-green-600">西</div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-full text-sm font-bold text-yellow-600">东</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className={`text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 ${directionInfo.color}`}>
          {Math.round(heading)}° {directionInfo.text}
        </div>
        <div className="text-sm space-y-1">
          <div className="text-gray-600">
            五行：<span className={directionInfo.color}>{directionInfo.element}</span>
          </div>
          <div className="text-gray-600">
            神兽：<span className={directionInfo.color}>{directionInfo.animal}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 