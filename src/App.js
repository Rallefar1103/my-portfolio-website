import Navbar from "./components/NavBar/navbar";
import IntroRevised from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Articles from "./components/Articles/article-feed";
import Footer from "./components/Footer/footer";
import AllProjectsPage from "./pages/allProjectsPage";

import "./app.css";
import { Routes, Route, useLocation } from "react-router-dom";

import ProjectDetails from "./components/PortfolioProjects/projectDetails";
import Experience from "./components/Experience/Experience";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <IntroRevised />
              <About />
              <Experience />
              <Skills />
              <Works />
              <Articles />
            </>
          }
        />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </div>
  );
}

export default App;
