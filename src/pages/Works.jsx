import { Link } from "react-router-dom";
import Events from "./Events";

import Footer from "../layouts/Footer"
import styles from './Works.module.css';

const Works = () => {
    return (
        <section className={styles.work_section}>
            <Events count={8}/>
            <div className={styles.btn_container}>
                <Link to="/events" className={styles.btn}>Checkout Events<span>↗</span></Link>
            </div>
            
            <div className={styles.footer_container}>
                <Footer />
            </div>
        </section>
    )
}
export default Works;