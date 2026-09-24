import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Yaya Dagada</div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
