import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Projects.module.css'

function ProjectModal({ project, closing, onClose }) {
  const dialogRef = useRef(null)
  const [imgIndex, setImgIndex] = useState(0)
  const { title, subtitle, description, highlights, tags, demoUrl, codeUrl, images } = project
  const hasMultiple = images.length > 1

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const focusable = dialog.querySelectorAll('button, a[href]')
    focusable[0]?.focus()

    function trapFocus(event) {
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    dialog.addEventListener('keydown', trapFocus)
    return () => dialog.removeEventListener('keydown', trapFocus)
  }, [])

  function prevImage() {
    setImgIndex(index => (index - 1 + images.length) % images.length)
  }

  function nextImage() {
    setImgIndex(index => (index + 1) % images.length)
  }

  return createPortal(
    <div
      className={`${styles.modalBackdrop} ${closing ? styles.modalClosing : ''}`}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className={styles.modalDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={event => event.stopPropagation()}
      >
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close">
          ✕
        </button>

        {images.length > 0 && (
          <div className={styles.modalImgWrap}>
            <img src={images[imgIndex]} alt="" className={styles.modalImg} />
            {hasMultiple && (
              <>
                <button type="button" className={`${styles.modalArrow} ${styles.modalArrowLeft}`} onClick={prevImage} aria-label="Previous image">‹</button>
                <button type="button" className={`${styles.modalArrow} ${styles.modalArrowRight}`} onClick={nextImage} aria-label="Next image">›</button>
                <div className={styles.modalDots}>
                  {images.map((_, index) => (
                    <span key={index} className={`${styles.modalDot} ${index === imgIndex ? styles.modalDotActive : ''}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className={styles.modalBody}>
          <h3 id="project-modal-title" className={styles.modalTitle}>{title}</h3>
          {subtitle && <p className={styles.modalSub}>{subtitle}</p>}
          <p className={styles.modalDesc}>{description}</p>

          {highlights?.length > 0 && (
            <ul className={styles.modalHighlights}>
              {highlights.map((point, index) => (
                <li key={`${project.id}-h-${index}`}>{point}</li>
              ))}
            </ul>
          )}

          <div className={styles.projectTags}>
            {tags.map(tag => (
              <span key={`${project.id}-${tag}`} className={styles.projectChip}>{tag}</span>
            ))}
          </div>

          {(demoUrl || codeUrl) && (
            <div className={styles.projectLinks}>
              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primario">
                  Live Demo
                </a>
              )}
              {codeUrl && (
                <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
