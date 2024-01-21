import React from "react";
import "./skills.css";
import ProjectManIcon from "../../assets/processing.png";
import { allSkills, projectManagementSkills } from "../../data/skillsData";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skills-title">What I do</h2>
      <div className="skills-description-container">
        <p>
          Specialized in full-stack development, I take great pride in
          architecting and developing large web- and smartphone applications
          with a focus on highly scalable solutions that align closely with
          business requirements, goals and objectives.
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
              <div class="white-horizontal-bar-skill-card"></div>
              <h3> Proficient Tech Stack </h3>
              <div className="tech-stack-list">
                {skill.tech.map((tech, index) => (
                  <img
                    src={tech}
                    alt="ts"
                    className="skill-card-tech-icon"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-management-card">
        <div className="logo-title-container">
          <img
            src={ProjectManIcon}
            alt="project-management"
            className="project-man-img"
          />
          <div className="text-container">
            <h2>Project Management</h2>
            <p>
              I thrive when I can blend my technical expertise with business
              acumen and steer a project from conception to launch by assisting
              and managing the team through all phases of the product
              development lifecycle.
            </p>
          </div>
        </div>

        <div class="white-horizontal-bar"></div>
        <div className="proj-man-tech-stack-list">
          {projectManagementSkills.map((tech, index) => (
            <div className="icon-text-container">
              <img
                src={tech.icon}
                alt="ts"
                className="proj-tech-icon"
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
