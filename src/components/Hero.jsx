function Hero() {
    return (
        <header className="hero" id="inicio">
    <div className="hero-content">

      <div className="hero-info">
        <p className="hero-tag">Software Developer</p>
        <h2 className="hero-nombre">Hi, I'm <span className="hero-nombre-highlight"> Alexander Bolaños</span>, a passionate frontend developer. aspired to fullstack development.</h2>
        <p className="hero-ubicacion">
          <span className="icon icon--location icon--sm" aria-hidden="true"></span>
          Guadalajara, México
        </p>
        <div className="hero-botones">
          <a href="mailto:pichipi2015@gmail.com" className="btn btn-primario">
            <span className="icon icon--envelope icon--sm" aria-hidden="true"></span>
            pichipi2015@gmail.com
          </a>
          <a href="../Assets/CV_VERSION1.2.pdf" download="CV_Alexander_Bolanos.pdf" className="btn btn-contorno" id="cvBtn" aria-label="Descargar currículum en PDF">
            <span className="icon icon--file-pdf icon--sm" aria-hidden="true"></span>
            Descargar CV
          </a>
          <a href="https://github.com/Alexander777444" target="_blank" rel="noopener noreferrer" className="btn btn-icono" aria-label="GitHub">
            <span className="icon icon--github icon--md" aria-hidden="true"></span>
          </a>
          <a href="https://www.linkedin.com/in/enrique-alexander-bolanos-gutierrez-79b83037a/" target="_blank" rel="noopener noreferrer" className="btn btn-icono" aria-label="LinkedIn">
            <span className="icon icon--linkedin icon--md" aria-hidden="true"></span>
          </a>
        </div>
      </div>

      <div className="hero-avatar">
        <img src="../Assets/avatarAlexander.jpg" alt="Foto de Alexander Bolaños" id="avatarImg" />
        <div className="avatar-placeholder" id="avatarPlaceholder" aria-hidden="true">AB</div>
      </div>

    </div>

    <div className="hero-scroll-hint" aria-hidden="true">
      <span>scroll</span>
      <div className="scroll-line"></div>
    </div>
  </header>

    )

}

export default Hero