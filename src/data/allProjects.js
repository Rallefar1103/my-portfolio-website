import "./project";
import CityTravelPlannerImg from "../assets/city-travel-planner-project-img.jpg";
import GroupShareImg from "../assets/groupshare-details-img.jpg";
import CamperProjectImage from "../assets/camper-project-image.jpg";
import TechHavenImg from "../assets/tech-haven-project-img.jpg";
import FoodieFriendsImg from "../assets/foodie-friends-project-img.jpg";
import JetSetImg from "../assets/project-details/jetset/jetset-img.jpg";
import WasheeImg from "../assets/washee-img.png";
import LyriksImg from "../assets/lyriks-project-img.jpg";

// Background Images
import CityTravelPlannerBgImg from "../assets/project-details/city-travel-planner-bg-img-3.jpg";
import TechHavenBgImg from "../assets/project-details/tech-haven-bg-img-2.jpg";
import CamperBackgroundImage from "../assets/project-details/camper/camper-details-image.jpg";
import FoodieFriendsBgImg from "../assets/project-details/foodie-friends-bg-img-3.jpg";
import WasheeBgImg from "../assets/project-details/washee-bg-img-3.jpg";
import LyriksBgImg from "../assets/project-details/lyriks-bg-img-2.jpg";
import QuantumSimBgImg from "../assets/allProjectsPage/quantum-sim-img.jpg";
import GroupHubBgImg from "../assets/allProjectsPage/grouphub-img.jpg";
import JetSetBgImg from "../assets/project-details/jetset/modern-woman-private-jet copy.jpg";
import AStepBgImg from "../assets/allProjectsPage/astep-img.jpg";
import CO2BgImg from "../assets/allProjectsPage/co2-sensing-img.jpg";
import GCodeBgImg from "../assets/allProjectsPage/g-code-img.jpg";
import JFreeChartBgImg from "../assets/allProjectsPage/jfree-charts-img.jpg";
import LoRaBgImg from "../assets/allProjectsPage/LoRa-img.jpg";
import TTRegApp from "../assets/allProjectsPage/turftank-reg-img.jpg";
import GroupShareBgImg from "../assets/groupshare-img.jpg";

// Camping
import CamperLandingPage from "../assets/project-details/camper/camper-landing-yellow-bg.png";
import CamperFeaturePage from "../assets/project-details/camper/camper-feature-dark-bg.png";

// Tech-Haven
import TechHavenLandingPage from "../assets/project-details/tech-haven/tech-haven-landing-page-dark-bg.png";
import TechHavenProductsPage from "../assets/project-details/tech-haven/tech-haven-product-page.png";
import TechHavenSignInPage from "../assets/project-details/tech-haven/tech-haven-sign-in.png";

// City Travel Planner
import CTPLandingPage from "../assets/project-details/city-travel-planner/ctp-landing-page.png";

// Jetset
import JetsetLandingPage from "../assets/project-details/jetset/jetset-mockup1.png";
import JetsetFFP from "../assets/project-details/jetset/jetset-mockup2.png";
import JetsetSubPlan from "../assets/project-details/jetset/jetset-mockup3.png";

// Lyriks
import LyriksLandingPage from "../assets/project-details/lyriks/lyriks-main-page.png";
import LyriksArtistPage from "../assets/project-details/lyriks/lyriks-artist-page.png";

