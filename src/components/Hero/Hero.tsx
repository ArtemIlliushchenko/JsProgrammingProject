import { profile } from '../../data/content';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <img src={profile.photo} alt={profile.name} className={styles.photo} width={160} height={160} />
        <div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.location}>{profile.location}</p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View projects
            </a>
            <a href="#contacts" className={styles.secondary}>
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
