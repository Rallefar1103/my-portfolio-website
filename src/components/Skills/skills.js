import React from "react";
import "./skills.css";
import ProjectManIcon from "../../assets/processing.png";
import { allSkills, projectManagementSkills } from "../../data/skillsData";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skills-title">
        <span className="skills-yellow">Skills</span> I Bring
      </h2>
      <div className="skills-description-container">
        <p>
          Driven by an entrepreneurial passion for innovation, I specialize in
          full-stack development with a focus on architecting and building
          large-scale web and smartphone applications that align closely with
          business requirements and goals
        </p>
      </div>

      <div className="skills-list">
        {allSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img
              src={skill.icon}
              alt={skill.title}
              className="skill-card-img"
            />
            <div className="skill-card-text">
              <h2>{skill.title}</h2>

              <p>{skill.description}</p>
              <div className="white-horizontal-bar-skill-card"></div>
              <h3> Proficient Tech Stack </h3>
              <div className="skills-tech-stack-list">
                {skill.tech.map((tech, index) => (
                  <div className="skill-card-tech-icon-container">
                    <img src={tech} alt="ts" key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-management-card">
        <div className="pm-logo-title-container">
          <img
            src={ProjectManIcon}
            alt="project-management"
            className="project-man-img"
          />
          <div className="pm-text-container">
            <h2>Project Management</h2>
            <p>
              I thrive when I can blend my technical expertise with business
              acumen and steer a project from conception to launch by assisting
              and managing the team through all phases of the product
              development lifecycle.
            </p>
          </div>
        </div>

        <div className="pm-white-horizontal-bar"></div>
        <div className="pm-tech-stack-list">
          {projectManagementSkills.map((tech, index) => (
            <div className="pm-icon-text-container">
              <img
                src={tech.icon}
                alt="ts"
                className="pm-tech-icon"
                key={index}
              />
              <p> {tech.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
