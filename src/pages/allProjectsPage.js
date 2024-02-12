import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./allProjectsPage.css";
import { allProjects } from "../data/allProjects";
import IntroProfilePic from "../assets/profile.jpeg";
import { BackButton } from "../components/PortfolioProjects/ProjectDetailsRevisedLook/ProjectDetailsRevisedLook";
import AbstractBackgroundImage from "../assets/allProjectsPage/moon.jpg";
const AllProjectsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section id="allProjects">
      <img
        src={AbstractBackgroundImage}
        alt="bg-img-allprojects"
        className="background-image-allprojects"
      />
      <div className="allProjects-intro-container">
        <BackButton />
        <div className="intro-container-left">
          <div className="ap-profile-container">
            <img
              src={IntroProfilePic}
              alt="intro-profile-pic"
              className="intro-profile-image"
            />
          </div>
        </div>
        <div className="intro-container-right">
          <div className="all-projects-intro-text-container">
            <h2>Rasmus Henriksen</h2>
            <h3>Full-Stack Software Engineer</h3>
          </div>
          <div className="buttons-row-container">
            <a
              href="mailto:rasmus.henriksen@live.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="get-in-touch">
                Get in touch
              </button>
            </a>
            <a
              href="https://github.com/Rallefar1103?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="get-in-touch">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="all-projects-grid">
        {allProjects.map((project, index) => (
          <div className="all-project-container" key={index}>
            <div className="all-project-image-container">
              <img
                src={project.image}
                alt="project"
                className="all-project-image"
              />
            </div>
            <div className="all-project-info-container">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <a href={project.githubUrl}>
                <button type="button">GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsPage;
