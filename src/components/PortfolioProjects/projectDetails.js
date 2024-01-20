import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import allProjects from "../../data/allProjects";
import "./projectDetails.css";
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
      <section className="main">
        <h1>Tryotel – Cross-Platform Travel App</h1>
        <p>
          This project enables Saimon Global to reach millions of cross-platform
          mobile users to make their travel experience easier and more
          enjoyable. The Tryotel Mobile App has the fastest flight feed
          generation time among local markets and performs as one of the top OTA
          platforms in Bangladesh.
        </p>
        <div className="info">
          <div>
            <h2>Strategy</h2>
            <p>CLEAN architecture, BLoC pattern</p>
          </div>
          <div>
            <h2>Client</h2>
            <p>Saimon Global</p>
          </div>
          <div>
            <h2>Technology</h2>
            <p>Flutter</p>
          </div>
        </div>
        <button className="button">Open Project</button>
      </section>
    </div>
  );
};

export default ProjectDetails;

// return (
//   <div className="project-details">
//     <button type="button" className="back-button">
//       <IoMdArrowRoundBack size="3em" />
//     </button>
//     <h1 className="title">{project.name}</h1>
//     <p className="description">{description}</p>
//     <div className="info-sections">
//       <div className="info-block">
//         <h2>Tech Stack</h2>
//         {project.stack.map((tech, index) => (
//           <p>{tech}</p>
//         ))}
//       </div>
//     </div>
//     <button className="open-project-btn">Go to website</button>
//   </div>
// );
