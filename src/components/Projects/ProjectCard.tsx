import type { Project } from '../../data/content';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <h3 className={styles.title}>
        {project.name} <span className={styles.subtitle}>- {project.title}</span>
      </h3>
      <p className={styles.role}>{project.role}</p>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className={styles.stack}>
        {project.stack.map((tech) => (
          <li key={tech} className={styles.tag}>
            {tech}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.label} &rarr;
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
