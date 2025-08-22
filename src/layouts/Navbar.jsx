import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import mlscLogo from "../assets/mlsclogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const changeColor = () => setColor(window.scrollY >= 90);
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${color ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-container">
          <img src={mlscLogo} alt="MLSC Logo" className="logo" />
          <h3>
            MLSC<span>VCET</span>
          </h3>
        </div>

        {/* Hamburger / Close */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              <FaHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={toggleMenu}>
              <FaUsers className="nav-icon" />
              <span className="nav-text">Team</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/works" onClick={toggleMenu}>
              <FaBriefcase className="nav-icon" />
              <span className="nav-text">Works</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={toggleMenu}>
              <FaProjectDiagram className="nav-icon" />
              <span className="nav-text">Projects</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
