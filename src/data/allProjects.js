import "./project";
import Project from "./project";
import CityTravelPlannerImg from "../assets/city-travel-planner-1.png";
import FitnessInspirationImg from "../assets/fitness-inspo-frontpage.png";
import TechHavenImg from "../assets/tech-haven-landing.png";
import FoodieFriendsImg from "../assets/foodie-friends-img.png";
import WasheeImg from "../assets/washee-img.png";
import ShopdayImg from "../assets/shopday-img.png";

let allProjects = [
  new Project(
    "travel-planner",
    "City Travel Planner Web Application",
    "Web Development",
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
    "tech-haven",
    "Tech Haven Webshop",
    "Web Development",
    TechHavenImg,
    [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/nextjs-icon-dark-background.png",

      "/icons/payload.jpeg",
      "/icons/leaf.png",
    ],
    "https://github.com/Rallefar1103/e-commerce-tech-shop",
    "https://e-commerce-tech-shop.payloadcms.app/home"
  ),
  new Project(
    "fitness-inspiration",
    "Fitness Inspiration Web Application",
    "Web Development",
    FitnessInspirationImg,
    ["/icons/js.png", "/icons/atom.png", "/icons/nodejs.png", "/icons/mui.png"],
    "https://github.com/Rallefar1103/fitness-app",
    "https://fitness-inspo-club.netlify.app/"
  ),
  // new Project("events", "Events App", EventsAppImg, [
  //   "/icons/typescript.png",
  //   "/icons/atom.png",
  //   "/icons/aws.png",
  //   "/icons/leaf.png",
  // ]),
  new Project(
    "foodie-friends",
    "Foodie Friends",
    "Mobile Development",
    FoodieFriendsImg,
    [
      "/icons/js.png",
      "/icons/atom.png",
      "/icons/logo-logomark.png",
      "/icons/yelp.png",
    ]
  ),

  new Project(
    "washee",
    "Eco Laundry Assistant",
    "Web & Mobile Development",
    WasheeImg,
    ["/icons/python.png", "/icons/flutter.png", "/icons/docker.png"]
  ),

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
  new Project(
    "shopday",
    "Rewards Shopping App",
    "Mobile Development",
    ShopdayImg,
    [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/aws.png",
      "/icons/leaf.png",
    ]
  ),
];

export default allProjects;
