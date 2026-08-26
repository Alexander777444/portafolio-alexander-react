import styles from './Projects.module.css'

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
              <img src="assets/images/avatarAlexander.jpg" alt="Proyectos" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.projectTags}>
        {project.tags.map(tag => (
          <span key={tag} className="project-chip">{tag}</span>
        ))}
      </div>
    </div>
  )
}
export default ProjectCard