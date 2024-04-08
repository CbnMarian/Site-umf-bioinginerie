import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./menu";
import "./admin.css";

function Admin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:8080/projects/${projectId}`);
      const updatedProjects = projects.filter(
        (project) => project.id !== projectId
      );
      setProjects(updatedProjects);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <section>
      <Menu />
      <div className="table-main">
        <h2 className="all-projects-title">All Projects</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Project Type</th>
                <th>Project Code</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}</td>
                  <td>{project.projectType}</td>
                  <td>{project.projectCode}</td>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>
                    <button onClick={() => handleDeleteProject(project.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Admin;
