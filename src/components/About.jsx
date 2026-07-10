import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="sobre-mi" className="seccion revelar" aria-labelledby="titulo-sobre-mi">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-sobre-mi">About me</h2>
        <p className="sobre-texto">
        6th-semester Computer Science student at Universidad de Guadalajara, passionate about software development and the intersection of efficient code and user-centered design.
 
While my current strength and primary experience are focused on modern web development using the React ecosystem, I possess solid foundations in engineering, data structures, and algorithms. This allows me to adapt quickly, solve logical problems, and learn new technologies with ease, all while combining UI/UX design principles with strict web accessibility standards and responsive for mobiles.
 
Projects & Highlights:
 • Frontend Development with Impact (MiChangarro): Designed and implemented the complete UI/UX architecture for a small business support platform using React and CSS.
 • Commitment to Inclusivity (APPrender): Developer for an educational web platform, implementing accessible web standards to ensure an inclusive and fully responsive mobile experience.
 
Continuous Learning:
 • Full Stack Development Professional Certificate | IBM & Coursera (In progress - 20% completed).
 • Front-End Development Certificate | Fundación Carlos Slim (96 theoretical-practical hours).
 
Professional Goal:
 Currently seeking Internship opportunities focused on general software development. My goal is to add immediate value through my current knowledge while adapting to and mastering new tools within the organization's stack.
 
Areas of interest: Software Engineering, Web Development (Frontend / Full Stack), Python Development, and general software engineering.
        </p>
      </div>
    </section>
  )
}

export default About