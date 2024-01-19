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

              <p className="skill-card-description">{skill.description}</p>
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
            <h2>Project & Product Management</h2>
            <p>
              One of my biggest passions is to blend technical expertise with my
              business acumen and steer projects from conception to completion
              by fostering a culture of innovation and collaboration amongst my
              team.
            </p>
          </div>
        </div>

        <div className="project-management-text">
          <div class="white-horizontal-bar"></div>
          <div className="proj-man-tech-stack-list">
            {projectManagementSkills.map((tech, index) => (
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
    </section>
  );
};

export default Skills;
