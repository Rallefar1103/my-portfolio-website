import React from "react";
import "./works.css";
import { allProjects } from "../../data/allProjects";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section id="works">
      <h2 className="title">
        <span className="portfolioYellow">Portfolio</span>
      </h2>
      <p className="intro">
        Selection of my 25+ software projects in web, mobile, and more. To see a
        full archive of all my projects press the "See all projects" button
        below.
      </p>

      <div className="projects">
        {allProjects.map((project, index) => (
          <div className="project-container" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt="project"
                className="project-image"
              />
            </div>
            <div className="project-info-container">
              <p className="project-title">{project.name}</p>
              <p className="project-label">{project.type}</p>

              <Link to={`/projects/${project.id}`}>
                <button type="button" className="link-button">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={`/all-projects`}>
        <button type="button" className="all-projects-button">
          See all projects
        </button>
      </Link>
    </section>
  );
};

export default Works;
