import { skills } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Skills() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="tecnologias" className="seccion revelar" aria-labelledby="titulo-tecnologias">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-tecnologias">Tecnologías</h2>
        <div className="tech-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="tech-chip">
              <img
                src={skill.icon}
                alt={skill.name}
                className="tech-svg"
              />
              <span className="tech-nombre">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills