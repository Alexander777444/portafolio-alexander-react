import styles from './Extras.module.css'
import { extras } from '../data/extras'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Extras() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="extra" className="seccion revelar">
      <div className="seccion-interior">
        <h2 className="seccion-titulo">Achievements & Certificates</h2>
        <div className={styles.extraGrid}>
          {extras.map((item) => (
            <div key={item.id} className={styles.extraCard}>
              <div className={styles.extraImgWrap}>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className={styles.extraImg}
                  />
                )}
                <div className={styles.extraImgPlaceholder}>
                  {item.placeholder}
                </div>
              </div>
              <div className={styles.extraCuerpo}>
                <p className={styles.extraTitulo}>{item.title}</p>
                <p className={styles.extraDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Extras