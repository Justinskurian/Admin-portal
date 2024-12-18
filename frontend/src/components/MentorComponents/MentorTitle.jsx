import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";


const MentorTitle = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        sessionStorage.removeItem("token");
        toast.success("Logged out successfully");
        console.log("Redirecting to /login");
        navigate("/login");
      } else {
        toast.error("No active session found");
        console.log("No token found in sessionStorage");
        navigate("/login");
      }
    };
  return (
              <div className="dashboard-content">
          <div className="content-header">
            <h1 className="main-Heading">Mentor Dashboard</h1>
            <a href="/login">
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </a>
            </div>

      </div>
  )
}

export default MentorTitle
