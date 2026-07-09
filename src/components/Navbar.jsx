import { useNavbar } from '../hooks/useNavbar'

function Navbar() {
  const { scrolled, menuOpen, activeSection, toggleMenu, closeMenu } = useNavbar()

  return (
    <nav id="navbar" className={scrolled ? 'navbar scrolled' : 'navbar'} aria-label="Navegación principal">
      <a href="#inicio" className="nav-logo">
        <span className="icon icon--laptop-code icon--nav" aria-hidden="true"></span>
        <span>AB</span>
      </a>

      <ul className={menuOpen ? 'nav-links abierto' : 'nav-links'} id="nav-links">
        <li><a href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'activo' : ''} onClick={closeMenu}>Sobre mí</a></li>
        <li><a href="#tecnologias" className={activeSection === 'tecnologias' ? 'activo' : ''} onClick={closeMenu}>Tecnologías</a></li>
        <li><a href="#proyectos" className={activeSection === 'proyectos' ? 'activo' : ''} onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#formacion" className={activeSection === 'formacion' ? 'activo' : ''} onClick={closeMenu}>Formación</a></li>
        <li><a href="#extra" className={activeSection === 'extra' ? 'activo' : ''} onClick={closeMenu}>Extra</a></li>
      </ul>

      <div className="nav-social">
        <a href="https://github.com/Alexander777444" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <span className="icon icon--github icon--md" aria-hidden="true"></span>
        </a>
        <a href="https://www.linkedin.com/in/enrique-alexander-bolanos-gutierrez-79b83037a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <span className="icon icon--linkedin icon--md" aria-hidden="true"></span>
        </a>
      </div>

      <button className="nav-burger" id="navBurger" type="button" aria-label="Abrir menú" aria-expanded={menuOpen} aria-controls="nav-links" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
export default Navbar