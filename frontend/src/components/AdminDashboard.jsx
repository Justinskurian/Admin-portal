import React, { useState } from "react";
import "../AdminDashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AdminDashboard = ({child}) => {
  const [projectTopics, setProjectTopics] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mentor, setMentor] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    projectTopic: "",
  });
  const [topicName, setTopicName] = useState("");

  // Add project topic
  const handleAddTopic = async () => {
    if (topicName) {
      try {
        const response = await axios.post("http://localhost:3000/admin/project/add", {
          title: topicName
        });
        console.log(response.data);
        setProjectTopics([...projectTopics, { title: topicName }]);
        setTopicName("");
      } catch (error) {
        toast.error("error")
        console.error("Error adding project topic:", error);
      }
    }
  };

  // Delete project topic
  const handleDeleteTopic = async (index) => {
    const topicId = projectTopics[index]._id; // Assuming `projectTopics` contains `_id`
    try {
      await axios.delete(`http://localhost:3000/admin/project/del/${topicId}`);
      setProjectTopics(projectTopics.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting project topic:", error);
    }
  };

  // Add mentor
  const handleAddMentor = async () => {
    if (mentor.name && mentor.email ) {
      try {
        const response = await axios.post(
          "http://localhost:3000/admin/mentor/add",
          mentor
        );
        toast.success(response.data)
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
        toast.error('error',error)
      }
    }
  };

  // Delete mentor
  const handleDeleteMentor = async (index) => {
    const mentorId = mentors[index]._id;
    try {
      await axios.delete(`http://localhost:3000/admin/mentor/del/${mentorId}`);
      setMentors(mentors.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting mentor:", error);
    }
  };

  // Logout
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    toast("Logged out");
    window.location.href = "/login";
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <Link to={"/login"}>
        {" "}
        <button
          className="logout-btn"
          onClick={() => {
            sessionStorage.removeItem("token");
          }}
        >
          Logout
        </button>
      </Link>

      <section>
        <h3>Project Topics</h3>
        <ul>
          {projectTopics.map((topic, index) => (
            <li key={index}>
              {topic}
              <button
                onClick={() => handleDeleteTopic(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="form-container">
          <input
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            placeholder="Add new project topic"
          />
          <button onClick={handleAddTopic} className="add-btn">
            Add Topic
          </button>
        </div>
      </section>

      <section>
        <h3>Mentors</h3>
        <ul>
          {mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name} - {mentor.projectTopic}
              <button
                onClick={() => handleDeleteMentor(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
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
      </section>
      {child}
    </div>
  );
};
export default AdminDashboard;
