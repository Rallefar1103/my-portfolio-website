import { useParams } from "react-router-dom";

const PortfolioProject = () => {
  let { projectId } = useParams(); // This will match the :projectId in your route

  // Logic to fetch or determine the project details based on the projectId

  return (
    <div>
      {/* Render your project details here */}
      <h1>Project: {projectId}</h1>
      {/* ... */}
    </div>
  );
};

export default PortfolioProject;
