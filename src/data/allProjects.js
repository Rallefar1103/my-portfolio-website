import "./project";
import CityTravelPlannerImg from "../assets/city-travel-planner.png";
import FitnessInspirationImg from "../assets/fitness-app/fitness-inspo-background.png";
import TechHavenImg from "../assets/tech-haven-landing.png";
import FoodieFriendsImg from "../assets/foodie-friends-img.png";
import WasheeImg from "../assets/washee-img.png";
import LyriksImg from "../assets/lyriks.png";

// Background Images
import CityTravelPlannerBgImg from "../assets/project-details/city-travel-planner-bg-img.jpg";
import TechHavenBgImg from "../assets/project-details/tech-haven-details-bg-img.jpg";
import FitnessInspoBgImg from "../assets/project-details/fitness-inspo-bg-img.jpg";
import FoodieFriendsBgImg from "../assets/project-details/foodie-friends-bg-img.jpg";
import WasheeBgImg from "../assets/project-details/washee-bg-img.jpg";
import LyriksBgImg from "../assets/project-details/lyriks-bg-img-2.jpg";

let allProjects = [
  {
    id: "city-travel-planner",
    name: "AI City Travel Planner",
    type: "Web Development",
    image: CityTravelPlannerImg,
    backgroundImage: CityTravelPlannerBgImg,
    stack: [
      "/icons/typescript.png",
      "/icons/atom.png",
      "/icons/nextjs-icon-dark-background.png",

      "/icons/payload.jpeg",
      "/icons/leaf.png",
    ],
    githubUrl: "https://github.com/Rallefar1103/travel-planner-project",
    webUrl: "",
    youtubeId: "",
  },
  {
    id: "tech-haven",
    name: "Tech Haven Webshop",
    type: "Web Development",
    image: TechHavenImg,
    backgroundImage: TechHavenBgImg,
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
    backgroundImage: FitnessInspoBgImg,
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
    backgroundImage: FoodieFriendsBgImg,
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
    backgroundImage: WasheeBgImg,
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
    backgroundImage: LyriksBgImg,
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
