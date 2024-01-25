import "./OneMockupView.css";

const OneMockupView = ({ header, description, image }) => {
  return (
    <div className="project-mockups">
      <div className="project-mockups-left">
        <div className="project-one-mockup-text-container">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="project-mockups-right">
        <img src={image} alt="mockup-img" className="project-one-mockup-image" />
      </div>
    </div>
  );
};

export default OneMockupView;
