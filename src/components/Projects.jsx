import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section id="proyectos" class="seccion" aria-labelledby="titulo-proyectos">
      <div class="seccion-interior">
        <h2 class="seccion-titulo" id="titulo-proyectos">Proyectos</h2>
        <div class="projects-grid" id="projectsGrid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects