import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className="pie">
    <div className={styles.pieInterior}>
      <p className={styles.pieNombre}>Enrique Alexander Bolaños Gutiérrez</p>
      <div className={styles.pieLinks}>
        <a href="mailto:pichipi2015@gmail.com">pichipi2015@gmail.com</a>
        <a href="https://github.com/Alexander777444" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/enrique-alexander-bolanos-gutierrez-79b83037a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p className={styles.pieCopia}>Built with dedication · {new Date().getFullYear()}</p>
    </div>
  </footer>

  )
}
export default Footer