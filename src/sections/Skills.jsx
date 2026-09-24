import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
  { name: "Express", icon: <SiExpress />, color: "#000000" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
