import React from "react";
import "./skills.css";
import WebDevIcon from "../../assets/coding.png";
import MobileDevIcon from "../../assets/development.png";
import CloudIcon from "../../assets/server.png";
import TestingIcon from "../../assets/testing.png";
import ProjectManIcon from "../../assets/processing.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Specialized in full-stack development, I take great pride in
        architecting and developing large web- and smartphone applications with
        a focus on highly scalable solutions that align closely with business
        requirements, goals and objectives.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDevIcon} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              My web development toolkit comprises a solid stack of React,
              Next.js, TypeScript, JavaScript using Node.js, GraphQL, REST and
              MongoDB on the backend as well as strong skills in API Design.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={MobileDevIcon} alt="MobDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mobile Development</h2>
            <p>
              I utilize React Native, Flutter, Firestore & Firebase to create
              cross-platform applications that offer native-like performance,
              streamlining the development process without sacrificing user
              experience.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={CloudIcon} alt="Cloud" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Cloud & CI/CD Solutions</h2>
            <p>
              I architect projects for scalability and seamless integration,
              capitalizing on cloud technologies and continuous integration and
              delivery using AWS, Supabase, Docker, Azure DevOps, Bitrise and
              Github Actions.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={TestingIcon} alt="Testing" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Testing & Debugging</h2>
            <p>
              Robust unit, integration and end-to-end testing as well as strong
              debugging skills are foundational in my approach to creating
              high-quality and robust software solutions.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ProjectManIcon} alt="ProjMang" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Project Management</h2>
            <p>
              One of my biggest passions is to blend technical expertise with my
              business acumen and steer projects from conception to completion
              by fostering a culture of innovation and collaboration amongst my
              team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
