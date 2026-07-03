import { projects } from '../data/projects'
import ProjectCard from '../hooks/ProjectCard'

function Projects() {
  return (
    <section id="proyectos">
      {projects.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  )
}
export default Projects