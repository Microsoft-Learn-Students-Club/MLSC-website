import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import projectData from "../utils/projectData.json";
import TextType from '../blocks/TextAnimations/TextType/TextType';
import SplitText from '../blocks/TextAnimations/SplitText/SplitText';
import ScrambledText from '../blocks/TextAnimations/ScrambledText/ScrambledText';

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const renderTopTile = (project) => (
  <motion.div
    className={`${styles.projectTile} ${styles.topdetails}`}
    key={project.name}
    variants={tileVariants}
    whileHover={{ 
      scale: 1.05, 
      rotateX: 4, 
      rotateY: -4,
      boxShadow: "0 25px 35px rgba(0,255,255,0.3)"
    }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <img src={project.imgSrc} alt={project.name} className={styles.projectImg} />

    {/* Animated Title */}
    <div className={styles.projectTitle}>
      <SplitText
        text={project.name}
        splitType="chars"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        duration={0.6}
        ease="power3.out"
      />
    </div>

    {/* Animated Category Text */}
    <div className={styles.projectCategory}>
      <ScrambledText radius={50} duration={1} speed={0.5} scrambleChars=".:">
        {project.category}
      </ScrambledText>
    </div>
  </motion.div>
);


const Projects = () => {
  const webDevProjects = projectData.webDev.slice(0, 4);
  const aiMlProjects = projectData.aiMl.slice(0, 3);
  const appProjects = projectData.app.slice(0, 2);

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className={styles.projects_section}>
      <p className={styles.title}><TextType text="Featured Projects" /></p>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>Web Development Projects</p>
        <motion.div
          className={styles.projectGrid}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {webDevProjects.map((project) => renderTopTile(project))}
        </motion.div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>AI/ML Projects</p>
        <motion.div
          className={styles.projectGrid}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {aiMlProjects.map((project) => renderTopTile(project))}
        </motion.div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>App Development Projects</p>
        <motion.div
          className={styles.projectGrid}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {appProjects.map((project) => renderTopTile(project))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
