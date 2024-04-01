import DataAdmin from "./data-admin";
import Menu from "./menu";
import "./admin.css";
import React, { useState } from "react";

function Admin() {
  const [projects, setProjects] = useState(DataAdmin);

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.project_id !== projectId
    );
    setProjects(updatedProjects);
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
                <td></td>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{project.project_id}</td>
                  <td>{project.project_title}</td>
                  <td>{project.project_category}</td>
                  <td>{project.project_status}</td>
                  <td className="edit-btn">Edit</td>
                  <td>
                    <div
                      className="delete-btn"
                      onClick={() => handleDeleteProject(project.project_id)}
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