import React from "react";
import "./about.css";
import AboutImage from "../../assets/about/profile-pic-2-no-bg.png";
import AbstractShapePNG from "../../assets/about/white-bg-2.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img
          src={AbstractShapePNG}
          alt="abstract-shape"
          className="about-abstract-shape"
        />
        <img src={AboutImage} alt="about-img" className="about-image" />
      </div>

      <div className="about-right">
        <div className="about-text-container">
          <h2>
            About <span className="me-yellow">Me</span>{" "}
          </h2>
          <p>
            As a tech enthusiast and creator at heart, I launched my first
            startup in 2017, and from there jumped into a Computer Science
            degree while working professionally as a software engineer now for
            three and a half years. With a Master's from UCLA under my belt, I'm
            geared up for the next big challenge, eager to learn more, and
            contribute with my skills to drive innovation{" "}
            <span className="forward-yellow">forward!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
