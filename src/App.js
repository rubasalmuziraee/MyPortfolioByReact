import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Loader from "./Loader";
import { useDarkMood } from "./DarkMood";
import "./styles.css";

export default function App() {
  const [showExperience, setShowExperience] = useState(false);
  const toggleExperience = () => {
    setShowExperience(!showExperience);
  };

  const [showSkills, setShowSkills] = useState(false);
  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const [showProjects, setShowProjects] = useState(false);
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const [showCourses, setShowCourses] = useState(false);
  const toggleCourses = () => {
    setShowCourses(!showCourses);
  };

  const [showContact, setShowContact] = useState(false);
  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const [loading, setLoading] = useState(true);
  const { isDarkMood, toggleDarkMood } = useDarkMood();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="darkmode-toggle">
        <button onClick={toggleDarkMood}>
          {isDarkMood ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-brightness-high-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="black"
              class="bi bi-moon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            </svg>
          )}
        </button>
      </div>

      <div className={`Appcss ${isDarkMood ? "dark" : ""}`}>
        <div className="Header">
          <h1>Ruba Almuziraee</h1>
          <h2>Web Developer</h2>
          <p>
            Motivated recent graduate with a strong passion for web and mobile
            app development, eager to apply technical skills, contribute
            creatively, and grow alongside a talented team.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div>
            <nav>
              <button onClick={toggleExperience} className="sec-button">
                {showExperience ? "My Experience" : "My Experience"}
              </button>
            </nav>
            <div className={`all-containers ${showExperience ? "show" : ""}`}>
              {showExperience && <Experience />}
            </div>

            <nav>
              <button onClick={toggleSkills} className="sec-button">
                {showSkills ? "My Skills" : "My Skills"}
              </button>
            </nav>
            <div className={`all-containers ${showSkills ? "show" : ""}`}>
              {showSkills && <Skills />}
            </div>

            <nav>
              <button onClick={toggleProjects} className="sec-button">
                {showProjects ? "My Projects" : "My Projects"}
              </button>
            </nav>
            <div className={`all-containers ${showProjects ? "show" : ""}`}>
              {showProjects && <Projects />}
            </div>

            <nav>
              <button onClick={toggleCourses} className="sec-button">
                {showCourses ? "My Courses" : "My Courses"}
              </button>
            </nav>
            <div className={`all-containers ${showCourses ? "show" : ""}`}>
              {showCourses && <Courses />}
            </div>

            <nav>
              <button onClick={toggleContact} className="sec-button">
                {showContact ? "My Contact" : "My Contact"}
              </button>
            </nav>
            <div className={`all-containers ${showContact ? "show" : ""}`}>
              {showContact && <Contact />}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}
