// components/TeamCard.jsx
import styles from "./Card.module.css";
import { motion } from "framer-motion";

/*function Card({ name, imgSrc, githubUrl, linkedinUrl, role }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.topSection}>
        <div className={styles.border}></div>
        <div className={styles.headerContent}>
          <div className={styles.profilePic}>
            <img src={imgSrc} alt={name} />
          </div>
          <div className={styles.socialMedia}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/material-outlined/24/github.png"
                  className={styles.icon}
                  alt="Github"
                />
              </a>
            )}
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/ios-filled/50/linkedin.png"
                  className={styles.icon}
                  alt="LinkedIn"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.nameRolePill}>
         <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
        </div>
      </div>
    </motion.div>
  );
}*/

function Card({ name, imgSrc, linkedinUrl, githubUrl, role }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.imgBx}>
        <img src={imgSrc} alt={name} />
      </div>

      <div className={styles.content}>
        <div className={styles.details}>
          <h2>
            {name}
            <br />
            <span>{role}</span>
          </h2>
          <ul className={styles.social_icons}>
            {githubUrl && (
              <li>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            )}
            {linkedinUrl && (
              <li>
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"><img
                  src="https://img.icons8.com/ios-filled/50/linkedin.png"
                  className={styles.icon}
                  alt="LinkedIn"
                /></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
