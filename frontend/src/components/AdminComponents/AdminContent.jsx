import React, { useEffect, useState } from "react";
import "./styles/AdminDash.css";
import axiosInstance from "../../axiosinterceptors";
import { toast } from "react-toastify";

const AdminContent = () => {
  //Get Mentor
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/mentor/mentors")
      .then((res) => {
        console.log(res);
        setMentor(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Delete Mentor
  const handleDeleteMentor = async (id) => {
    axiosInstance
      .delete(`http://localhost:3000/admin/mentor/del/${id}`)
      .then((res) => {
        toast(res.data);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.log("Error deleting", error);
        toast.error("Error deleting mentor");
      });
  };

  //Get Project
  const [project, setProject] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/mentor/projects")
      .then((res) => {
        console.log(res);
        setProject(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Delete Project
  const handleDeleteProject = async (id) => {
    axiosInstance
      .delete(`http://localhost:3000/admin/project/del/${id}`)
      .then((res) => {
        toast(res.data);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.log("Error deleting", error);
        toast.error("Error deleting project");
      });
  };

  return (
    <div>

      {/* Mentor and Project Listing */}
      <div className="both-list">
        {/* Mentor List */}
        <div className="mentor-list">
          <div className="list-header">
            <h2>Mentors</h2>
          </div>
          <div className="list-container">
            {mentor.map((data) => (
              <div className="list">
                <div className="mentor-details">
                  <h3>{data.name}</h3>
                </div>
                <span>
                  <button
                    onClick={() => handleDeleteMentor(index)}
                    className="edit-btn"
                  >
                    Edit
                  </button>{" "}
                  &nbsp;&nbsp;&nbsp;{" "}
                  <button
                    onClick={() => handleDeleteMentor(data._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Project List      */}
        <div className="mentor-list">
          <div className="list-header">
            <h2>Projects</h2>
          </div>
          <div className="list-container">
            {project.map((data) => (
              <div className="list">
                <div className="mentor-details">
                  <h3>{data.title}</h3>
                </div>
                <span>
                  <button
                    onClick={() => handleDeleteMentor(index)}
                    className="edit-btn"
                  >
                    Edit
                  </button>{" "}
                  &nbsp;&nbsp;&nbsp;{" "}
                  <button
                    onClick={() => handleDeleteProject(data._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
