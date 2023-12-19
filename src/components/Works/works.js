import React from "react";
import "./works.css";
import foodtruck from "../../assets/food-truck.jpg";
import travelPlanner from "../../assets/travel-planner.jpg";
import foodieFriends from "../../assets/foodie-friends.jpg";
import washee from "../../assets/washee.jpg";
import delivery from "../../assets/delivery.jpg";
import dataAnalytics from "../../assets/data-analytics.jpg";
import shopday from "../../assets/shopday.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Below you will find a selection of my web and mobile applications.
      </span>
      <div className="worksImgs">
        <div className="imgContainer">
          <span className="imgTitle">Intelligent Travel Assistant</span>
          <img src={travelPlanner} alt="" className="worksImg" />
        </div>
        <div className="imgContainer">
          <span className="imgTitle">Food Truck Tracker</span>
          <img src={foodtruck} alt="" className="worksImg" />
        </div>
        <div className="imgContainer">
          <span className="imgTitle">Foodie Friends</span>
          <img src={foodieFriends} alt="" className="worksImg" />
        </div>
        <div className="imgContainer">
          <span className="imgTitle">Eco Laundry Assistant</span>
          <img src={washee} alt="" className="worksImg" />
        </div>
        <div className="imgContainer">
          <span className="imgTitle">Food Delivery Application</span>
          <img src={delivery} alt="" className="worksImg" />
        </div>
        <div className="imgContainer">
          <span className="imgTitle">Data Analytics Microservice</span>
          <img src={dataAnalytics} alt="" className="worksImg" />
        </div>
        <div className="imgContainer">
          <span className="imgTitle">Local Rewards Shopping App</span>
          <img src={shopday} alt="" className="worksImg" />
        </div>
      </div>
    </section>
  );
};

export default Works;
