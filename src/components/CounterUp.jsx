import { useState } from 'react';
import styles from './CounterUp.module.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-router-dom';
import ScrambledText from '../blocks/TextAnimations/ScrambledText/ScrambledText';

const CounterUp = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className={styles.counter_section}>
                <h1 className={styles.title}>Our Works</h1>
                <div className={`flex_center | ${styles.work_container}`}>
                    <div className={styles.right_content}>
                     <ScrambledText
                      radius={100} duration={1.2} speed={0.5} scrambleChars=".:"
                     >
                        The Microsoft Learn Students Club (MLSC) serves as a dynamic hub for student learning and
                        collaboration. Through workshops like React JS Mastery and Azure Fundamentals Challenge,
                        MLSC empowers students with hands-on experiences and expert guidance. Participants
                        receive completion certificates, skill badges, and access to premium resources. MLSC&#39;s
                        commitment extends to cultivating an environment for thriving learning journeys, focusing
                        on emerging technologies, skill development, and networking. The impactful workshops
                        equip participants with practical knowledge, facilitating their navigation in the ever-evolving
                        tech landscape. Join MLSC for a journey of continuous learning, collaboration, and
                        excellence.
                     </ScrambledText>
                    </div>
                    <div className={`flex_center | ${styles.left_content}`}>
                        <div className={`flex_center | ${styles.counter_page_container}`}>
                            <div className={`flex_center | ${styles.counter_page_content}`}>
                                <div className={styles.counter_page}>
                                    <h2>
                                        {counterOn && <CountUp start={0} end={5} duration={5} delay={0} className={styles.count_up} />}+
                                    </h2>
                                </div>
                                <p>Events</p>
                            </div>
                            <div className={`flex_center | ${styles.counter_page_content}`}>
                                <div className={styles.counter_page}>
                                    <h2>
                                        {counterOn && <CountUp start={0} end={3} duration={5} delay={0} className={styles.count_up} />}+
                                    </h2>
                                </div>
                                <p>Projects</p>
                            </div>
                        </div>
                        <div className={styles.btn_container}>
                            <Link to="/works" className={styles.btn}>Checkout Works<span>↗</span></Link>
                        </div>
                    </div>
                </div>

            </section>
        </ScrollTrigger>
    )
}
export default CounterUp