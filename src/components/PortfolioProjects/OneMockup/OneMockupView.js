import "./OneMockupView.css";

const OneMockupView = ({ challenge, challengeDescription, image }) => {
  return (
    <div className="project-mockups-first">
      <div className="project-mockups-left">
        <div className="project-one-mockup-text-container">
          <p className="the-challenge">THE CHALLENGE</p>
          <h2>{challenge}</h2>
          <p className="challenge-description">{challengeDescription}</p>
        </div>
      </div>

      <div className="project-mockups-right">
        <img
          src={image}
          alt="mockup-img"
          className="project-one-mockup-image"
        />
      </div>
    </div>
  );
};

export default OneMockupView;
