import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <div className="about-text">
          <h2>
            Hi, I'm <span>Yaya Dagada</span> 👋
          </h2>
          <h3>Full-Stack Developer</h3>
          <p>
            I'm a self-taught full-stack developer based in Johannesburg, South
            Africa. I build clean, practical web applications that solve real
            problems. Passionate about writing good code, learning new
            technologies, and creating impactful digital experiences.
          </p>
          <div className="about-buttons">
            <a href="/resume.pdf" download className="btn-primary">
              Download CV
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
