import React from "react";
import "./intro.css";
import bg from "../../assets/profile.jpeg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import emailIcon from "../../assets/gmail.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="bg-container">
          <img src={bg} alt="Profile" className="bg" />
        </div>
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Rasmus</span> <br />
          Full-Stack Software Engineer <br />
          <p className="subtitle">
            with five years of professional industry experience including two
            years as a tech-startup founder.
          </p>
        </span>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/rasmus-henriksen-a5b660109/"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin" className="link" />
          </a>
          <a href="mailto:rasmus.henriksen@live.dk" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" className="link" />
          </a>

          <a
            href="https://github.com/Rallefar1103?tab=repositories"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;