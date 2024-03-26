import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import DataProjects from "./data-projects";
import "./projects.css";

function Projects() {
  const [flipCardStates, setFlipCardStates] = useState({});

  const toggleFlip = (projectId) => {
    setFlipCardStates((prevStates) => ({
      ...prevStates,
      [projectId]: !prevStates[projectId],
    }));
  };

  return (
    <section>
      <Header />
      <div id="main">
        {Object.keys(DataProjects).map((category, index) => (
          <div key={index}>
            <h2 className="projects-title">{category}</h2>
            <div className="card-box">
              {DataProjects[category].map((project) => (
                <div
                  key={`${category}-${project.post_id}`}
                  className={`flip-card ${
                    flipCardStates[`${category}-${project.post_id}`]
                      ? "flipped"
                      : ""
                  }`}
                  onClick={() => toggleFlip(`${category}-${project.post_id}`)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <p>
                        <span>Project-Code:</span> {project.post_project_code}
                      </p>
                      <h4>{project.post_title}</h4>
                    </div>
                    <div className="flip-card-back">
                      <p> {project.post_description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Projects;
