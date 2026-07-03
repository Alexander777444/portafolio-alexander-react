import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" aria-label="Navegación principal">

    <a href="#inicio" className="nav-logo">
      <span className="icon icon--laptop-code icon--nav" aria-hidden="true"></span>
      <span>AB</span>
    </a>

    <ul className="nav-links" id="nav-links">
      <li><a href="#sobre-mi">Sobre mí</a></li>
      <li><a href="#tecnologias">Tecnologías</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#formacion">Formación</a></li>
      <li><a href="#extra">Extra</a></li>
    </ul>

    <div className="nav-social">
      <a href="https://github.com/Alexander777444" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <span className="icon icon--github icon--md" aria-hidden="true"></span>
      </a>
      <a href="https://www.linkedin.com/in/enrique-alexander-bolanos-gutierrez-79b83037a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <span className="icon icon--linkedin icon--md" aria-hidden="true"></span>
      </a>
    </div>

    <button className="nav-burger" id="navBurger" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-links">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  )
}
export default Navbar