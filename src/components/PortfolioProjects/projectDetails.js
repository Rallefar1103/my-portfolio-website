import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { allProjects, projectDescriptions } from "../../data/allProjects";
import "./projectDetails.css";
import { ProjectDetailsRevisedLook } from "./ProjectDetailsRevisedLook/ProjectDetailsRevisedLook";
import OneMockupView from "./OneMockup/OneMockupView";
import TwoMockupView from "./TwoMockup/TwoMockupView";
import ThreeMockupView from "./ThreeMockup/ThreeMockupView";

const ProjectDetails = () => {
  let { projectId } = useParams();
  const { pathname } = useLocation();

  const [descriptionHeader, setDescriptionHeader] = useState("");
  const [descriptionAppetizer, setDescriptionAppetizer] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTagline, setDescriptionTagline] = useState("");
  const [descriptionBonus, setdescriptionBonus] = useState("");
  const [descriptionTechnical, setDescriptionalTechnical] = useState("");

  const project = allProjects.find((p) => p.id === projectId);
  const projectDescription = projectDescriptions.find(
    (p) => p.id === projectId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setDescriptionHeader(projectDescription.descriptionHeader);
    setDescriptionAppetizer(projectDescription.appetizer);
    setDescription(projectDescription.description);
    setDescriptionTagline(projectDescription.tagline);
    setdescriptionBonus(projectDescription.bonusText);
    setDescriptionalTechnical(projectDescription.technicalDescription);
  }, [
    projectDescription.descriptionHeader,
    projectDescription.appetizer,
    projectDescription.description,
    projectDescription.tagline,
    projectDescription.bonusText,
    projectDescription.technicalDescription,
  ]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <ProjectDetailsRevisedLook
        backgroundImage={project.backgroundImage}
        title={project.name}
        tags={project.stack}
        tagline={descriptionTagline}
      />
      {/* Project Mockups */}
      {project.presentationImages.length === 1 && (
        <OneMockupView
          header={descriptionHeader}
          description={description}
          image={project.presentationImages[0].image}
        />
      )}

      {project.presentationImages.length === 2 && (
        <>
          <OneMockupView
            header={descriptionHeader}
            description={description}
            image={project.presentationImages[0].image}
          />
          <TwoMockupView
            appetizer={descriptionAppetizer}
            header={descriptionHeader}
            imageOne={project.presentationImages[0].image}
            description={description}
            imageTwo={project.presentationImages[1].image}
          />
        </>
      )}

      {project.presentationImages.length === 3 && (
        <>
          <OneMockupView
            header={descriptionHeader}
            description={description}
            image={project.presentationImages[0].image}
          />
          <TwoMockupView
            appetizer={descriptionAppetizer}
            imageTwo={project.presentationImages[1].image}
          />
          <ThreeMockupView
            header={descriptionBonus}
            imageThree={project.presentationImages[2].image}
          />
        </>
      )}
      {/* Project Tech Description */}
      <div className="project-tech">
        <div className="tech-details-content">
          <div className="tech-title-container">
            <h1 className="tech-title">
              Lets talk
              <span className="title-yellow"> Tech!</span>
            </h1>
          </div>
          <div className="tech-call-to-action">
            <p>
              If you have any questions regarding this project, feel free to
              reach me directly or check out the GitHub page!
            </p>
          </div>
          <div className="buttons-row-container">
            <a
              href="mailto:rasmus.henriksen@live.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="get-in-touch">
                Get in touch
              </button>
            </a>
            <a
              href="https://github.com/Rallefar1103?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="get-in-touch">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
