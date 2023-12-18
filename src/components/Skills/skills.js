import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

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
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mobile Development</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Cloud Solutions</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Testing & Debugging</h2>
            <p>You can write text related to mobile app development.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Project Management</h2>
            <p>
              This demo text can be changed while making the production ready
              website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
