import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { marked } from "marked";
import allProjects from "../../data/allProjects";
import "./projectDetails.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import TechImage from "../../assets/project-details/tech-description-2.jpg";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      <IoMdArrowRoundBack size="1.5em" /> Back
    </button>
  );
};

const ProjectDetails = () => {
  const [projectDescription, setProjectDescription] = useState("");
  let { projectId } = useParams(); // This will match the :projectId in your route

  const project = allProjects.find((p) => p.id === projectId);

  const { pathname } = useLocation();

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const projectDescriptionPath = `/project-descriptions/${projectId}.md`;

    fetch(projectDescriptionPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((markdown) => {
        setProjectDescription(marked(markdown));
      })
      .catch((error) => {
        console.error("Failed to fetch project description:", error);
      });
  }, [projectId]);

  const extractFirstWord = (string) => {
    return string.split(" ")[0];
  };

  let projectName = project.name;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="project-details-container">
        <div className="side-bar">
          <BackButton />
        </div>
        <div className="details-content">
          <div className="title-container">
            <h1 className="title">
              {" "}
              <span className="title-yellow">
                {" "}
                {extractFirstWord(projectName)}{" "}
              </span>{" "}
              {projectName.substring(extractFirstWord(projectName).length)}
            </h1>
          </div>
          <div className="lower-details">
            <div className="tag-description-wrapper">
              <div className="tags-wrapper">
                {project.stack.map((tag, index) => (
                  <div className="tag-container" key={index}>
                    <p className="tag">{tag}</p>
                  </div>
                ))}
              </div>

              <div className="description-container">
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: projectDescription }}
                />
              </div>
              <div className="buttons-container">
                <button className="open-project-btn">Go to website</button>
                <button className="open-project-btn">Go to GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-screens">
        <div className="project-screens-left">
          <img
            src={project.backgroundImage}
            alt="background-img"
            className="project-screens-bg-image"
          />
        </div>

        <div className="project-screens-right">
          <div className="project-screens-text-container">
            <h2>Let's Build Something Together!</h2>
            <p>
              I'm all about delivering high quality results and enhancing team
              dynamics with my expertise. If you're looking for a dedicated and
              skilled engineer to help move projects forward,{" "}
              <span className="bold-white">let's</span>{" "}
              <span className="portfolio-footer-yellow">talk.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="project-tech">
        <div className="project-tech-left">
          <div className="project-tech-text-container">
            <h2>Let's Build Something Together!</h2>
            <p>
              I'm all about delivering high quality results and enhancing team
              dynamics with my expertise. If you're looking for a dedicated and
              skilled engineer to help move projects forward,{" "}
              <span className="bold-white">let's</span>{" "}
              <span className="portfolio-footer-yellow">talk.</span>
            </p>
          </div>
        </div>

        <div className="project-tech-right">
          <img
            src={TechImage}
            alt="background-img"
            className="project-tech-bg-image"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
