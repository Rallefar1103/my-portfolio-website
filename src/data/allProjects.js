import "./project";

import FitnessInspirationImg from "../assets/fitness-app/fitness-inspo-background.png";
import TechHavenImg from "../assets/tech-haven-landing.png";
import FoodieFriendsImg from "../assets/foodie-friends-img.png";
import WasheeImg from "../assets/washee-img.png";
import LyriksImg from "../assets/lyriks.png";

let allProjects = [
  {
    id: "tech-haven",
    name: "Tech Haven Webshop",
    type: "Web Development",
    image: TechHavenImg,
    stack: [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/nextjs-icon-dark-background.png",

      "/icons/payload.jpeg",
      "/icons/leaf.png",
    ],
    githubUrl: "https://github.com/Rallefar1103/e-commerce-tech-shop",
    webUrl: "https://e-commerce-tech-shop.payloadcms.app/home",
    youtubeId: "",
  },

  {
    id: "fitness-inspiration",
    name: "Fitness Inspiration",
    type: "Web Development",
    image: FitnessInspirationImg,
    stack: [
      "/icons/js.png",
      "/icons/atom.png",
      "/icons/nodejs.png",
      "/icons/mui.png",
    ],
    githubUrl: "https://github.com/Rallefar1103/fitness-app",
    webUrl: "https://fitness-inspo-club.netlify.app/",
    youtubeId: "",
  },

  {
    id: "foodie-friends",
    name: "Foodie Friends",
    type: "Mobile Development",
    image: FoodieFriendsImg,
    stack: [
      "/icons/js.png",
      "/icons/atom.png",
      "/icons/logo-logomark.png",
      "/icons/yelp.png",
    ],
    githubUrl: "",
    webUrl: "",
    youtubeId: "",
  },

  {
    id: "washee",
    name: "Eco Laundry Assistant",
    type: "Web & Mobile Development",
    image: WasheeImg,
    stack: ["/icons/python.png", "/icons/flutter.png", "/icons/docker.png"],
    githubUrl: "",
    webUrl: "",
    youtubeId: "",
  },

  {
    id: "lyriks",
    name: "Music Player",
    type: "Web Development",
    image: LyriksImg,
    stack: [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/aws.png",
      "/icons/leaf.png",
    ],
    githubUrl: "",
    webUrl: "",
    youtubeId: "",
  },
];

export default allProjects;
