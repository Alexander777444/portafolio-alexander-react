import styles from './Projects.module.css'

function ProjectCard({ project }) {
  const { title, subtitle, description, highlights, tags, demoUrl, codeUrl, imageUrl, imageAlt } = project

  return (
    <article className={`${styles.projectCard} glass-card`}>
      <div className={styles.projectImgWrap}>
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt} className={styles.projectImg} loading="lazy" />
        ) : (
          <div className={styles.projectImgPlaceholder} aria-hidden="true">
            {title.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div className={styles.projectBody}>
        <h3 className={styles.projectTitle}>{title}</h3>
        {subtitle && <p className={styles.projectSub}>{subtitle}</p>}
        <p className={styles.projectDesc}>{description}</p>

        {highlights?.length > 0 && (
          <ul className={styles.projectHighlights}>
            {highlights.map((point, i) => (
              <li key={`${project.id}-highlight-${i}`}>{point}</li>
            ))}
          </ul>
        )}

        <div className={styles.projectTags}>
          {tags.map(tag => (
            <span key={`${project.id}-${tag}`} className={styles.projectChip}>{tag}</span>
          ))}
        </div>

        {(demoUrl || codeUrl) && (
          <div className={styles.projectLinks}>
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primario">
                Live Demo
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
export default ProjectCard