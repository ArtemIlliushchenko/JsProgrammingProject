import { hardSkills, softSkills, languages } from '../../data/content';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className={styles.grid}>
          {hardSkills.map((group) => (
            <div key={group.title} className="card">
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <p className={styles.items}>{group.items.join(', ')}</p>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div className="card">
            <h3 className={styles.groupTitle}>Soft skills</h3>
            <ul className={styles.list}>
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className={styles.groupTitle}>Languages</h3>
            <ul className={styles.list}>
              {languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
