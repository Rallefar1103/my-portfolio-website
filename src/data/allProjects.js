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

// Presentation Images

// Fitness Inspo
// import FitnessInspoLandingPage from "../assets/project-details/fitness-inspo/fitness-landing-page.png";
// import FitnessInspoExplorePage from "../assets/project-details/fitness-inspo/explore-exercises.png";

// Tech-Haven
import TechHavenLandingPage from "../assets/project-details/tech-haven/tech-haven-landing-page.png";
import TechHavenProductsPage from "../assets/project-details/tech-haven/tech-haven-product-page.png";
import TechHavenSignInPage from "../assets/project-details/tech-haven/tech-haven-sign-in.png";

// City Travel Planner

// Foodie Friends

// Lyriks
import LyriksLandingPage from "../assets/project-details/lyriks/lyriks-main-page.png";
import LyriksArtistPage from "../assets/project-details/lyriks/lyriks-artist-page.png";

// Eco Laundry Assistant
import WasheeMockUps from "../assets/project-details/washee/washee-mockups.png";

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
    presentationImages: {
      first: TechHavenLandingPage,
      second: TechHavenProductsPage,
      third: TechHavenSignInPage,
    },
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
    presentationImages: {
      first: WasheeMockUps,
    },
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
    presentationImages: {
      first: LyriksLandingPage,
      second: LyriksArtistPage,
    },
  },
];

let projectDescriptions = [
  {
    id: "city-travel-planner",
    descriptionHeader:
      "Embark on unforgettable urban adventures with the AI City Travel Planner!",
    descriptionBody:
      "This innovative web application revolutionizes city exploration by tailoring itineraries to your unique preferences. Enter your trip duration, budget, desired destinations, dining choices, and attractions, and our AI system skillfully crafts a personalized journey. Experience a new way of travel planning, where technology meets your travel aspirations, making every city visit uniquely yours. Venture beyond the beaten path as AI City Travel Planner becomes your personal digital concierge. Seamlessly integrating technology with spontaneity, every trip becomes a story worth telling.",
    tagline: "Explore Cities Smartly with AI-Powered Itineraries",
    technicalDescription: "Tech tech tech",
  },

  {
    id: "tech-haven",
    descriptionHeader:
      "Tech Haven is more than just a webshop; it's an experience for tech enthusiasts!",
    descriptionBody:
      "Our carefully curated collection showcases the finest and most innovative technology products. With an emphasis on sleek design and high functionality, Tech Haven is the ultimate destination for discovering groundbreaking gadgets. Dive into a world where each item promises to transform your tech lifestyle. With Tech Haven, visionary tech meets practical magic. Our mission is to ignite your imagination with gadgets that push the boundaries of what's possible.",
    tagline: "Ignite Your Imagination, Unleash Innovation",
    technicalDescription: "Tech Tech Tech",
  },

  {
    id: "fitness-inspiration",
    descriptionHeader:
      "Transform your fitness journey with our Fitness Inspiration Website!",
    descriptionBody:
      "Packed with over 1000 exercises and instructional videos, this platform is your gateway to crafting the perfect workout plan. Whether you're a beginner or a seasoned athlete, our vast library offers fresh ideas to keep your routines exciting and effective. Elevate your fitness ethos with our platform as your digital personal trainer, nutritionist, and motivator—all rolled into one. Step into the realm of peak performance and holistic well-being with Fitness Inspiration. Get inspired, stay motivated, and unleash your fitness potential!",
    tagline: "Transform Workouts, Ignite Motivation",
    technicalDescription: "Tech Tech Tech",
  },

  {
    id: "foodie-friends",
    descriptionHeader:
      "Foodie Friends is more than an app; it's a social dining sensation!",
    descriptionBody:
      "Swipe right on intriguing restaurants, and when someone nearby shares your interest, we'll link you up for a meal out. It's about new flavors, new friendships, and shared culinary adventures in your area. Join the community where food meets friendship, and dining out turns into a delightful social experience. Foodie Friends is your ticket to a world of culinary discovery, where each meal is an opportunity for connection and adventure.",
    tagline: "Dine, Meet, Repeat: Socialize with Taste",
    technicalDescription: "Tech Tech Tech",
  },

  {
    id: "washee",
    descriptionHeader:
      "Embrace eco-friendly living with the Eco Laundry Assistant!",
    descriptionBody:
      "This smartphone application guides you on the optimal times to do your laundry, based on wind energy availability in the grid. Save money and reduce your carbon footprint by syncing your laundry schedule with green energy peaks. By leveraging real-time data and predictive analytics, the Eco Laundry Assistant ensures that eco-conscious living is not only beneficial for the world but also convenient for your lifestyle. It's not just about clean clothes; it's about a cleaner planet. The Eco Laundry Assistant is where responsibility meets innovation, empowering you to make a difference with every load.",
    tagline: "Eco-Friendly Laundry, One Load at a Time",
    technicalDescription: "Tech Tech Tech",
  },

  {
    id: "lyriks",
    descriptionHeader:
      "Enter the world of Lyriks, where music discovery takes a front seat.",
    descriptionBody:
      "Our state-of-the-art web application offers an immersive experience to explore new and popular music across genres. Filter, find, and fall in love with sounds that resonate with your soul. Lyriks isn't just a music player; it's a journey through the world of melody, rhythm, and beyond. Delve into the symphony of the digital age with Lyriks, where every click leads to a new musical horizon. It's not just about listening—it's about experiencing the soundtrack of your life in full harmony.",
    tagline: "Where Every Beat Tells a Story",
    technicalDescription: "Tech Tech Tech",
  },
];

export { allProjects, projectDescriptions };
