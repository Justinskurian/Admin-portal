import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosinterceptors";
import "./styles/Forms.css"
import { useLocation } from "react-router-dom";


const AdminAddProject = () => {
  const location = useLocation();
  const [project, setProject] = useState({
    title: "",
    description:"",
  });
  
  // Prepopulate the form if editing
  useEffect(() => {
    if (location.state && location.state.project) {
      setProject({
        title: location.state.project.title || "",
        description:location.state.project.description || "",
      });
    } else {
      setProject({
      });
    }
  }, [location.state]);
  
  // Add or Edit Project
  const handleAddProject = () => {
    if (location.state && location.state.project && location.state.project._id) {
      // Edit Project
      axiosInstance
        .put(`https://project-admin-mentor-portal.onrender.com/admin/project/edit/${location.state.project._id}`, project)
        .then((res) => {
          toast(res.data);
        })
        .catch((error) => {
          console.error("Error updating project:", error);
        });
    } else {
      // Add project
      axiosInstance
        .post(`https://project-admin-mentor-portal.onrender.com/admin/project/add`, project)
        .then((res) => {
          toast(res.data);
        })
        .catch((error) => {
          console.error("Error adding project:", error);
        });
    }
  };

  return (
    <div>
       <div className="form-container">
          <input
            type="text"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
            placeholder="Add project topic"
          />
                    <input
            type="text"
            value={project.description}
            onChange={(e) => setProject({ ...project, description: e.target.value })}
            placeholder="Add project description"
          />
          <button onClick={handleAddProject} className="add-btn">
          {location.state ? "Update Project" : "Add Project"}
          </button>
        </div>
    </div>
  )
}

export default AdminAddProject
