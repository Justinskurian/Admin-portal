import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosinterceptors";
import "./styles/Forms.css"
import { useLocation } from "react-router-dom";

const AdminAddMentor = () => {
  const location = useLocation();
  const [mentor, setMentor] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  
  // Prepopulate the form if editing
  useEffect(() => {
    if (location.state && location.state.mentor) {
      setMentor({
        name: location.state.mentor.name || "",
        email: location.state.mentor.email || "",
        phone: location.state.mentor.phone || "",
        password: location.state.mentor.password || "",
      });
    } else {
      setMentor({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    }
  }, [location.state]);
  
  // Add or Edit Mentor
  const handleAddMentor = () => {
    if (location.state && location.state.mentor && location.state.mentor._id) {
      // Edit mentor
      axiosInstance
        .put(`http://localhost:3000/admin/mentor/edit/${location.state.mentor._id}`, mentor)
        .then((res) => {
          toast(res.data);
        })
        .catch((error) => {
          console.error("Error updating mentor:", error);
        });
    } else {
      // Add mentor
      axiosInstance
        .post(`http://localhost:3000/admin/mentor/add`, mentor)
        .then((res) => {
          toast(res.data);
        })
        .catch((error) => {
          console.error("Error adding mentor:", error);
        });
    }
  };

  return (
    <div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Mentor Name"
          value={mentor.name}
          onChange={(e) => setMentor({ ...mentor, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={mentor.email}
          onChange={(e) => setMentor({ ...mentor, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={mentor.phone}
          onChange={(e) => setMentor({ ...mentor, phone: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={mentor.password}
          onChange={(e) => setMentor({ ...mentor, password: e.target.value })}
        />
        <button onClick={handleAddMentor} className="add-btn">
        {location.state ? "Update Mentor" : "Add Mentor"}
        </button>
      </div>
    </div>
  );
};

export default AdminAddMentor;
