import React, { useState } from "react";
import "./admin.css";
import Menu from "./menu";
import axios from "../admin/axiosConfig";

function AddUser() {
  const [newUser, setNewUser] = useState({
    name: "",
    photo: null,
    cv: null,
  });
  const [error, setError] = useState("");

  const handleAddUser = async () => {
    try {
      if (!newUser.name || !newUser.photo || !newUser.cv) {
        setError("Please fill in all fields: name, photo, and CV.");
        return;
      }

      const formData = new FormData();
      formData.append("name", newUser.name);
      formData.append("photo", newUser.photo);
      formData.append("cv", newUser.cv);

      await axios.post("http://localhost:8080/saveTeamMember", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setNewUser({
        name: "",
        photo: null,
        cv: null,
      });
      setError("");
      document.getElementById("photo").value = "";
      document.getElementById("cv").value = "";
    } catch (error) {
      console.error("Error adding user:", error);
      setError("Failed to add user. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo" || name === "cv") {
      setNewUser({
        ...newUser,
        [name]: files[0],
      });
    } else {
      setNewUser({
        ...newUser,
        [name]: value,
      });
    }
  };

  return (
    <section>
      <Menu />
      <div className="form-container">
        <h2 className="add-user-title">Add New User</h2>
        <form className="add-user-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cv">CV</label>
            <input type="file" id="cv" name="cv" onChange={handleChange} />
          </div>
          <div
            className="error-message"
            style={{ color: "red", marginTop: "10px" }}
          >
            {error}
          </div>
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddUser;
