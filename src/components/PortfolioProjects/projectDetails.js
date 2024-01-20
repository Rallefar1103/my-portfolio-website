import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import allProjects from "../../data/allProjects";
import "./projectDetails.css";
import BackButtonIcon from "../../assets/back-arrow.png";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProjectDetails = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === projectId);

  const { pathname } = useLocation();

  const description = "some description";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <button type="button" className="back-button">
        <IoMdArrowRoundBack size="3em" />
      </button>
      <h1 className="title">{project.name}</h1>
      <p className="description">{description}</p>
      <div className="info-sections">
        <div className="info-block">
          <h2>Tech Stack</h2>
          {project.stack.map((tech, index) => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
      <button className="open-project-btn">Go to website</button>
    </div>
  );
};

export default ProjectDetails;
