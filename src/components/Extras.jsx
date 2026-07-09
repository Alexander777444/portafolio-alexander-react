import { extras } from '../data/extras'

function Extras() {
  return (
    <section id="formacion" className="seccion">
      <div className="seccion-interior">
        <h2 className="seccion-titulo">Logros y certificados</h2>
        <div className="extra-grid">
          {extras.map((item) => (
            <div key={item.id} className="extra-card">
              <div className="extra-img-wrap">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="extra-img"
                  />
                )}
                <div className="extra-img-placeholder">
                  {item.placeholder}
                </div>
              </div>
              <div className="extra-cuerpo">
                <p className="extra-titulo">{item.title}</p>
                <p className="extra-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Extras