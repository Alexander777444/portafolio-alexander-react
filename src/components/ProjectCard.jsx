function ProjectCard({ project }) {
  return (
    <article className="project-card glass-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-chip">{tag}</span>
        ))}
      </div>
    </article>
  )
}
export default ProjectCard