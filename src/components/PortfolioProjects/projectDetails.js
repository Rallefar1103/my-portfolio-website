import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { allProjects, projectDescriptions } from "../../data/allProjects";
import "./projectDetails.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import TechImage from "../../assets/project-details/tech-description-2.jpg";

const mobile = "Mobile Development";
const mobileAndWeb = "Mobile & Web Development";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      <IoMdArrowRoundBack size="1.5em" /> Back
    </button>
  );
};

const ProjectDetails = () => {
  let { projectId } = useParams();
  const { pathname } = useLocation();
  const [descriptionHeader, setDescriptionHeader] = useState("");
  const [descriptionBody, setDescriptionBody] = useState("");
  const [descriptionTagline, setDescriptionTagline] = useState("");
  const [descriptionTechnical, setDescriptionalTechnical] = useState("");

  const project = allProjects.find((p) => p.id === projectId);
  const description = projectDescriptions.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setDescriptionHeader(description.descriptionHeader);
    setDescriptionBody(description.descriptionBody);
    setDescriptionTagline(description.tagline);
    setDescriptionalTechnical(description.technicalDescription);
  }, [
    description.descriptionHeader,
    description.descriptionBody,
    description.tagline,
    description.technicalDescription,
  ]);

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
                <h3>{descriptionHeader}</h3>
                <p className="description">{descriptionBody} </p>
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
            <h2>{descriptionTagline}</h2>
          </div>
        </div>
      </div>

      <div className="project-presentation">
        {project.type.includes("Mobile") ? (
          <>
            <div className="project-presentation-left">
              <div className="project-presentation-text-container">
                <h2>{descriptionTagline}</h2>
              </div>
            </div>

            <div className="project-presentation-right-mobile">
              <img
                src={project.presentationImages.first}
                alt="presentation-img"
                className="project-presentation-image-mobile"
              />
              <img
                src={project.presentationImages.second}
                alt="presentation-img"
                className="project-presentation-image-mobile"
              />
            </div>
          </>
        ) : (
          <>
            <div className="project-presentation-left">
              <img
                src={project.presentationImages.first}
                alt="presentation-img"
                className="project-presentation-image"
              />
            </div>

            <div className="project-presentation-right">
              <div className="project-presentation-text-container">
                <h2>{descriptionTagline}</h2>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="project-tech">
        <div className="project-tech-left">
          <div className="project-tech-text-container">
            <h2>
              Lets talk <span className="tech-yellow">tech!</span>
            </h2>
            <p>{descriptionTechnical}</p>
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
