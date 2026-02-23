import styles from './Projects.module.css';
import { Link } from "react-router-dom";
import { getProjectsByCategory } from "../utils/projectUtils";

const renderTopTile = (project, key) => (
  <Link to={`/projects/${project.id}`} className={styles.projectTileLink} key={key}>
    <div className={`${styles.projectTile} ${styles.topdetails}`}>
      <img src={project.imgSrc} alt={project.name} className={styles.projectImg} />
      <p className={styles.projectName}>{project.name}</p>
      <p className={styles.projectCategory}>{project.category}</p>
    </div>
  </Link>
);

const Projects = () => {
  const { webDev, aiMl, app } = getProjectsByCategory();
  const webDevProjects = webDev.slice(0, 4);
  const aiMlProjects = aiMl.slice(0, 3);
  const appProjects = app.slice(0, 2);

  return (
    <div className={styles.projects_section}>
      <p className={styles.title}>Featured Projects</p>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>Web Development Projects</p>
        <div className={styles.projectGrid}>
          {webDevProjects.map((project) => renderTopTile(project, project.id))}
        </div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>AI/ML Projects</p>
        <div className={styles.projectGrid}>
          {aiMlProjects.map((project) => renderTopTile(project, project.id))}
        </div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>App Development Projects</p>
        <div className={styles.projectGrid}>
          {appProjects.map((project) => renderTopTile(project, project.id))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
