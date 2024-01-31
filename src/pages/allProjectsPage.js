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
          <img
            src={IntroProfilePic}
            alt="intro-profile-pic"
            className="intro-profile-image"
          />
        </div>
        <div className="intro-container-right">
          <div className="all-projects-intro-text-container">
            <h2>Rasmus Henriksen</h2>
            <h3>Full-Stack Software Engineer</h3>
          </div>
          <div className="buttons-row-container">
            <button type="button" className="get-in-touch">
              Get in touch
            </button>
            <button type="button" className="get-in-touch">
              GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="portfolio-projects-grid">
        {allProjects.map((project, index) => (
          <div className="pf-project-container" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt="project"
                className="project-image"
              />
            </div>
            <div className="pf-project-info-container">
              <p className="project-title">{project.name}</p>
              <p className="project-label">{project.type}</p>
              <button type="button" className="pf-link-button">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsPage;
