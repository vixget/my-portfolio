import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const projects = [
  {
    title: "LearnEasily",
    description:
      "An AI-powered study tool that turns textbook pages and PDFs into simplified notes and flow maps. Built for students from high school to university level.",
    tech: ["React", "Node.js", "Claude AI", "PayFast"],

    live: "https://learneasily.co.za",
  },
  {
    title: "ScamFind",
    description:
      "An AI-powered scam detection full-stack web app that helps South Africans identify and avoid online scams in real time.",
    tech: ["React", "Node.js", "PostgreSQL", "AI"],
    github: "https://github.com/vixget/scamfind",
  },
  {
    title: "Bookmark Manager API",
    description:
      "A RESTful API for managing bookmarks with full CRUD operations, authentication, and organized collections.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/vixget/bookmark-api",
    live: "",
  },
  {
    title: "GhostFees",
    description:
      "A subscription detector app built for South Africans to identify and manage hidden recurring charges and forgotten subscriptions.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/vixget/ghostfees",
    live: "",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
