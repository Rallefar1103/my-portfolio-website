import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Articles from "./components/Articles/article-feed";

import "./app.css";
import { Routes, Route } from "react-router-dom";
import TravelPlannerProject from "./components/PortfolioProjects/TravelPlannerProject";
import FitnessInspirationProject from "./components/PortfolioProjects/FitnessInspirationProject";
import TechHaven from "./components/PortfolioProjects/TechHaven";
import IntroRevised from "./components/Intro/intro-revised";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <IntroRevised />
              <Skills />
              <Works />
              <Articles />
            </>
          }
        />
        <Route
          path="/projects/travel-planner"
          element={<TravelPlannerProject />}
        />
        <Route
          path="/projects/fitness-inspiration"
          element={<FitnessInspirationProject />}
        />
        <Route path="/projects/tech-haven" element={<TechHaven />} />
      </Routes>
    </div>
  );
}

export default App;
