import React from 'react'
import styles from './Social.module.css'

const Socials = () => {
    return (
        <>
            <div>
                <p className={styles.title} style={{ color: "#ffffff" }}>
                    Social Accounts
                </p>
                <div className={styles.socials}>

                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <i id={styles.icon} className="fab fa-github" style={{ color: "#ffffff" }}></i>
                        <p id={styles.social_name} style={{ color: "#ffffff" }}>
                            Github</p>
                    </a>
                    <a href="https://www.instagram.com/mlsc_vcet/" target="_blank" rel="noreferrer">
                        <i id={styles.icon} className="fab fa-instagram" style={{ color: "#ffffff" }}></i>
                        <p id={styles.social_name} style={{ color: "#ffffff" }}>
                            Instagram</p>
                    </a>
                    <a href="https://www.linkedin.com/company/mlsc-vcet" target="_blank" rel="noreferrer">
                        <i id={styles.icon} className="fab fa-linkedin-in" style={{ color: "#ffffff" }}></i>
                        <p id={styles.social_name} style={{ color: "#ffffff" }}>
                            Linkedin</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Socials