import React, { useEffect, useState } from "react";
import "./styles/AdminDash.css";
import axiosInstance from "../../axiosinterceptors";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminContent = () => {

  const [mentor, setMentor] = useState([]);

    //Get Mentor
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/mentor/mentors")
      .then((res) => {
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
const navigate=useNavigate();
  function update_mentor(mentor) {
    navigate("/addmentor", { state: { mentor } });
  }
  function update_project(project) {
    navigate("/addproject", { state: { project } });
  }

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
                <div>
  <select className="project-dropdown">
    <option value="">Assigned Projects</option>
    {data.assignedProjects.map((project) => (
      <option key={project._id} value={project._id}>
        title :{project.title}
      </option>
    ))}
  </select>
</div>
                <span>
                  <button
                    onClick={() => {
                      update_mentor(data);
                    }}
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
                                       onClick={() => {
                                        update_project(data);
                                      }}
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
