import styles from './Hero.module.css'
import { useCursorGlow } from '../hooks/useCursorGlow'

function Hero() {
  const { containerRef, blobs, handleMove } = useCursorGlow()

  return (
  <header ref={containerRef} className={styles.hero} id="inicio" onMouseMove={handleMove}>
    <span className={styles.cursorTrailLayer} aria-hidden="true">
      {blobs.map(b => (
        <span
          key={b.id}
          className={styles.cursorBlob}
          style={{
            left: `${b.x}px`,
            top: `${b.y}px`,
            width: `${b.size}px`,
            height: `${b.size}px`,
          }}
        />
      ))}
    </span>
    <div className={styles.heroContent}>

      <div className={styles.heroInfo}>
        <span className={styles.availableBadge}>
          <span className={styles.availableDot} aria-hidden="true"></span>
          Available for Internships
        </span>
        <p className={styles.heroTag}>Software Developer</p>
        <h1 className={styles.heroNombre}>
          Hi, I'm <span className={styles.heroNombreHighlight}>Alexander Bolaños</span>.
          <br />
          I build web interfaces with React — and I'm expanding into full-stack.
        </h1>
        <p className={styles.heroUbicacion}>
          <span className="icon icon--location icon--sm" aria-hidden="true"></span>
          Guadalajara, México
        </p>
        <div className={styles.heroBotones}>
          <a href="#proyectos" className="btn btn-primario">
            <span className="icon icon--envelope icon--sm" aria-hidden="true"></span>
            View my Work
          </a>
          <a href="/Assets/CV_VERSION1.2.pdf" download="CV_Alexander_Bolanos.pdf" className="btn btn-contorno" id="cvBtn" aria-label="Download résumé (PDF)">
            <span className="icon icon--file-pdf icon--sm" aria-hidden="true"></span>
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.heroAvatar}>
        <img src="/Assets/avatarAlexander2.jpg" alt="Photo of Alexander Bolaños" id="avatarImg" />
        <div className={styles.avatarPlaceholder} id="avatarPlaceholder" aria-hidden="true">AB</div>
      </div>

      </div>

      <div className={styles.heroScrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </header>
  )
}

export default Hero
