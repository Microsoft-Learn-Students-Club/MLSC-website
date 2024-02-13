import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { projectDetails, projectImages } from "../utils/data";
import styles from './Project.module.css'

const Project = () => {

    useEffect(() => {
        gsap.set(`.${styles.photo}:not(:first-child)`, { yPercent: 101 });

        const animation = gsap.to(`.${styles.photo}:not(:first-child)`, {
            yPercent: 0,
            duration: 1,
            stagger: 1,
        });

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: `.${styles.left}`,
            start: "top top",
            end: "bottom bottom",
            pin: `.${styles.right}`,
            animation: animation,
            scrub: true,
            markers: false,
        });
    }, []);

    return (
        <>
            <section className={styles.project_section}>
                <h2 className={`title`}>Where Ideas Come to Life</h2>

                <div className={styles.gallery}>
                    <div className={styles.left}>
                        <div className={styles.detailsWrapper}>
                            {projectDetails.map((project, index) => (
                                <div className={styles.details} key={index}>
                                    <h3 className={styles.headline}>{project.title}</h3>
                                    <div className={styles.text}>
                                        <p>{project.text}</p>
                                        <a href={project.link} className={styles.proj_link}>
                                            <button className={styles.proj_btn}>View<span>↗</span></button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.photos}>
                            {projectImages.map((img, index) => (
                                <div className={styles.photo} key={index}>
                                    <img src={img} alt={`Project ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
