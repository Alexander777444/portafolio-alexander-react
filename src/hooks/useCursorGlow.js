import { useEffect, useState } from 'react'

export function useCursorGlow(containerRef) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) {
      return undefined
    }

    let rafId = null

    const updateGlow = (event) => {
      if (rafId !== null) {
        return
      }

      rafId = window.requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100

        element.style.setProperty('--x', `${x.toFixed(2)}%`)
        element.style.setProperty('--y', `${y.toFixed(2)}%`)
        rafId = null
      })
    }

    const handleEnter = () => setIsActive(true)
    const handleLeave = () => {
      setIsActive(false)
      element.style.setProperty('--x', '50%')
      element.style.setProperty('--y', '50%')
    }

    element.addEventListener('mousemove', updateGlow)
    element.addEventListener('mouseenter', handleEnter)
    element.addEventListener('mouseleave', handleLeave)

    return () => {
      element.removeEventListener('mousemove', updateGlow)
      element.removeEventListener('mouseenter', handleEnter)
      element.removeEventListener('mouseleave', handleLeave)

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [containerRef])

  return isActive
}
