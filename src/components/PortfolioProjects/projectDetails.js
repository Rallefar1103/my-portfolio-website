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
    <button onClick={() => navigate(-1)} className="back-button">
      <IoMdArrowRoundBack size="1.5em" /> Back
    </button>
  );
};

const OneMockupView = ({ descriptionOne, imageOne }) => {
  return (
    <div className="project-mockups">
      <div className="project-mockups-left">
        <div className="project-mockups-text-container">
          <h2>{descriptionOne}</h2>
        </div>
      </div>

      <div className="project-mockups-right">
        <img src={imageOne} alt="mockup-img" className="project-mockup-image" />
      </div>
    </div>
  );
};

const TwoMockupsView = ({
  imageOne,
  imageTwo,
  descriptionOne,
  descriptionTwo,
}) => {
  return (
    <>
      <div className="project-mockups">
        <div className="project-mockups-left">
          <div className="project-mockups-text-container">
            <h2>{descriptionOne}</h2>
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
            <h2>{descriptionTwo}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

const ThreeMockupsView = ({
  descriptionOne,
  imageOne,
  descriptionTwo,
  imageTwo,
  descriptionThree,
  imageThree,
}) => {
  return (
    <>
      <div className="project-mockups">
        <div className="project-mockups-left">
          <div className="project-mockups-text-container">
            <h2>{descriptionOne}</h2>
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
            <h2>{descriptionTwo}</h2>
          </div>
        </div>
      </div>

      <div className="project-mockups">
        <div className="project-three-mockups-left">
          <div className="project-mockups-text-container">
            <h2>{descriptionThree}</h2>
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

  console.log(
    `Number of presentation images for ${project.name} is: ${project.presentationImages.length}`
  );

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

      {/* Project Tagline */}
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

      {/* Project Mockups */}
      {project.presentationImages.length === 1 && (
        <OneMockupView
          descriptionOne={descriptionTagline}
          imageOne={project.presentationImages[0].image}
        />
      )}

      {project.presentationImages.length === 2 && (
        <TwoMockupsView
          descriptionOne={descriptionTagline}
          imageOne={project.presentationImages[0].image}
          descriptionTwo={descriptionTagline}
          imageTwo={project.presentationImages[1].image}
        />
      )}

      {project.presentationImages.length === 3 && (
        <ThreeMockupsView
          descriptionOne={descriptionTagline}
          imageOne={project.presentationImages[0].image}
          descriptionTwo={descriptionTagline}
          imageTwo={project.presentationImages[1].image}
          descriptionThree={descriptionTagline}
          imageThree={project.presentationImages[2].image}
        />
      )}

      {/* Project Tech Description */}
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
