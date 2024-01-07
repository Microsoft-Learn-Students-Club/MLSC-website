import mlscLogo from '../assets/mlsclogo.png'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
            <div className={styles.footer_section}>
                <div className={styles.footer_container}>
                    <div className={`flex_center | ${styles.footer_content}`}>
                        <div className={styles.footer_logo}>
                            <img src={mlscLogo} alt="MLSC VCET" />
                        </div>
                        <div className={styles.footer_contact}>
                            <h4>Contact us</h4>
                            <div className={`flex_center | ${styles.contacts}`}>
                                {/* <p><span><FontAwesomeIcon icon="fa-solid fa-envelope" /></span> mlsc@vcet.edu</p> */}
                                <p>Rishabh Tripathi: +91 9369744734</p>
                                <p>Kshitij Patil: +91 9323544113</p>
                            </div>
                        </div>
                        <div className={styles.footer_social}>
                            <h4>Follow us</h4>
                            <div className={`flex_center | ${styles.socialmedia}`}>
                                <a className={styles.social_icon} href="https://www.linkedin.com/company/mlsc-vcet/mycompany/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                                <a className={styles.social_icon} href="https://github.com/Microsoft-Learn-Students-Club" target="_blank" rel='noreferrer'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                                <a className={styles.social_icon} href="https://www.instagram.com/mlsc_vcet/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel='noreferrer'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer_below}>
                        <div className={`flex_center | ${styles.footer_copyright}`}>
                            <p>
                                <sup>&#64;</sup>{new Date().getFullYear()} MLSC VCET. All right reserved.
                            </p>
                            <p>
                                Handcrafted by Team MLSC with ❤️
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer