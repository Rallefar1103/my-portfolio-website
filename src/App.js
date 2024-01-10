import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Articles from "./components/Articles/article-feed";

import "./app.css";
import { Routes, Route } from "react-router-dom";
import TravelPlannerProject from "./components/PortfolioProjects/TravelPlannerProject";
import FitnessInspirationProject from "./components/PortfolioProjects/FitnessInspirationProject";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
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
      </Routes>
    </div>
  );
}

export default App;
