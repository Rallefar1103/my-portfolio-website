import React, { useEffect, useState } from "react";
import DoWhatYouLove from "../../assets/experience/level-up.png";
import AbstractYellowBlob from "../../assets/experience/yellow-blob2.png";
import { experiences } from "../../data/allExperiences";
import "./Experience.css";

const ExperienceCard = ({ Company }) => {
  const experience = experiences.find((exp) => exp.company === Company);

  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState({});
  const [timeFrame, setTimeFrame] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCompany(experience.company);
    setWebsite(experience.website);
    setLogo(experience.logo);
    setTimeFrame(experience.timeFrame);
    setResponsibilities(experience.responsibilities);
    setTitle(experience.title);
  }, [
    experience.company,
    experience.website,
    experience.logo,
    experience.timeFrame,
    experience.responsibilities,
    experience.title,
  ]);

  return (
    <div className="experience-card">
      <div className="card-left">
        <p>{timeFrame}</p>
      </div>
      <div className="vertical-line"></div>
      <div className="card-right">
        <div className="company-row">
          <h2>{company}</h2>
          <div className="vertical-line"></div>
          <h3>{title}</h3>
          {website && (
            <>
              <div className="vertical-line"></div>
              <a className="company-website" href={website}>
                <p>Website</p>
              </a>
            </>
          )}
        </div>
        <div className="responsibility-row">
          <div className="responsibilities-contaner">
            <p>{responsibilities}</p>
          </div>

          <div className="company-logo-column">
            <div className="company-logo-container">
              <img src={logo} alt="company-logo" className="company-image" />
            </div>
          </div>
        </div>
        <div className="company-tech-tags">
          {experience.techTags.map((tag, index) => (
            <div className="company-tag-container" key={index}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-left">
        <div className="experience-text-container">
          <h2>
            Professional <span className="exp-yellow"> Experience</span>
          </h2>
        </div>
        {experiences.map((job, index) => (
          <ExperienceCard Company={job.company} />
        ))}
      </div>

      <div className="experience-right">
        <img
          src={DoWhatYouLove}
          alt="experience-img"
          className="experience-image"
        />
        <img
          src={AbstractYellowBlob}
          alt="yellow-blob"
          className="abstract-yellow-blob"
        />
      </div>
    </div>
  );
};

export default Experience;
