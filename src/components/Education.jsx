import styles from './Education.module.css'
import { education } from '../data/education'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Education() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="formacion" className="seccion revelar">
      <div className="seccion-interior">
        <h2 className="seccion-titulo">Formación</h2>
        <div className={styles.lineaTiempo}>
          {education.map((item) => (
            <div key={item.id} className={styles.tiempoItem}>
              <div className={styles.tiempoPunto} />
              <div className={styles.tiempoContenido}>
                <div className={styles.tiempoCabecera}>
                  <div>
                    <p className={styles.tiempoTitulo}>{item.institution}</p>
                    <p className={styles.tiempoSub}>{item.degree}</p>
                    {item.description && (
                      <p className={styles.tiempoDesc}>{item.description}</p>
                    )}
                  </div>
                  <span className={styles.tiempoBadge}>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education