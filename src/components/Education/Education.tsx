import { education } from '../../data/content';
import styles from './Education.module.css';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className={styles.list}>
          {education.map((item) => (
            <div key={item.place} className={`card ${styles.item}`}>
              <span className={styles.period}>{item.period}</span>
              <div>
                <h3 className={styles.place}>{item.place}</h3>
                <p className={styles.field}>{item.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
