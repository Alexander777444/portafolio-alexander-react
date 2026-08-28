import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

function ProjectTile({ project, onOpen }) {
  const btnRef = useRef(null)
  const { title, images } = project
  const hasLoop = images.length > 1
  const cover = images[0]
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (!hasLoop || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveImage(current => (current + 1) % images.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [hasLoop, images.length])

  return (
    <button
      ref={btnRef}
      type="button"
      className={styles.tile}
      onClick={() => onOpen(project, btnRef.current)}
      aria-haspopup="dialog"
    >
      <span className={styles.tileGlow} aria-hidden="true"></span>
      <span className={styles.tileGlowBlur} aria-hidden="true"></span>

      <span className={styles.tileImgWrap}>
        {cover ? (
          <span className={styles.tileImgTrack}>
            {images.map((src, index) => (
              <img
                key={`${project.id}-img-${index}`}
                src={src}
                alt=""
                className={`${styles.tileImg} ${index === activeImage ? styles.tileImgActive : ''}`}
                loading="lazy"
              />
            ))}
          </span>
        ) : (
          <span className={styles.tileImgPlaceholder} aria-hidden="true">
            {title.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className={styles.tileTitleOverlay}>{title}</span>
      </span>
    </button>
  )
}

export default ProjectTile
