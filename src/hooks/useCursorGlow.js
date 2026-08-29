import { useCallback, useEffect, useRef, useState } from 'react'

let idCounter = 0
const SPAWN_INTERVAL = 90 // ms mínimo entre manchas nuevas
const LIFETIME = 1600 // ms que dura cada mancha antes de desaparecer
const MAX_BLOBS = 24

export function useCursorGlow() {
  const [blobs, setBlobs] = useState([])
  const containerRef = useRef(null)
  const lastSpawn = useRef(0)
  const canAnimateRef = useRef(null)
  const timeouts = useRef(new Set())

  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout)
      timeouts.current.clear()
    }
  }, [])

  const handleMove = useCallback((e) => {
    if (canAnimateRef.current === null) {
      canAnimateRef.current =
        window.matchMedia('(pointer: fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    if (!canAnimateRef.current) return

    const now = performance.now()
    if (now - lastSpawn.current < SPAWN_INTERVAL) return
    lastSpawn.current = now

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const id = idCounter++
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size = 70 + Math.random() * 60

    setBlobs(prev => {
      const next = [...prev, { id, x, y, size }]
      return next.length > MAX_BLOBS ? next.slice(next.length - MAX_BLOBS) : next
    })

    const t = setTimeout(() => {
      setBlobs(prev => prev.filter(b => b.id !== id))
      timeouts.current.delete(t)
    }, LIFETIME)
    timeouts.current.add(t)
  }, [])

  return { containerRef, blobs, handleMove }
}