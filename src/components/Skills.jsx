import { skills } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

function MarqueeRow({ items, directionClass, label }) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className={`marquee-row ${directionClass}`} aria-label={label}>
      <div className="marquee-track">
        {duplicatedItems.map((skill, index) => (
          <div
            key={`${skill.id}-${index}`}
            className="tech-chip"
            aria-label={skill.name}
            title={skill.name}
          >
            <img src={skill.svg} alt="" aria-hidden="true" className="tech-svg" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="tecnologias" className="seccion revelar" aria-labelledby="titulo-tecnologias">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-tecnologias">Tecnologías</h2>
        <div className="marquee-stack">
          <MarqueeRow items={skills.languages} directionClass="marquee-row--left" label="Lenguajes" />
          <MarqueeRow items={skills.tools} directionClass="marquee-row--right" label="Herramientas" />
        </div>
      </div>
    </section>
  )
}

export default Skills