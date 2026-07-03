import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="tecnologias" className="skills-section">
      <h2>Tecnologías</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills