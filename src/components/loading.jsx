import { useEffect } from 'react';
import styles from './Loading.module.css';


const Loading = () => {

    useEffect(() => {
        const loading = document.getElementById('loading');
        const loader = document.getElementById('loader');

        setTimeout(() => {
            loader.classList.add('loaded');

            if (loader.classList.contains('loaded')) {
                setTimeout(() => {
                    loading.parentNode.removeChild(loading);
                }, 1000);
            }
        }, 3000);
    }, []);

    return (
        <>
            <section className={styles.loading}>
                <div id="loader" className={`${styles.loader}`}>
                    <div className={styles.animation_loader}>
                        <div className={styles.spinner}></div>
                    </div>
                    <div className={`${styles.loader_section} ${styles.section_left}`}></div>
                    <div className={`${styles.loader_section} ${styles.section_right}`}></div>
                </div>
            </section>
        </>
    )
}
export default Loading;