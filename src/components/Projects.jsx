import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Projects() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} id="proyectos" className="seccion revelar" aria-labelledby="titulo-proyectos">
      <div className="seccion-interior">
        <h2 className="seccion-titulo" id="titulo-proyectos">Proyectos</h2>
        <div className="projects-grid" id="projectsGrid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects