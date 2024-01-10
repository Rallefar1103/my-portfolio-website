import { useParams } from "react-router-dom";
import allProjects from "../../data/allProjects";
import "./TravelPlannerProject.css";
import ProjectImgUrl from "../../assets/city-travel-planner.png";
import SystemArchitectureImg from "../../assets/travel-planner-architecture-transp.png";

const TravelPlannerProject = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === "travel-planner");

  const techStack = project.techStack;

  return (
    <section id="portfolioProject">
      <h1 className="project-name">{project.title}</h1>
      <div className="portImg-container">
        <img src={ProjectImgUrl} alt="" className="portImg" />
      </div>
      <div className="tech-stack-row">
        {techStack.map((tech, _) => (
          <img src={tech} alt="ts" className="techStackImg" />
        ))}
      </div>

      <p className="project-description">
        "The City Travel Planner is a React web application built on a
        microservice architecture, designed to simplify the itinerary planning
        process for urban adventurers. With a tech stack that includes
        JavaScript, TypeScript, MongoDB Atlas, GraphQL, and integrations with
        the OpenAI and Yelp APIs, this application offers a responsive,
        intuitive and personal experience for travelers to craft their perfect
        day out in the city.",
      </p>
      <p className="project-architecture">System Architecture</p>
      <div className="portArchImg-container">
        <img src={SystemArchitectureImg} alt="" className="portArchImg" />
      </div>
      <p className="architecture-description">
        At the user interface level, the React-based frontend interfaces with a
        GraphQL server that serves as the nervous system of the application.
        This GraphQL layer orchestrates the flow of data, handling user sign-ins
        as well as initiating the itinerary planning process. <br></br>
        <br></br>Beneath this layer, a constellation of node.js microservices
        works to create the actual itinerary based on the user input. The User
        Authentication Service upholds security, interfacing with a NoSQL
        database to manage user credentials. The Core Service - with its
        dedicated NoSQL database - engages with additional microservices to
        procure and refine travel recommendations. <br></br>
        <br></br>First, the Core Service uses the Yelp Service to tap into
        restaurant data for the destination in order to suggest dining spots.
        Second, it contacts the Recommender Service, powered by the OpenAI API,
        to get a personalized itinerary description based on the user input and
        the restaurant recommendations. Together, these components form a
        resilient and scalable backend, ensuring users receive tailored travel
        plans that match their preferences and real-time local insights.
      </p>
      <p className="project-demo">Demo Video</p>
      <p className="mvp-description">
        Below is a video showing the current simplistic MVP version
      </p>
      <div className="youtube-video-container">
        <iframe
          src="https://www.youtube.com/embed/qx8Ipvjxgag"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default TravelPlannerProject;
