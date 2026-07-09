import { education } from '../data/education'

function Education() {
  return (
    <section id="formacion" className="seccion">
      <div className="seccion-interior">
        <h2 className="seccion-titulo">Formación</h2>
        <div className="linea-tiempo">
          {education.map((item) => (
            <div key={item.id} className="tiempo-item">
              <div className="tiempo-punto" />
              <div className="tiempo-contenido">
                <div className="tiempo-cabecera">
                  <div>
                    <p className="tiempo-titulo">{item.institution}</p>
                    <p className="tiempo-sub">{item.degree}</p>
                    {item.description && (
                      <p className="tiempo-desc">{item.description}</p>
                    )}
                  </div>
                  <span className="tiempo-badge">{item.period}</span>
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