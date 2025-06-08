'use client'

import { useState, useEffect } from 'react'

export default function Compass() {
  const [heading, setHeading] = useState(0)
  const [error, setError] = useState(null)
  const [permissionState, setPermissionState] = useState('prompt')
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

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
      setError('天地磁场感应受阻，罗盘启动失败')
      setPermissionState('denied')
    }
  }

  useEffect(() => {
    // Set mounted flag to prevent hydration issues
    setIsMounted(true)
    
    // 如果不需要请求权限（Android和旧版iOS），直接初始化
    if (typeof window !== 'undefined' && typeof DeviceOrientationEvent !== 'undefined') {
      if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
        initializeCompass()
      }
    } else if (typeof window !== 'undefined') {
      setError('此处天机不显，方位感应术法不可用')
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('deviceorientation', handleOrientation, true)
      }
    }
  }, [])

  // Prevent rendering until component is mounted on client
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="compass-dial w-48 h-48 sm:w-56 sm:h-56 relative">
          {/* 简化的外层边框 */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full"></div>
          
          {/* 主圆盘 */}
          <div className="absolute inset-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-lg">
            <div className="text-emerald-700 text-sm font-medium text-center px-4">
              <div className="mb-2">🧭</div>
              <div>玄机罗盘启动中...</div>
              <div className="text-xs mt-1 opacity-80">正在感应天地磁场</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getDirectionInfo = (heading) => {
    const directions = [
      { text: '正北', element: '水', animal: '玄武', fortune: '主智慧与财运', desc: '坎位，水之源头，主事业发展' },
      { text: '东北', element: '土', animal: '螣蛇', fortune: '主学业与贵人', desc: '艮位，山之稳固，利读书求学' },
      { text: '正东', element: '木', animal: '青龙', fortune: '主健康与成长', desc: '震位，雷之生发，利身体康健' },
      { text: '东南', element: '木', animal: '勾陈', fortune: '主财富与姻缘', desc: '巽位，风之流动，利财源广进' },
      { text: '正南', element: '火', animal: '朱雀', fortune: '主名声与事业', desc: '离位，火之光明，利功名成就' },
      { text: '西南', element: '土', animal: '坤德', fortune: '主家庭与母爱', desc: '坤位，地之包容，利家宅安宁' },
      { text: '正西', element: '金', animal: '白虎', fortune: '主收获与决断', desc: '兑位，泽之收纳，利收成决策' },
      { text: '西北', element: '金', animal: '天狼', fortune: '主权威与领导', desc: '乾位，天之刚健，利权势地位' }
    ]
    const index = Math.round(heading / 45) % 8
    return directions[index]
  }

  const handlePermissionRequest = async () => {
    console.log('Permission request button clicked') // 调试用
    
    try {
      // 检查是否为HTTPS环境
      if (typeof window !== 'undefined' && location.protocol !== 'https:' && location.hostname !== 'localhost') {
        throw new Error('需要在HTTPS环境下使用指南针功能')
      }

      // 检查API是否可用
      if (typeof DeviceOrientationEvent === 'undefined') {
        throw new Error('设备方向API不可用')
      }

      if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
        throw new Error('当前设备不支持权限请求')
      }

      console.log('About to request permission...') // 调试用
      
      // 直接在点击事件中请求权限（必须同步调用）
      const permission = await DeviceOrientationEvent.requestPermission()
      
      console.log('Permission result:', permission) // 调试用
      
      if (permission === 'granted') {
        console.log('Permission granted, initializing compass...') // 调试用
        initializeCompass()
      } else {
        throw new Error(`权限被拒绝: ${permission}`)
      }
    } catch (err) {
      console.error('Permission request error:', err) // 调试用
      setError(`权限请求失败: ${err.message}`)
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
              <div className="mb-2">⚠️</div>
              <div className="font-bold">术法受阻</div>
              <div className="text-xs mt-2 opacity-90">{error}</div>
              <div className="text-xs mt-1 opacity-70">建议重新施法或换个吉时</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isInitialized && typeof window !== 'undefined' && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="compass-dial w-48 h-48 sm:w-56 sm:h-56 relative">
          
          {/* 简化的外层边框 */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full"></div>
          
          {/* 主圆盘 */}
          <div className="absolute inset-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-lg">
            
            {/* 权限请求内容 */}
            <div className="flex flex-col items-center space-y-3 px-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-emerald-600 shadow-md">
                <div className="text-white text-xl">🔮</div>
              </div>
              <div className="text-emerald-700 text-sm text-center font-bold">
                开启天地感应
              </div>
              <div className="text-emerald-600 text-xs text-center px-2">
                需要您的授权方可感应天地磁场，洞察方位玄机
              </div>
              <button
                onClick={handlePermissionRequest}
                onTouchEnd={handlePermissionRequest} // iOS Safari有时需要touchend
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                开启罗盘术法
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
      {/* 标题区域 */}
      {/* <div className="text-center mb-2">
        <div className="text-sm text-emerald-600">天地定位 · 八卦方位 · 五行感应</div>
      </div> */}

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
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">
          <div className="text-center">
            <div>正北</div>
            <div className="text-xs opacity-70">坎</div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">
          <div className="text-center">
            <div>正南</div>
            <div className="text-xs opacity-70">离</div>
          </div>
        </div>
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">
          <div className="text-center">
            <div>正西</div>
            <div className="text-xs opacity-70">兑</div>
          </div>
        </div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-base font-bold text-emerald-700 bg-white rounded-lg px-3 py-1.5 border-2 border-emerald-300 shadow-lg">
          <div className="text-center">
            <div>正东</div>
            <div className="text-xs opacity-70">震</div>
          </div>
        </div>
      </div>
      
      {/* 方位详情显示区域 */}
      <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl border-2 border-emerald-300 p-5 shadow-lg max-w-md">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"></div>
            <div className="text-xl font-bold text-emerald-800">
              {Math.round(heading)}° {directionInfo.text}
            </div>
            <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"></div>
          </div>
          
          <div className="bg-emerald-100 rounded-lg p-3 space-y-2">
            <div className="text-sm font-bold text-emerald-800 border-b border-emerald-300 pb-1">
              📍 当前方位解析
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-emerald-700">
                <span className="font-bold">五行：</span>{directionInfo.element}
              </div>
              <div className="text-emerald-700">
                <span className="font-bold">神兽：</span>{directionInfo.animal}
              </div>
            </div>
            <div className="text-xs text-emerald-600 pt-1">
              <div className="font-bold mb-1">🔮 运势指引：</div>
              <div>{directionInfo.fortune}</div>
            </div>
            <div className="text-xs text-emerald-600 bg-white rounded p-2 border border-emerald-200">
              <div className="font-bold mb-1">📜 风水解读：</div>
              <div>{directionInfo.desc}</div>
            </div>
          </div>

          {/* 实时状态指示 */}
          <div className="flex items-center justify-center space-x-2 text-xs text-emerald-600">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>罗盘运转正常 · 天地磁场稳定</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

    </div>
  )
} 