import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosinterceptors";
import "./styles/Forms.css"

const AdminAddMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [mentor, setMentor] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleAddMentor = async () => {
    if (mentor.name && mentor.email) {
      try {
        const response = await axiosInstance.post(
          "http://localhost:3000/admin/mentor/add",
          mentor
        );
        toast.success(response.data);
        console.log(response.data);
        setMentors([...mentors, mentor]);
        setMentor({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
      } catch (error) {
        console.error("Error adding mentor:", error);
        toast.error("error", error);
      }
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
          Add Mentor
        </button>
      </div>
    </div>
  );
};

export default AdminAddMentor;
