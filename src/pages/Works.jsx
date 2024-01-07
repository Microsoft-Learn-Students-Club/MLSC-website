import { Link } from "react-router-dom";
import Events from "./Events";
import Project from "./Project";
import styles from './Works.module.css';

const Works = () => {
    return (
        <>
            <section>
                <Events />
                <div className={styles.btn_container}>
                    <Link to="/events" className={styles.btn}>Checkout Events<span>↗</span></Link>
                </div>
                <Project />
                <div className={styles.btn_container}>
                    <Link to="/project" className={styles.btn}>Checkout Projects<span>↗</span></Link>
                </div>
            </section>
        </>
    )
}
export default Works;