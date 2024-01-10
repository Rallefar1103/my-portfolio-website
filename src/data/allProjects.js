import "./project";
import Project from "./project";
import CityTravelPlannerImg from "../assets/city-travel-planner.png";
import FitnessInspirationImg from "../assets/fitness-tracker-img.png";

let allProjects = [
  new Project(
    "travel-planner",
    "City Travel Planner",
    CityTravelPlannerImg,
    [
      "/icons/typescript.png",
      "/icons/js.png",
      "/icons/nodejs.png",
      "/icons/atom.png",
      "/icons/graphql-logo.png",
      "/icons/leaf.png",
      "/icons/openai-logo.png",
      "/icons/yelp-logo.png",
    ],
    "https://github.com/Rallefar1103/travel-planner-project"
  ),
  new Project(
    "fitness-inspiration",
    "Fitness Inspiration Application",
    FitnessInspirationImg,
    ["/icons/js.png", "/icons/atom.png", "/icons/mui.png"],
    "https://github.com/Rallefar1103/fitness-app",
    "https://fitness-inspo.netlify.app/"
  ),
  // new Project(
  //   "events",
  //   "Events App",
  //   "Some description goes here..",
  //   "/assets/events-img.png",
  //   [
  //     "/icons/typescript.png",
  //     "/icons/atom.png",
  //     "/icons/aws.png",
  //     "/icons/leaf.png",
  //   ]
  // ),
  // new Project(
  //   "foodie-friends",
  //   "Foodie Friends",
  //   "Some description goes here..",
  //   "/assets/foodie-friends-img.png",
  //   [
  //     "/icons/js.png",
  //     "/icons/atom.png",
  //     "/icons/logo-logomark.png",
  //     "/icons/yelp.png",
  //   ]
  // ),
  // new Project(
  //   "food-delivery",
  //   "Food Delivery App",
  //   "Some description goes here..",
  //   "/assets/food-delivery-img.png",
  //   [
  //     "/icons/js.png",
  //     "/icons/atom.png",
  //     "/icons/logo-logomark.png",
  //     "/icons/yelp.png",
  //   ]
  // ),
  // new Project(
  //   "washee",
  //   "Eco Laundry Assistant",
  //   "Some description goes here..",
  //   "/assets/washee-img.png",
  //   ["/icons/python.png", "/icons/flutter.png", "/icons/docker.png"]
  // ),

  // new Project(
  //   "price-checker",
  //   "Online Price Checker",
  //   "Some description goes here..",
  //   "/assets/price-checker-img.png",
  //   [
  //     "/icons/typescript.png",
  //     "/icons/atom.png",
  //     "/icons/aws.png",
  //     "/icons/leaf.png",
  //   ]
  // ),
  // new Project(
  //   "shopday",
  //   "Rewards Shopping App",
  //   "Some description goes here..",
  //   "/assets/shopday-img.png",
  //   [
  //     "/icons/typescript.png",
  //     "/icons/atom.png",
  //     "/icons/aws.png",
  //     "/icons/leaf.png",
  //   ]
  // ),
];

export default allProjects;
