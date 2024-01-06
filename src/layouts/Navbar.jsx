import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      {/* <nav className={`${color} ? ${styles.navbar} ${styles.navbar_bg}' : ${styles.navbar}`}> */}
      <nav className={`${styles.navbar} ${color ? `${styles.navbar_bg}` : ""}`}>
        <div className={`flex_center | ${styles.nav_wrapper}`}>
          <div className={`flex_center | ${styles.logo}`}>
            <img src={mlscLogo} className={styles.mlsc_logo}></img>
            <h3>MLSC<span>VCET</span></h3>
          </div>
          {/* <ul className={styles.nav_link_container} style={{ color: aboutClr }}> */}
          <ul className={styles.nav_link_container}>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><Link to="/">Home</Link></li>
            {/* <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/about">About</NavLink></li> */}
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/team">Team</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/events">Works</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;