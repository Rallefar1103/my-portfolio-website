import "./ThreeMockupView.css";

const ThreeMockupView = ({ extraText, imageThree }) => {
  return (
    <>
      <div className="project-mockups">
        <div className="project-three-mockups-left">
          <div className="project-three-mockups-text-container">
            <h2>{extraText}</h2>
          </div>
        </div>

        <div className="project-three-mockups-right">
          <img
            src={imageThree}
            alt="mockup-img"
            className="project-three-mockup-image"
          />
        </div>
      </div>
    </>
  );
};

export default ThreeMockupView;
