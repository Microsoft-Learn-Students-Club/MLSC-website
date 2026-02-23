import { Link, useParams } from "react-router-dom";
import { getAllProjects } from "../utils/projectUtils";
import styles from "./Projects.module.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = getAllProjects();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className={styles.projects_section}>
        <p className={styles.title}>Project not found</p>
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className={styles.projects_section}>
      <p className={styles.title}>{project.name}</p>
      <div className={styles.projectGrid}>
        <div className={styles.projectTile}>
          <img src={project.imgSrc} alt={project.name} className={styles.projectImg} />
          <p className={styles.detailsTitle}>Project Details</p>
          <p className={styles.projectCategory}>{project.category}</p>
          {project.websiteUrl && (
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          )}
          {!project.websiteUrl && <p className={styles.infoMessage}>Website link will be updated soon.</p>}
          <Link to="/projects">Back to projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
