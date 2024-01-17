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
      <h2 className="worksTitle">
        My <span className="portfolioYellow">Portfolio</span>
      </h2>
      <p className="worksDesc">
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
              <div className="project-label">{project.type}</div>
              <div className="buttonBar">
                <div className="learn-more">
                  <Link to={`/projects/${project.id}`}>
                    <button type="button" className="link-button">
                      Learn more
                    </button>
                  </Link>
                </div>
                <div className="websites">
                  {" "}
                  <button
                    type="button"
                    className="imgButton"
                    onClick={() => _openWebAddress(project.githubUrl)}
                  >
                    Github
                  </button>
                  <button
                    type="button"
                    className="imgButton"
                    onClick={() => _openWebAddress(project.websiteUrl)}
                  >
                    Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
