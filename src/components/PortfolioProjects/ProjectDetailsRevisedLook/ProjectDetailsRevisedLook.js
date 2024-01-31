import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./ProjectDetailsRevisedLook.css";

export const BackButton = () => {
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

export const ProjectDetailsRevisedLook = ({
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
