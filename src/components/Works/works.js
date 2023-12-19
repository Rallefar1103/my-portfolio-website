import React from "react";
import "./works.css";
// import foodtruck from "/assets/food-truck.jpg";
// import travelPlanner from "/assets/travel-planner.jpg";
// import foodieFriends from "/assets/foodie-friends.jpg";
// import washee from "/assets/washee.jpg";
// import delivery from "/assets/delivery.jpg";
// import dataAnalytics from "/assets/data-analytics.jpg";
// import shopday from "/assets/shopday.jpg";
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
        <Link to="/projects/travel-planner">
          <div className="imgContainer">
            <span className="imgTitle">Intelligent Travel Assistant</span>
            <img src="assets/travel-planner.jpg" alt="" className="worksImg" />
          </div>
        </Link>
        <Link to="/projects/food-truck-tracker">
          <div className="imgContainer">
            <span className="imgTitle">Food Truck Tracker</span>
            <img src="assets/food-truck.jpg" alt="" className="worksImg" />
          </div>
        </Link>
        <Link to="/projects/foodie-friends">
          <div className="imgContainer">
            <span className="imgTitle">Foodie Friends</span>
            <img src="assets/foodie-friends.jpg" alt="" className="worksImg" />
          </div>
        </Link>

        <Link to="/projects/washee">
          <div className="imgContainer">
            <span className="imgTitle">Eco Laundry Assistant</span>
            <img src="assets/washee.jpg" alt="" className="worksImg" />
          </div>
        </Link>
        <Link to="/projects/food-delivery">
          <div className="imgContainer">
            <span className="imgTitle">Food Delivery Application</span>
            <img src="assets/delivery.jpg" alt="" className="worksImg" />
          </div>
        </Link>
        <Link to="/projects/data-analytics">
          <div className="imgContainer">
            <span className="imgTitle">Data Analytics Microservice</span>
            <img src="assets/data-analytics.jpg" alt="" className="worksImg" />
          </div>
        </Link>
        <Link to="/projects/shopday">
          <div className="imgContainer">
            <span className="imgTitle">Local Rewards Shopping App</span>
            <img src="assets/shopday.jpg" alt="" className="worksImg" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Works;
