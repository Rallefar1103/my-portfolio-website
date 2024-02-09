import React, { useEffect, useState } from "react";
import LevelUp from "../../assets/experience/level-up.png";
import AbstractWhiteBlob from "../../assets/experience/white-blob2.svg";
import { experiences } from "../../data/allExperiences";
import "./Experience.css";

const ExperienceCard = ({ Company }) => {
  const experience = experiences.find((exp) => exp.company === Company);

  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCompany(experience.company);
    setWebsite(experience.website);
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
      <div className="card-right">
        <div className="company-row">
          <h2>{company}</h2>
          <div className="company-title-container">
            <h3>{title}</h3>
          </div>
          {website && (
            <>
              <div className="company-website-container">
                <a className="company-website" href={website}>
                  <p>Website</p>
                </a>
              </div>
            </>
          )}
        </div>
        <div className="responsibility-row">
          <div className="responsibilities-contaner">
            <p>{responsibilities}</p>
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
    <div className="experience-container" id="experience">
      <div className="experience-left">
        <div className="experience-text-container">
          <h2>
            Professional <span className="exp-yellow"> Experience</span>
          </h2>
        </div>
        {experiences.map((job, index) => (
          <ExperienceCard Company={job.company} key={job.id} />
        ))}
      </div>

      <div className="experience-right">
        <div className="experience-images-container">
          <img
            src={LevelUp}
            alt="experience-img"
            className="experience-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
