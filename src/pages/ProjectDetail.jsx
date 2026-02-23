import { useParams, useNavigate } from 'react-router-dom';
import projectData from "../utils/projectData.json";
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let project = null;
  
  for (const category of Object.values(projectData)) {
    project = category.find(p => p.id === id);
    if (project) break;
  }

  if (!project) {
    return (
      <div className={styles.not_found}>
        <h2>Project not found</h2>
        <button onClick={() => navigate('/projects')}>Back to Projects</button>
      </div>
    );
  }

  return (
    <div className={styles.project_detail}>
      <button className={styles.back_btn} onClick={() => navigate('/projects')}>← Back</button>
      
      <div className={styles.detail_container}>
        <div className={styles.image_section}>
          <img src={project.imgSrc} alt={project.name} className={styles.detail_img} />
        </div>

        <div className={styles.info_section}>
          <h1 className={styles.project_title}>{project.name}</h1>
          <p className={styles.category_tag}>{project.category}</p>
          
          <div className={styles.description}>
            <h3>About</h3>
            <p>{project.description}</p>
          </div>

          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.visit_link}>
              <button className={styles.visit_btn}>Visit Website ↗</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;