// Eco Laundry Assistant
import WasheeMockUps from "../assets/project-details/washee/washee-mockups.png";
import WasheeTimeSlots from "../assets/project-details/washee/washee-timeslots-page.png";
import WasheeSmartphone from "../assets/project-details/washee/jonas-leupe-8pCtwj37VB4-unsplash.jpg";
let allProjects = [
  {
    id: "group-share",
    name: "Group Share",
    type: "Mobile Development",
    image: GroupShareBgImg,
    backgroundImage: GroupShareImg,
    stack: ["React Native", "Typescript", "Node", "Cloud"],
    githubUrl: "https://github.com/Rallefar1103/group-share",
    webUrl: "",
    youtubeId: "",
    presentationImages: [{ image: CTPLandingPage }],
  },
  {
    id: "jetset",
    name: "Jetset",
    type: "Web Development",
    image: JetSetImg,
    backgroundImage: JetSetBgImg,
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Rallefar1103/jetset",
    webUrl: "",
    youtubeId: "",
    presentationImages: [
      {
        image: JetsetLandingPage,
      },
      {
        image: JetsetFFP,
      },
      {
        image: JetsetSubPlan,
      },
    ],
  },
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
    presentationImages: [{ image: CTPLandingPage }],
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
    presentationImages: [
      {
        image: TechHavenLandingPage,
      },
      { image: TechHavenProductsPage },
      { image: TechHavenSignInPage },
    ],
  },

  {
    id: "camper-travel-app",
    name: "Camping Guide",
    type: "Web Development",
    image: CamperProjectImage,
    backgroundImage: CamperBackgroundImage,
    stack: ["React", "Next.js", "Tailwind", "Typescript"],
    githubUrl: "https://github.com/Rallefar1103/camping-app",
    webUrl: "https://fitness-inspo-club.netlify.app/",
    youtubeId: "",
    presentationImages: [
      { image: CamperLandingPage },
      { image: CamperFeaturePage },
    ],
  },

  {
    id: "washee",
    name: "Eco Laundry Assistant",
    type: "Web & Mobile Development",
    image: WasheeImg,
    backgroundImage: WasheeBgImg,
    stack: ["Flutter", "Dart", "Django", "Python"],
    githubUrl: "https://github.com/Rallefar1103/Bachelor-s-Project---Washee",
    webUrl: "",
    youtubeId: "",
    presentationImages: [
      {
        image: WasheeTimeSlots,
      },
      {
        image: WasheeMockUps,
      },
      {
        image: WasheeSmartphone,
      },
    ],
  },

  {
    id: "lyriks",
    name: "Music Player",
    type: "Web Development",
    image: LyriksImg,
    backgroundImage: LyriksBgImg,
    stack: ["React", "JavaScript", "Tailwind", "Redux"],
    githubUrl: "https://github.com/Rallefar1103/spotify-two-point-O",
    webUrl: "",
    youtubeId: "",
    presentationImages: [
      {
        image: LyriksLandingPage,
      },
      { image: LyriksArtistPage },
    ],
  },

  // All Projects Page
  {
    id: "quantum-simulator",
    name: "Quantum Computer Simulator",
    type: "Desktop Development",
    image: QuantumSimBgImg,
    backgroundImage: QuantumSimBgImg,
    githubUrl: "https://github.com/Rallefar1103/Quantum-Computer-Simulator",
  },
  {
    id: "grouphub",
    name: "GroupHub Learning Platform",
    type: "Web Development",
    image: GroupHubBgImg,
    backgroundImage: GroupHubBgImg,
    githubUrl: "https://github.com/Rallefar1103/GroupHub-platform",
  },
  {
    id: "turf-tank-reg-app",
    name: "Robot Registration Application",
    type: "Mobile Development",
    image: TTRegApp,
    backgroundImage: TTRegApp,
    githubUrl: "https://github.com/Rallefar1103/TurfTank_registration_app",
  },
  {
    id: "foodie-friends",
    name: "Foodie Friends",
    type: "Mobile Development",
    image: FoodieFriendsImg,
    backgroundImage: FoodieFriendsBgImg,
    stack: ["React Native", "JavaScript", "Firebase", "Firestore"],
    githubUrl: "https://github.com/Rallefar1103/jetset",
    webUrl: "",
    youtubeId: "",
  },
  {
    id: "jfree-chart",
    name: "JFreeChart Java Library",
    type: "Open Source",
    image: JFreeChartBgImg,
    backgroundImage: JFreeChartBgImg,
    githubUrl: "https://github.com/Rallefar1103/jfreechartdlf",
  },
  {
    id: "co2-sensing",
    name: "CO2-Sensing Application",
    type: "Mobile Development",
    image: CO2BgImg,
    backgroundImage: CO2BgImg,
    githubUrl: "https://github.com/Rallefar1103/CO2-Sensing-Application",
  },
  {
    id: "astep",
    name: "ML Traffic Optimization",
    type: "Microservice Web Application",
    image: AStepBgImg,
    backgroundImage: AStepBgImg,
    githubUrl: "https://github.com/Rallefar1103/TNMWeighterDailyTrucksCount",
  },
  {
    id: "gcode",
    name: "Optimized G-code",
    type: "Compiler",
    image: GCodeBgImg,
    backgroundImage: GCodeBgImg,
    githubUrl: "https://github.com/Rallefar1103/Optimized-G-code",
  },
  {
    id: "lora",
    name: "LoRa Over The Air",
    type: "Web Development",
    image: LoRaBgImg,
    backgroundImage: LoRaBgImg,
    githubUrl: "https://github.com/Rallefar1103/LoRa-OTA-Firmware",
  },
];

