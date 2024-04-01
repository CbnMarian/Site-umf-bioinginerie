import DataUser from "./data-users";
import React, { useState } from "react";
import Menu from "./menu";
import "./admin.css";

function AllUsers() {
  const [users, setUsers] = useState(DataUser);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.user_id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <section>
      <Menu />
      <div className="table-main">
        <h2 className="all-projects-title">All Users</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <td></td>
                <th>ID</th>
                <th>Name</th>
                <th>CV</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{user.user_id}</td>
                  <td>{user.user_name}</td>
                  <td>{user.user_cv}</td>
                  <td className="edit-btn">Edit</td>
                  <td>
                    <div
                      className="delete-btn"
                      onClick={() => handleDeleteUser(user.user_id)}
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
