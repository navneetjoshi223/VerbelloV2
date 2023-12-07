import React, { useState } from "react";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import "./Admin.css";

const userData = [
    { id: 1, name: "Michael Johnson", email: "michael@example.com", coursesEnrolled: 3, isEnabled: true },
    { id: 2, name: "Emma Davis", email: "emma@example.com", coursesEnrolled: 2, isEnabled: false },
    { id: 3, name: "Christopher Brown", email: "chris@example.com", coursesEnrolled: 4, isEnabled: true },
    { id: 4, name: "Olivia Smith", email: "olivia@example.com", coursesEnrolled: 1, isEnabled: true },
    { id: 5, name: "Daniel White", email: "daniel@example.com", coursesEnrolled: 2, isEnabled: false },
    { id: 6, name: "Sophia Green", email: "sophia@example.com", coursesEnrolled: 3, isEnabled: true },
    { id: 7, name: "William Miller", email: "william@example.com", coursesEnrolled: 0, isEnabled: false },
  ];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const handleSearch = () => {
    // Implement search logic here
    // Update filteredUsers based on search term
  };

  const handleToggle = (userId) => {
    // Implement toggle logic here
    // Update user's isEnabled property in filteredUsers
  };

  return (
    <div className="admin-wrapper">
      <Navbar />
      <div className="admin-content">
        <h2 className="admin-heading">User Management</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by ID or Username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Courses Enrolled</th>
                <th>Enable/Disable</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.coursesEnrolled}</td>
                  <td>
                    <button
                      className={`toggle-button ${user.isEnabled ? 'enabled' : 'disabled'}`}
                      onClick={() => handleToggle(user.id)}
                    >
                      {user.isEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
