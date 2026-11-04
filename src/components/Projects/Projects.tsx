import { projects } from '../../data/content';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
