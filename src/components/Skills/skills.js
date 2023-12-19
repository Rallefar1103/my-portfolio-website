import React from "react";
import "./skills.css";
import webDev from "../../assets/coding.png";
import mobileDev from "../../assets/development.png";
import cloud from "../../assets/server.png";
import testing from "../../assets/testing.png";
import projMan from "../../assets/processing.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Specialized in full-stack development I take great pride in designing
        and developing large web- and smartphone applications with a focus on
        highly scalable solutions that align closely with business goals and
        objectives.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={webDev} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              React, Next.js, TypeScript, JavaScript, GraphQL, MongoDB, API
              Design
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mobileDev} alt="UIDesign" className="skillBarImg" />
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
          <img src={cloud} alt="UIDesign" className="skillBarImg" />
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
          <img src={testing} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Testing & Debugging</h2>
            <p>
              Robust unit, integration and end-to-end testing as well as strong
              debugging skills are foundational to creating high-quality
              software.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={projMan} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Project Management</h2>
            <p>
              One of my biggest passions is to blend technical expertise with my
              business acumen and steer projects from conception to completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
