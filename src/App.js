import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Articles from "./components/Articles/article-feed";
import PortfolioProject from "./components/PortfolioProject/portfolioProject";

import { Routes, Route } from "react-router-dom";

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
        <Route path="/projects/:projectId" element={<PortfolioProject />} />
      </Routes>
    </div>
  );
}

export default App;
