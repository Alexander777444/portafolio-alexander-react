import styles from './Skills.module.css'
import { skills } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Skills() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="tecnologias" className="seccion revelar" aria-labelledby="titulo-tecnologias">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-tecnologias">Tecnologías</h2>
        <div className={styles.techGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.techChip}>
              <img
                src={skill.svg}
                alt={skill.name}
                className={styles.techSvg}
              />
              <span className={styles.techNombre}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills