import { useParams } from "react-router-dom";
import allProjects from "../../data/allProjects";
import "./portfolioProject.css";

const PortfolioProject = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === projectId);
  const projectImageUrl = project.imgUrl;

  if (!project) {
    return <div> 404 Project not found </div>;
  }

  return (
    <section id="portfolioProject">
      <h1 className="project-name">{project.title}</h1>
      <div className="portImg-container">
        <img src={projectImageUrl} alt="" className="portImg" />
      </div>

      <p className="project-description">{project.description}</p>
    </section>
  );
};

export default PortfolioProject;
