import React from "react";
import "./intro.css";

import LinkedinIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.png";
import MediumIcon from "../../assets/medium.png";
import ProfilePic from "../../assets/profile.jpeg";

import BackgroundImage from "../../assets/background/abstract-background.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="background-image-container">
        <img
          src={BackgroundImage}
          alt="background"
          className="background-image"
        />
      </div>
      <div className="introContent">
        <div className="picture-container">
          <img src={ProfilePic} alt="Profile" className="bg" />
        </div>
        <span className="hello">Hi!</span>
        <span className="introText">
          I'm <span className="introName">Rasmus</span> <br />
          Full-Stack Software Engineer <br />
          <p className="subtitle">
            with a M.S. degree in Computer Science from UCLA and five years of
            professional experience <br />
            working as a software engineer including two years as a tech-startup
            founder.
          </p>
        </span>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/rasmus-henriksen-a5b660109/"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin" className="social-link" />
          </a>

          <a
            href="https://github.com/Rallefar1103?tab=repositories"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="Github" className="social-link" />
          </a>
          <a
            href="https://medium.com/me/stories/public"
            rel="noopener noreferrer"
          >
            <img src={MediumIcon} alt="Medium" className="social-link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
