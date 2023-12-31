import "./project";
import Project from "./project";

let allProjects = [
  new Project(
    "travel-planner",
    "City Travel Planner",
    "The City Travel Planner is a React web application built on a microservice architecture, designed to simplify the itinerary planning process for urban adventurers. With a tech stack that includes JavaScript, TypeScript, MongoDB Atlas, GraphQL, and integrations with the OpenAI and Yelp APIs, this application offers a responsive, intuitive and personal experience for travelers to craft their perfect day out in the city.",
    "/assets/city-travel-planner.png",
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
    "/assets/travel-planner-architecture-transp.png"
  ),
  new Project(
    "food-truck-tracker",
    "Food Truck Tracker",
    "Some description goes here..",
    "/assets/food-truck-img.png",
    [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/aws.png",
      "/icons/leaf.png",
    ]
  ),
  new Project(
    "foodie-friends",
    "Foodie Friends",
    "Some description goes here..",
    "/assets/foodie-friends-img.png",
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
    "Some description goes here..",
    "/assets/washee-img.png",
    ["/icons/python.png", "/icons/flutter.png", "/icons/docker.png"]
  ),
  new Project(
    "food-delivery",
    "Food Delivery Application",
    "Some description goes here..",
    "/assets/food-delivery-img.png",
    [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/aws.png",
      "/icons/leaf.png",
    ]
  ),
  new Project(
    "data-analytics",
    "Data Analytics Microservice",
    "Some description goes here..",
    "/assets/data-analytics-img.png",
    [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/aws.png",
      "/icons/leaf.png",
    ]
  ),
  new Project(
    "shopday",
    "Local Rewards Shopping App",
    "Some description goes here..",
    "/assets/shopday-img.png",
    [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/aws.png",
      "/icons/leaf.png",
    ]
  ),
];

export default allProjects;
