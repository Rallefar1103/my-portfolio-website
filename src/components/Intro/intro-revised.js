import React from "react";
import "./intro-revised.css";

import LinkedinIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.png";
import MediumIcon from "../../assets/medium.png";
import ProfilePic from "../../assets/profile.jpeg";

import AbstractBackgroundImage from "../../assets/background/abstract-background.jpg";

const IntroRevised = () => {
  return (
    <section id="intro">
      <img
        src={AbstractBackgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="intro-content">
        <h1 className="hello">
          Hi! <br /> I'm <span className="name">Rasmus</span>
        </h1>
        <h2>Full-Stack Software Engineer</h2>
        <p className="intro-description">
          with a M.S. degree in Computer Science from UCLA and five years of
          professional experience working as a software engineer including two
          years as a tech-startup founder.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/rasmus-henriksen-a5b660109/"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Rallefar1103?tab=repositories"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a
            href="https://medium.com/me/stories/public"
            rel="noopener noreferrer"
          >
            <img src={MediumIcon} alt="Medium" />
          </a>
        </div>
      </div>
      <div className="profile-picture-container">
        <img src={ProfilePic} alt="Profile" className="profile-picture" />
      </div>
    </section>
  );
};

export default IntroRevised;
