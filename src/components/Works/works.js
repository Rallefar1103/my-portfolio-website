import React from "react";
import "./works.css";
import { allProjects } from "../../data/allProjects";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section id="works">
      <h2 className="portfolio-title">
        <span className="portfolio-yellow">Portfolio</span>
      </h2>
      <p className="portfolio-intro">
        Selection of my 20+ software projects in web, mobile, open source
        contributions etc. To see more of my projects press the{" "}
        <span className="all-projects-purple">See more projects</span> button
        below.
      </p>

      <div className="projects-grid">
        {allProjects.slice(0, 6).map((project, index) => (
          <div className="project-container" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt="project"
                className="project-image"
              />
            </div>
            <div className="project-info-container">
              <h3>{project.name}</h3>
              <p>{project.type}</p>

              <Link to={`/projects/${project.id}`}>
                <button type="button">Learn more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={`/all-projects`}>
        <button type="button" className="all-projects-button">
          See more projects
        </button>
      </Link>
    </section>
  );
};

export default Works;
