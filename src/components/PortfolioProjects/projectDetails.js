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
  let { projectId } = useParams();
  const { pathname } = useLocation();
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTagline, setProjectTagline] = useState("");
  const [projectTechnicalDescription, setProjectTechnicalDescription] =
    useState("");

  const project = allProjects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const projectDescriptionPath = `/project-descriptions/${projectId}.txt`;

    fetch(projectDescriptionPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        // Split the text by lines
        const lines = text.split("\n");

        // Initialize content collectors
        let currentHeader = "";
        let content = {
          Description: "",
          Tagline: "",
          Technical: "",
        };

        // Process each line
        lines.forEach((line) => {
          if (line.match(/^(Description|Tagline|Technical)$/)) {
            currentHeader = line; // Set the current header
          } else if (currentHeader && line.trim() !== "") {
            content[currentHeader] += line.trim() + " ";
          }
        });

        // Set the state with the processed content
        setProjectDescription(content.Description.trim());
        setProjectTagline(content.Tagline.trim());
        setProjectTechnicalDescription(content.Technical.trim());
      })
      .catch((error) =>
        console.error("Failed to fetch project description:", error)
      );
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
                <p className="description">{projectDescription} </p>
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
            <h2>{projectTagline}</h2>
          </div>
        </div>
      </div>

      <div className="project-tech">
        <div className="project-tech-left">
          <div className="project-tech-text-container">
            <h2>Lets talk tech!</h2>
            <p>{projectTechnicalDescription}</p>
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
