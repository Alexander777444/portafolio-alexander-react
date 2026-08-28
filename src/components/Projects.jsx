import styles from './Projects.module.css'
import { projects } from '../data/projects'
import ProjectTile from './ProjectTile'
import ProjectModal from './ProjectModal'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useProjectModal } from '../hooks/useProjectModal'

function Projects() {
  const ref = useScrollReveal()
  const { activeProject, closing, openModal, closeModal } = useProjectModal()

  return (
    <section ref={ref} id="proyectos" className="seccion revelar" aria-labelledby="titulo-proyectos">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-proyectos">Projects</h2>
        <div className={styles.mosaicGrid}>
          {projects.map(p => (
            <ProjectTile key={p.id} project={p} onOpen={openModal} />
          ))}
        </div>
      </div>
      {activeProject && (
        <ProjectModal project={activeProject} closing={closing} onClose={closeModal} />
      )}
    </section>
  )
}
export default Projects