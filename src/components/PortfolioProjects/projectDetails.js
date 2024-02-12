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

  const [slogan, setSlogan] = useState("");
  const [challenge, setChallenge] = useState("");
  const [challengeDescription, setChallengeDescription] = useState("");
  const [solution, setSolution] = useState("");
  const [solutionDescription, setSolutionDescription] = useState("");
  const [extraText, setExtraText] = useState("");

  const project = allProjects.find((p) => p.id === projectId);
  const projectDescription = projectDescriptions.find(
    (p) => p.id === projectId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setSlogan(projectDescription.slogan);
    setChallenge(projectDescription.challenge);
    setChallengeDescription(projectDescription.challengeDescription);
    setSolution(projectDescription.solution);
    setSolutionDescription(projectDescription.solutionDescription);
    setExtraText(projectDescription.extraText);
  }, [
    projectDescription.slogan,
    projectDescription.challenge,
    projectDescription.challengeDescription,
    projectDescription.solution,
    projectDescription.solutionDescription,
    projectDescription.extraText,
  ]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div section="project-details-section">
      <ProjectDetailsRevisedLook
        backgroundImage={project.backgroundImage}
        title={project.name}
        tags={project.stack}
        tagline={slogan}
      />
      {/* Project Mockups */}
      {project.presentationImages.length === 1 && (
        <OneMockupView
          challenge={challenge}
          challengeDescription={challengeDescription}
          image={project.presentationImages[0].image}
        />
      )}

      {project.presentationImages.length === 2 && (
        <>
          <OneMockupView
            challenge={challenge}
            challengeDescription={challengeDescription}
            image={project.presentationImages[0].image}
          />
          <TwoMockupView
            solution={solution}
            solutionDescription={solutionDescription}
            imageTwo={project.presentationImages[1].image}
          />
        </>
      )}

      {project.presentationImages.length === 3 && (
        <>
          <OneMockupView
            challenge={challenge}
            challengeDescription={challengeDescription}
            image={project.presentationImages[0].image}
          />
          <TwoMockupView
            solution={solution}
            solutionDescription={solutionDescription}
            imageTwo={project.presentationImages[1].image}
          />
          <ThreeMockupView
            extraText={extraText}
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
          <div className="call-to-action-button-container">
            <a
              href="mailto:rasmus.henriksen@live.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="get-in-touch-btn">
                Get in touch
              </button>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="get-in-touch-btn">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
