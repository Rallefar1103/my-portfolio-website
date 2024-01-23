import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { allProjects, projectDescriptions } from "../../data/allProjects";
import "./projectDetails.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import TechImage from "../../assets/project-details/tech-description-2.jpg";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="first-screen-back-button">
      <IoMdArrowRoundBack size="1.5em" /> Back
    </button>
  );
};

const extractFirstWord = (string) => {
  return string.split(" ")[0];
};

const OneMockupView = ({ header, description, image }) => {
  return (
    <div className="project-mockups">
      <div className="project-mockups-left">
        <div className="project-mockups-text-container">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="project-mockups-right">
        <img src={image} alt="mockup-img" className="project-mockup-image" />
      </div>
    </div>
  );
};

const TwoMockupsView = ({
  imageOne,
  imageTwo,
  appetizer,
  header,
  description,
}) => {
  return (
    <>
      <div className="project-mockups">
        <div className="project-mockups-left">
          <div className="project-mockups-text-container">
            <h2>{appetizer}</h2>
          </div>
        </div>

        <div className="project-mockups-right">
          <img
            src={imageOne}
            alt="mockup-img"
            className="project-mockup-image"
          />
        </div>
      </div>
      <div className="project-mockups">
        <div className="project-two-mockups-left">
          <img
            src={imageTwo}
            alt="mockup-img"
            className="project-mockup-image"
          />
        </div>

        <div className="project-two-mockups-right">
          <div className="project-mockups-text-container">
            <h2>{header}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ThreeMockupsView = ({
  appetizer,
  header,
  description,
  imageOne,
  imageTwo,
  imageThree,
}) => {
  return (
    <>
      <div className="project-mockups">
        <div className="project-mockups-left">
          <div className="project-mockups-text-container">
            <h2>{appetizer}</h2>
          </div>
        </div>

        <div className="project-mockups-right">
          <img
            src={imageOne}
            alt="mockup-img"
            className="project-mockup-image"
          />
        </div>
      </div>

      <div className="project-mockups">
        <div className="project-two-mockups-left">
          <img
            src={imageTwo}
            alt="mockup-img"
            className="project-mockup-image"
          />
        </div>

        <div className="project-two-mockups-right">
          <div className="project-mockups-text-container">
            <h2>{header}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="project-mockups">
        <div className="project-three-mockups-left">
          <div className="project-mockups-text-container">
            <h2>{header}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="project-three-mockups-right">
          <img
            src={imageThree}
            alt="mockup-img"
            className="project-mockup-image"
          />
        </div>
      </div>
    </>
  );
};

const ProjectDetailsRevisedLook = ({
  backgroundImage,
  title,
  tagline,
  tags,
}) => {
  return (
    <div className="first-screen-wrapper">
      <div className="first-screen-left">
        <BackButton />
        <img
          src={backgroundImage}
          alt="background-img"
          className="first-screen-img"
        />
      </div>
      <div className="first-screen-right">
        <div className="first-screen-title-container">
          <h1 className="first-screen-title">
            <span className="title-yellow">{extractFirstWord(title)}</span>{" "}
            {title.substring(extractFirstWord(title).length)}
          </h1>
        </div>
        <div className="tagline-container">
          <h3 className="first-screen-tagline">{tagline}</h3>
        </div>

        <div className="first-screen-tags-wrapper ">
          {tags.map((tag, index) => (
            <div className="first-screen-tag-container" key={index}>
              <p className="first-screen-tag">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  let { projectId } = useParams();
  const { pathname } = useLocation();

  const [descriptionHeader, setDescriptionHeader] = useState("");
  const [descriptionAppetizer, setDescriptionAppetizer] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTagline, setDescriptionTagline] = useState("");
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
    setDescriptionalTechnical(projectDescription.technicalDescription);
  }, [
    projectDescription.descriptionHeader,
    projectDescription.appetizer,
    projectDescription.description,
    projectDescription.tagline,
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
        <TwoMockupsView
          appetizer={descriptionAppetizer}
          header={descriptionHeader}
          imageOne={project.presentationImages[0].image}
          description={description}
          imageTwo={project.presentationImages[1].image}
        />
      )}

      {project.presentationImages.length === 3 && (
        <ThreeMockupsView
          appetizer={descriptionAppetizer}
          header={descriptionHeader}
          imageOne={project.presentationImages[0].image}
          description={description}
          imageTwo={project.presentationImages[1].image}
          imageThree={project.presentationImages[2].image}
        />
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
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
