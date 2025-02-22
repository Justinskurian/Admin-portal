import React, { useEffect, useState } from "react";
import "./styles/AdminDash.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosinterceptors";
import { toast } from "react-toastify";

const AdminHeader = () => {
  const navigate = useNavigate();

  // State to store mentor count
  const [mentorCount, setMentorCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);



  //Getting the number of Admins
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/admin/admins")
      .then((res) => {
        setAdminCount(res.data.length); // Get the total number of admins
      })
      .catch((error) => {
        console.log("Error fetching admins:", error);
        toast.error("Failed to fetch admin data");
      });
  }, []);

  //Getting the number of mentors
  useEffect(() => {
    axiosInstance
      .get("https://project-admin-mentor-portal.onrender.com/mentor/mentors")
      .then((res) => {
        setMentorCount(res.data.length); // Get the total number of mentors
      })
      .catch((error) => {
        console.log("Error fetching mentors:", error);
        toast.error("Failed to fetch mentor data");
      });
  }, []);

  //Getting the number of Projects
  useEffect(() => {
    axiosInstance
      .get("https://project-admin-mentor-portal.onrender.com/mentor/projects")
      .then((res) => {
        setProjectCount(res.data.length); // Get the total number of projects
      })
      .catch((error) => {
        console.log("Error fetching projects:", error);
        toast.error("Failed to fetch project data");
      });
  }, []);

  // Logout function
  const handleLogout = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
      toast.success("Logged out successfully");
      window.location.href = "/login";
    } else {
      toast.error("No active session found");
      navigate("/login");
    }
  };

  // Card Data 
  const Carddata = [
    { number: projectCount, title: "Projects" },
    { number: mentorCount, title: "Mentors" },
    { number: adminCount, title: "Admins" },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="main-Heading">Admin Dashboard</h1>
        <a href="/login">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </a>
      </div>

      <div className="card-container">
        {Carddata.map((item, index) => (
          <div className="card" key={index}>
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
