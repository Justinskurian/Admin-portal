import React from "react";
import "./styles/AdminDash.css";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const Carddata = [
    { number: 6, title: "Projects" },
    { number: 5, title: "Mentors" },
    { number: 1, title: "Admins" },
  ];

  // Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
      toast.success("Logged out successfully");
      console.log("Redirecting to /login");
      window.location.href = "/login";
    } else {
      toast.error("No active session found");
      console.log("No token found in sessionStorage");
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="content-header">
        <h1 className="main-Heading">Admin Dashboard</h1><a href="/login">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button></a>
      </div>
      <div className="card-container">
        {Carddata.map((item) => (
          <div className="card">
            <div className="card-number">{item.number}</div>
            <div className="card-title">{item.title}</div>
          </div>
        ))}
        <div className="single-card">
          Welcome <br />
          <br />
          Admin
          <br />
          123
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
