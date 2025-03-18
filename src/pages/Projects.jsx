import styles from './Projects.module.css';
import projectData from "../utils/projectData.json";

const renderTopTile = (project) => (
  <div className={`${styles.projectTile} ${styles.topdetails}`} key={project.name}>
    <img src={project.imgSrc} alt={project.name} className={styles.projectImg} />
    <p className={styles.projectName}>{project.name}</p>
    <p className={styles.projectCategory}>{project.category}</p>
  </div>
);

const Projects = () => {
  const webDevProjects = projectData.webDev.slice(0, 4);
  const aiMlProjects = projectData.aiMl.slice(0, 3);
  const appProjects = projectData.app.slice(0, 2);

  return (
    <div className={styles.projects_section}>
      <p className={styles.title}>Featured Projects</p>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>Web Development Projects</p>
        <div className={styles.projectGrid}>
          {webDevProjects.map((project) => renderTopTile(project))}
        </div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>AI/ML Projects</p>
        <div className={styles.projectGrid}>
          {aiMlProjects.map((project) => renderTopTile(project))}
        </div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>App Development Projects</p>
        <div className={styles.projectGrid}>
          {appProjects.map((project) => renderTopTile(project))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
