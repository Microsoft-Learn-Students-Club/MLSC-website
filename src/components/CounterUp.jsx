import { useState } from 'react';
import styles from './CounterUp.module.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-router-dom';

const CounterUp = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <section className={styles.counter_section}>
                    <h1 className={styles.title}>Our Works</h1>
                    <div className={`flex_center | ${styles.work_container}`}>
                        <div className={styles.right_content}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quisquam laborum nemo, repudiandae, vero quibusdam dolorem, sint officiis sapiente possimus dignissimos! Error accusamus adipisci magni, quasi, impedit corrupti deleniti deserunt tenetur fugiat, esse eum minus aliquam accusantium optio aspernatur tempore nam? Eligendi officiis animi corrupti placeat maxime reiciendis omnis voluptatum pariatur ducimus doloremque hic sapiente nostrum consequatur nemo assumenda quasi veritatis itaque dicta nisi fuga quam nulla, expedita voluptates repellat? Saepe id provident vero maxime sit rerum quos, iure sint ut debitis ipsam aut fugit consequuntur. Dignissimos consequuntur labore magni reprehenderit, architecto voluptatem nostrum eveniet ex aperiam pariatur. Consectetur, laboriosam.</p>
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
        </>
    )
}
export default CounterUp