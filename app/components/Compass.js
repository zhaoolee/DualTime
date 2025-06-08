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
      setError('玄乎儿方位初始化失败')
      setPermissionState('denied')
    }
  }

  useEffect(() => {
    // 如果不需要请求权限（Android和旧版iOS），直接初始化
    if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
      if (typeof DeviceOrientationEvent === 'undefined') {
        setError('设备方向感应术法不可用')
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
      { text: '北', element: '水', animal: '玄武' },
      { text: '东北', element: '土', animal: '螣蛇' },
      { text: '东', element: '木', animal: '青龙' },
      { text: '东南', element: '木', animal: '朱雀' },
      { text: '南', element: '火', animal: '朱雀' },
      { text: '西南', element: '土', animal: '勾陈' },
      { text: '西', element: '金', animal: '白虎' },
      { text: '西北', element: '金', animal: '饕餮' }
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
        throw new Error('需要获得设备方向感应的魔法权限')
      }
    } catch (err) {
      setError(err.message)
      setPermissionState('denied')
    }
  }

  if (error) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="compass-dial w-48 h-48 sm:w-56 sm:h-56 relative">
          
          {/* 简化的外层边框 */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full"></div>
          
          {/* 主圆盘 */}
          <div className="absolute inset-2 bg-gradient-to-br from-red-50 to-red-100 rounded-full border-2 border-red-400 flex items-center justify-center shadow-lg">
            
            {/* 错误内容 */}
            <div className="text-red-700 text-sm font-medium text-center px-4">
              {error}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isInitialized && typeof DeviceOrientationEvent.requestPermission === 'function') {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="compass-dial w-48 h-48 sm:w-56 sm:h-56 relative">
          
          {/* 简化的外层边框 */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full"></div>
          
          {/* 主圆盘 */}
          <div className="absolute inset-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-lg">
            
            {/* 权限请求内容 */}
            <div className="flex flex-col items-center space-y-4 px-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-emerald-600 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="text-emerald-700 text-sm text-center font-medium">
                需要访问设备方向感应术法
              </div>
              <button
                onClick={handlePermissionRequest}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                允许魔法感应
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const directionInfo = getDirectionInfo(heading)

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="compass-dial w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 relative">
        
        {/* 简化的外层边框 - 统一绿色主题 */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full shadow-2xl"></div>
        
        {/* 主圆盘 */}
        <div className="absolute inset-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full border-4 border-emerald-500 shadow-xl overflow-hidden">
          
          {/* 简化的内部纹理 */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 rounded-full"></div>
          
          {/* 八个方位的装饰点 - 统一金色 */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <div
               key={angle}
               className="absolute w-2.5 h-2.5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full border border-amber-600 shadow-md"
               style={{
                 top: '50%',
                 left: '50%',
                 transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-90px)`
               }}
             />
          ))}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* 指南针刻度盘 */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                   style={{ transform: `rotate(${-heading}deg)` }}>
                <div className="w-full h-full rounded-full flex items-center justify-center relative">
                  
                  {/* 北方指针 - 红色 */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-2.5 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-lg"></div>
                    <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-red-700 shadow-lg -mt-1"></div>
                  </div>
                  
                  {/* 南方指针 - 蓝色 */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center">
                    <div className="w-1.5 h-10 bg-gradient-to-t from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
                  </div>
                  
                  {/* 东西方指针 - 绿色 */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2">
                    <div className="h-1.5 w-10 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full shadow-lg"></div>
                  </div>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <div className="h-1.5 w-10 bg-gradient-to-l from-emerald-400 to-emerald-600 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* 中央装饰 - 金色 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full border-2 border-amber-600 shadow-lg">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 方位文字 - 统一样式 */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">北</div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">南</div>
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">西</div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">东</div>
      </div>
      
      {/* 信息显示区域 - 简化样式 */}
      <div className="bg-white rounded-xl border-2 border-emerald-300 p-4 shadow-lg">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"></div>
            <div className="text-xl font-bold text-emerald-700">
              {Math.round(heading)}° {directionInfo.text}
            </div>
            <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"></div>
          </div>
          <div className="space-y-1 text-sm">
            <div className="text-emerald-600">
              五行元素：<span className="font-bold text-emerald-700">{directionInfo.element}</span>
            </div>
            <div className="text-emerald-600">
              守护神兽：<span className="font-bold text-emerald-700">{directionInfo.animal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 