let projectDescriptions = [
  {
    id: "group-share",
    slogan: "",
    challenge: "LINKS AND IMAGES GET LOST IN GROUP CHATS",
    challengeDescription:
      "Group chat apps are not designed to navigate links, images or other sorts of data you share with your friends, resulting in them getting lost over time",
    solution: "SMARTPHONE APP DESIGNED TO SHARE WITH YOUR FRIENDS",
    solutionDescription:
      "Group Share is designed to make a group with your friends, but instead of providing a chat service, we provide a crisp and easy interface to keep track of everything you share",
    extraText:
      "With Group Share, staying up to date on every recommendation has never been easier!",
  },

  {
    id: "city-travel-planner",
    slogan:
      "Embark on unforgettable urban adventures with the AI City Travel Planner!",
    challenge: "TOO MANY TRAVEL SITES",
    challengeDescription:
      "Navigating through a plethora of travel sites can be overwhelming, making the quest for the perfect urban experience a daunting task.",
    solution: "TRAVEL SITES AND AI IN ONE PLACE",
    solutionDescription:
      "By integrating top travel sites with innovative AI, we bring personalized travel planning right to your fingertips",
    extraText:
      "Our AI City Travel Planner offers a curated urban adventure, streamlined for discovery and simplicity",
  },

  {
    id: "tech-haven",
    slogan:
      "Tech Haven is more than just a webshop, it's an experience for tech enthusiasts!",

    challenge: "TECH WEBSHOPS ARE CLUTTERED",
    challengeDescription:
      "Today's online tech marketplaces are often overcomplicated, making finding your next gadget feel like searching for a needle in a haystack",
    solution: "USER-CENTRIC TECH MARKETPLACE",
    solutionDescription:
      "Tech Haven presents a sleek, minimalist approach, allowing you to find, compare, and purchase the latest tech with ease",
    extraText:
      "Experience the joy of tech shopping with an interface designed for clarity, speed, and an intuitive journey",
  },

  {
    id: "camper-travel-app",
    slogan: "Where Open Roads and Freedom Meet",

    challenge: "THERE IS NO TRAVEL SITE FOR CAMPERS",
    challengeDescription:
      "The nomadic spirit of camping is often hindered by a lack of dedicated online resources that understand and cater to the unique needs of camper enthusiasts",
    solution: "All-IN-ONE CAMPSITE PLATFORM",
    solutionDescription:
      "Our Camper Travel App provides a streamlined, user-friendly platform that connects campers to camp-friendly sites, routes, and communities, making the planning part of the adventure just as enjoyable",
    extraText:
      "Embark on your next escapade with confidence, as our app guides you to the best camping experiences, tailored to your preferences and vehicle specifications",
  },
  {
    id: "washee",
    slogan: "Embrace eco-friendly living with the Eco Laundry Assistant!",

    challenge: "DON'T STRESS THE GRID DURING PEAK HOURS",
    challengeDescription:
      "Managing laundry during peak hours strains resources and your wallet, with little regard for environmental impact",
    solution: "BOOKING SYSTEM WITH ECO-FAVORABLE TIMES",
    solutionDescription:
      "Our Eco Laundry Assistant promotes off-peak usage through a smart booking system, balancing convenience and sustainability",
    extraText:
      "Join the eco-friendly revolution, where each load of laundry contributes to a greener tomorrow",
  },

  {
    id: "lyriks",
    descriptionHeader:
      "Enter the world of Lyriks, where music discovery takes a front seat.",
    challenge: "SPOTIFY IS HARD TO NAVIGATE",
    challengeDescription:
      "Finding new music on existing platforms can be a labyrinthine experience, deterring even the most avid music lovers",
    solution: "EASY-TO-NAVIGATE WEB APP",
    solutionDescription:
      "Lyriks offers a user-friendly interface that puts discovery, organization, and enjoyment at the forefront of your music experience",
    extraText:
      "Dive into a world where your next favorite song is just a click away, and the journey to it is as harmonious as the music itself",
  },
  {
    id: "jetset",
    slogan: "First class comfort in your carry-on",
    challenge: "NO TRAVEL KIT SUBSCRIPTION SERVICE",
    challengeDescription:
      "Travel enthusiasts lack a dedicated service that combines the convenience of a subscription service with the necessity of hight quality travel kits",
    solution: "JETSET FREQUENT FLYER PROGRAM",
    solutionDescription:
      "Our Frequent Flyer Program is the first of its kind, offering a subscription-based luxury travel kit service tailored for the avid travele",
    extraText:
      "Elevate your travel game with JetSet, where every trip is an opportunity to indulge in comfort and convenience",
  },
];

export { allProjects, projectDescriptions };
