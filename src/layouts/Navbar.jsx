import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mlscLogo from '../assets/mlsclogo.png';
import styles from './Navbar.module.css';


const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  window.addEventListener('scroll', changeColor);

  return (
    <section>
      <nav className={`${styles.navbar} ${color ? `${styles.navbar_bg}` : ""}`}>
        <div className={`flex_center | ${styles.nav_wrapper}`}>
          <div className={`flex_center | ${styles.logo}`}>
            <img src={mlscLogo} className={styles.mlsc_logo}></img>
            <NavLink to="/"><h3>MLSC<span>VCET</span></h3></NavLink>
          </div>
          <div className={styles.hamburger_menu} onClick={toggleMenu}>
            <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
            <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
            <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
          </div>
          <ul className={`${styles.nav_link_container} ${menuOpen ? styles.open : ""}`}>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/">Home</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/team">Team</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/works">Works</NavLink></li>
            <li className={`${styles.nav_link} | ${styles.nav_link_ltr}`}><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;