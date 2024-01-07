import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mlscLogo from '../assets/mlsclogo.png';
import styles from './Navbar.module.css';


const Navbar = () => {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div>
      <nav className={`${styles.navbar} ${color ? `${styles.navbar_bg}` : ""}`}>
        <div className={`flex_center | ${styles.nav_wrapper}`}>
          <div className={`flex_center | ${styles.logo}`}>
            <img src={mlscLogo} className={styles.mlsc_logo}></img>
            <h3>MLSC<span>VCET</span></h3>
          </div>
          <ul className={styles.nav_link_container}>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/">Home</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/team">Team</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/works">Works</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;