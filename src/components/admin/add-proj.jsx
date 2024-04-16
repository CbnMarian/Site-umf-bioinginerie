import React, { useState } from "react";
import "./admin.css";
import Menu from "./menu";
import axios from "../admin/axiosConfig";

function AddProject() {
  const [newProject, setNewProject] = useState({
    id: "",
    projectType: "",
    projectCode: "",
    name: "",
    description: "",
  });

  const handleAddProject = async () => {
    try {
      await axios.post("http://localhost:8080/addProject", newProject);
      setNewProject({
        id: "",
        projectType: "",
        projectCode: "",
        name: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
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
            <label htmlFor="id">ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={newProject.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectType" className="left-label">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={newProject.projectType}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Projects with national funding - coordinator">
                Projects with national funding - coordinator
              </option>
              <option value="Projects with national funding - partner">
                Projects with national funding - partner
              </option>
              <option value="Internal Grants">Internal Grants</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="projectCode" className="left-label">
              Project Code
            </label>
            <input
              type="text"
              id="projectCode"
              name="projectCode"
              value={newProject.projectCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="left-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProject.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="left-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
              className="description-input"
            />
          </div>
          <button type="button" onClick={handleAddProject}>
            Publish
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProject;
