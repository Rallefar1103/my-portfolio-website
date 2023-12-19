import React from "react";
import "./works.css";
import foodtruck from "../../assets/food-truck.jpg";
import travelPlanner from "../../assets/travel-planner.jpg";
import foodieFriends from "../../assets/foodie-friends.jpg";
import washee from "../../assets/washee.jpg";
import delivery from "../../assets/delivery.jpg";
import dataAnalytics from "../../assets/data-analytics.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details. In my work
        nothing is left to chance and I only deliver code of the highest
        quality.
      </span>
      <div className="worksImgs">
        <img src={travelPlanner} alt="" className="worksImg" />
        <img src={foodtruck} alt="" className="worksImg" />
        <img src={foodieFriends} alt="" className="worksImg" />
        <img src={washee} alt="" className="worksImg" />
        <img src={delivery} alt="" className="worksImg" />
        <img src={dataAnalytics} alt="" className="worksImg" />
      </div>
    </section>
  );
};

export default Works;
