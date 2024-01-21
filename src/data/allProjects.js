import "./project";
import CityTravelPlannerImg from "../assets/city-travel-planner-project-img.jpg";
import FitnessInspirationImg from "../assets/fitness-inspo-project-img.jpg";
import TechHavenImg from "../assets/tech-haven-project-img.jpg";
import FoodieFriendsImg from "../assets/foodie-friends-project-img.jpg";
import WasheeImg from "../assets/washee-img.png";
import LyriksImg from "../assets/lyriks-project-img.jpg";

// Background Images
import CityTravelPlannerBgImg from "../assets/project-details/city-travel-planner-bg-img-3.jpg";
import TechHavenBgImg from "../assets/project-details/tech-haven-bg-img-2.jpg";
import FitnessInspoBgImg from "../assets/project-details/fitness-inspo-bg-img-2.jpg";
import FoodieFriendsBgImg from "../assets/project-details/foodie-friends-bg-img-3.jpg";
import WasheeBgImg from "../assets/project-details/washee-bg-img-3.jpg";
import LyriksBgImg from "../assets/project-details/lyriks-bg-img-2.jpg";

let allProjects = [
  {
    id: "city-travel-planner",
    name: "AI City Travel Planner",
    type: "Web Development",
    image: CityTravelPlannerImg,
    backgroundImage: CityTravelPlannerBgImg,
    stack: ["React", "Typescript", "Node", "AI", "Microservices"],
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
    stack: ["React", "Next.js", "Typescript", "Payload CMS"],
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
    stack: ["React", "JavaScript", "RapidAPI", "Material UI"],
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
    stack: ["React Native", "JavaScript", "Firestore", "APIs"],
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
    stack: ["Flutter", "Dart", "Django", "Python"],
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
    stack: ["React", "JavaScript", "Tailwind", "Redux"],
    githubUrl: "",
    webUrl: "",
    youtubeId: "",
  },
];

export default allProjects;
