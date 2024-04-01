import React, { useState } from "react";
import "./admin.css";
import Menu from "./menu";

function AddProject() {
  const [newProject, setNewProject] = useState({
    project_id: "",
    project_title: "",
    project_category: "",
    project_status: "",
  });
  const handleAddProject = () => {
    console.log("Noul proiect:", newProject);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  return (
    <section>
      <Menu />
      <div className="form-container">
        <h2 className="add-project-title">Add New Project</h2>
        <form className="add-project-form">
          <div className="form-group">
            <label htmlFor="project_id">ID</label>
            <input
              type="text"
              id="project_id"
              name="project_id"
              value={newProject.project_id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="project_title">Title</label>
            <input
              type="text"
              id="project_title"
              name="project_title"
              value={newProject.project_title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="project_category">Category</label>
            <input
              type="text"
              id="project_category"
              name="project_category"
              value={newProject.project_category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="project_status">Status</label>
            <input
              type="text"
              id="project_status"
              name="project_status"
              value={newProject.project_status}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleAddProject}>
            Add Project
          </button>
        </form>
      </div>
    </section>
  );
}
export default AddProject;
