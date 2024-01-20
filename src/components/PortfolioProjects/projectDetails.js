import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import allProjects from "../../data/allProjects";
import "./projectDetails.css";

const ProjectDetails = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === projectId);
  const techStack = project.techStack;

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
      <h1 className="title">{project.name}</h1>
      <p className="description">{description}</p>
      <div className="info-sections">
        <div className="info-block">
          <h2>Tech Stack</h2>
          {techStack.map((tech, index) => (
            <p>{tech}</p>
          ))}
        </div>
      </div>
      <button className="open-project-btn">Go to website</button>
    </div>
  );
};

export default ProjectDetails;
