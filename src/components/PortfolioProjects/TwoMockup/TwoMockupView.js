import "./TwoMockupView.css";

const TwoMockupView = ({ imageTwo, appetizer }) => {
  return (
    <>
      <div className="project-mockups">
        <div className="project-two-mockups-left">
          <img
            src={imageTwo}
            alt="mockup-img"
            className="project-mockup-image"
          />
        </div>

        <div className="project-two-mockups-right">
          <div className="project-two-mockups-text-container">
            <h2>{appetizer}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoMockupView;
