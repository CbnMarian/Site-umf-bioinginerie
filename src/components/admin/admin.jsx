import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";
import Menu from "./menu";
import "./admin.css";

function Admin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleDeleteProject = async (projectName) => {
    console.log("Project Name:", projectName);
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(
        `http://localhost:8080/deleteProjectByName/${projectName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.name !== projectName)
      );
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
                <th>Delete Project</th>
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
                    <div
                      className="delete-btn"
                      onClick={() => handleDeleteProject(project.name)}
                    >
                      Delete
                    </div>
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
