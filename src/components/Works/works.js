import React from "react";
import "./works.css";
import allProjects from "../../data/allProjects";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">
        My <span className="portfolioYellow">Portfolio</span>
      </h2>
      <span className="worksDesc">
        Below you will find a selection of my web and mobile projects. You can
        click on each project to get more information regarding the tech stack
        and implementation details.
      </span>

      <div className="worksImgs">
        {allProjects.map((project) => (
          <div className="imgContainer">
            <div className="topBar">
              <span className="imgTitle">{project.title}</span>
            </div>
            <img src={project.imgUrl} alt="" className="worksImg" />
            <div className="buttonBar">
              <Link to={`/projects/${project.id}`}>
                <button type="button" className="imgButton">
                  Learn more
                </button>
              </Link>
              <button type="button" className="imgButton">
                Github
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
