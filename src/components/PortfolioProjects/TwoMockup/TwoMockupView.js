import "./TwoMockupView.css";

const TwoMockupView = ({ solution, solutionDescription, imageTwo }) => {
  return (
    <>
      <div className="project-mockups-second">
        <div className="project-two-mockups-left">
          <img
            src={imageTwo}
            alt="mockup-img"
            className="project-two-mockup-image"
          />
        </div>

        <div className="project-two-mockups-right">
          <div className="project-two-mockups-text-container">
            <p className="solution">THE SOLUTION</p>
            <h2>{solution}</h2>
            <p className="solution-description">{solutionDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoMockupView;
