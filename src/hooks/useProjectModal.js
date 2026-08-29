import { useState, useCallback, useEffect, useRef } from 'react'

const TRANSITION_MS = 220

export function useProjectModal() {
  const [activeProject, setActiveProject] = useState(null)
  const [closing, setClosing] = useState(false)
  const triggerRef = useRef(null)
  const timeoutRef = useRef(null)

  const openModal = useCallback((project, triggerEl) => {
    clearTimeout(timeoutRef.current)
    triggerRef.current = triggerEl
    setClosing(false)
    setActiveProject(project)
  }, [])

  const closeModal = useCallback(() => {
    setClosing(true)
    timeoutRef.current = setTimeout(() => {
      setActiveProject(null)
      setClosing(false)
      triggerRef.current?.focus()
    }, TRANSITION_MS)
  }, [])

  useEffect(() => {
    if (!activeProject) return

    function onKeyDown(event) {
      if (event.key === 'Escape') closeModal()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProject, closeModal])

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return { activeProject, closing, openModal, closeModal }
}
