import styles from './Hero.module.css'
import { useRef } from 'react'
import { useCursorGlow } from '../hooks/useCursorGlow'

function Hero() {
  const heroRef = useRef(null)
  const isCursorActive = useCursorGlow(heroRef)

  return (
  <header ref={heroRef} className={styles.hero} id="inicio">
    <div className={`${styles.cursorGlow} ${isCursorActive ? styles.isActive : ''}`} aria-hidden="true" />
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
          <a href="mailto:pichipi2015@gmail.com" className="btn btn-primario">
            <span className="icon icon--envelope icon--sm" aria-hidden="true"></span>
            pichipi2015@gmail.com
          </a>
          <a href="/Assets/CV_VERSION1.2.pdf" download="CV_Alexander_Bolanos.pdf" className="btn btn-contorno" id="cvBtn" aria-label="Download résumé (PDF)">
            <span className="icon icon--file-pdf icon--sm" aria-hidden="true"></span>
            Descargar CV
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
