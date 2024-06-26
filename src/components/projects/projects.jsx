import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./projects.css";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  // eslint-disable-next-line
  const [projectTypeForPNIII0937, setProjectTypeForPNIII0937] = useState("");
  const [flipCardStates, setFlipCardStates] = useState({});

  const toggleFlip = (projectId) => {
    setFlipCardStates((prevStates) => ({
      ...prevStates,
      [projectId]: !prevStates[projectId],
    }));
  };

  const loadProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/projects");
      if (response.data.length === 0) {
        setError("No projects available at the moment.");
      } else {
        setProjects(response.data);
        setError(null);

        // Find project by project code
        const projectWithCode = response.data.find(
          (project) => project.projectCode === "PN-III-P1-1.1-PD-2019-0937"
        );
        if (projectWithCode) {
          setProjectTypeForPNIII0937(projectWithCode.projectType);
        }
      }
    } catch (error) {
      setError("Please try again later: " + error.message);
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section>
      <Header />
      <div id="main">
        {loading ? (
          <div className="loader">Loading...</div> // Add loader
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            {/* Section for Projects with national funding - coordinator */}
            <h2 className="projects-title">
              Projects with national funding - coordinator
            </h2>
            <div className="card-box">
              {projects
                .filter(
                  (project) =>
                    project.projectType ===
                    "Projects with national funding - coordinator"
                )
                .map((project, index) => (
                  <div
                    key={index}
                    className={`flip-card ${
                      flipCardStates[`${project.projectCode}-${project.id}`]
                        ? "flipped"
                        : ""
                    }`}
                    onClick={() =>
                      toggleFlip(`${project.projectCode}-${project.id}`)
                    }
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <p>
                          <span>Project Code:</span> {project.projectCode}
                        </p>
                        <h4>{project.name}</h4>
                      </div>
                      <div className="flip-card-back">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Section for Projects with national funding - partner */}
            <h2 className="projects-title">
              Projects with national funding - partner
            </h2>
            <div className="card-box">
              {projects
                .filter(
                  (project) =>
                    project.projectType ===
                    "Projects with national funding - partner"
                )
                .map((project, index) => (
                  <div
                    key={index}
                    className={`flip-card ${
                      flipCardStates[`${project.projectCode}-${project.id}`]
                        ? "flipped"
                        : ""
                    }`}
                    onClick={() =>
                      toggleFlip(`${project.projectCode}-${project.id}`)
                    }
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <p>
                          <span>Project Code:</span> {project.projectCode}
                        </p>
                        <h4>{project.name}</h4>
                      </div>
                      <div className="flip-card-back">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Section for Internal Grants */}
            <h2 className="projects-title">Internal Grants</h2>
            <div className="card-box">
              {projects
                .filter((project) => project.projectType === "Internal Grants")
                .map((project, index) => (
                  <div
                    key={index}
                    className={`flip-card ${
                      flipCardStates[`${project.projectCode}-${project.id}`]
                        ? "flipped"
                        : ""
                    }`}
                    onClick={() =>
                      toggleFlip(`${project.projectCode}-${project.id}`)
                    }
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <p>
                          <span>Project Code:</span> {project.projectCode}
                        </p>
                        <h4>{project.name}</h4>
                      </div>
                      <div className="flip-card-back">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
}

export default Projects;
