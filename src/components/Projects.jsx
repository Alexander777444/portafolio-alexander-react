import styles from './Projects.module.css'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Projects() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="proyectos" className="seccion revelar" aria-labelledby="titulo-proyectos">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-proyectos">Proyects</h2>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Projects Built</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1</span>
            <span className={styles.statLabel}>Hackathon Won (IBM BOBathon)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>6th</span>
            <span className={styles.statLabel}>Semester, CS Engineering</span>
          </div>
        </div>
        <div className={styles.projectsGrid} id="projectsGrid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects