import React from "react";
import "./works.css";
import allProjects from "../../data/allProjects";
import { Link } from "react-router-dom";

const Works = () => {
  const _openWebAddress = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="works">
      <h2 className="title">
        <span className="portfolioYellow">Portfolio</span>
      </h2>
      <p className="intro">
        My projects mainly consist of web and mobile applications. You can click
        on "Learn more" to read about the project, check out the tech stack, and
        see a demo video.
      </p>

      <div className="projects">
        {allProjects.map((project, index) => (
          <div className="project-container" key={index}>
            <div className="project-image-container">
              <img
                src={project.imgUrl}
                alt="project"
                className="project-image"
              />
            </div>
            <div className="project-info-container">
              <p className="project-title">{project.title}</p>
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
