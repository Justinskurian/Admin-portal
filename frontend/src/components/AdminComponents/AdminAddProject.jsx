import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosinterceptors";
import "./styles/Forms.css"


const AdminAddProject = () => {

    const [topicName, setTopicName] = useState("");
    const [projectTopics, setProjectTopics] = useState("");

    // Add project topic
    const handleAddTopic = async () => {
      if (topicName) {
        try {
          const response = await axiosInstance.post("http://localhost:3000/admin/project/add", {
            title: topicName
          });
          setProjectTopics([...projectTopics, topicName]);
          toast.success(response.data)
          setTopicName({title:""});
        } catch (error) {
          toast.error("Error adding project topic")
          console.error("Error adding project topic:", error);
        }
      }
    };

  return (
    <div>
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
    </div>
  )
}

export default AdminAddProject
