import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import allProjects from "../../data/allProjects";
import ProjectImgUrl from "../../assets/fitness-inspo-frontpage.png";
import "./FitnessInspirationProject.css";

const FitnessInspirationProject = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === "fitness-inspiration");
  const techStack = project.techStack;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        The Fitness Inspiration application is a React web application built
        using JavaScript, Material UI and Node.js. It's designed to help you
        ramp up your next workout by tapping into the ExerciseDB API and give
        you a huge selection of more than 1000 exercises divided into
        muscle-group categories to fuel your inspiration and try new exercises
        in the gym. Search for a muscle group or a specific exercise and the app
        will show you all the recommended movements. Click on an exercise and
        get more details on how to perform it, what it targets and watch videos
        to ensure proper form!
      </p>

      <p className="project-demo">Demo Video</p>
      <p className="mvp-description">
        Below is a video showing the current version
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

export default FitnessInspirationProject;
