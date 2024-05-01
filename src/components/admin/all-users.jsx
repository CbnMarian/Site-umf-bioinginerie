import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";
import Menu from "./menu";
import "./admin.css";

function AllUsers() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/allTeam");
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:8080/delete-member/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTeamMembers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleViewCv = (cvId) => {
    window.open(`http://localhost:8080/download-cv/${cvId}`, "_blank");
  };

  return (
    <section>
      <Menu />
      <div className="table-main">
        <h2 className="all-team-members-title">All Team Members</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Photo</th>
                <th>CV</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={member.id}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>
                    <img
                      src={`data:image/jpeg;base64,${member.photo}`}
                      alt={`Team Member: ${member.name}`}
                    />
                  </td>
                  <td>
                    <div
                      className="delete-btn"
                      onClick={() => handleViewCv(member.id)}
                    >
                      View CV
                    </div>
                  </td>
                  <td>
                    <div
                      className="delete-btn"
                      onClick={() => handleDeleteUser(member.id)}
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

export default AllUsers;
