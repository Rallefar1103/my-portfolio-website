import { useParams } from "react-router-dom";
import allProjects from "../../data/allProjects";

const PortfolioProject = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return <div> 404 Project not found </div>;
  }

  return (
    <div>
      <h1 className="project-name">{project.title}</h1>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default PortfolioProject;
