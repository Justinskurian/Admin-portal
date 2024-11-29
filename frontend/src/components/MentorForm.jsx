import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [projectTopics, setProjectTopics] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mentor, setMentor] = useState({ name: '', email: '', phone: '', password: '', projectTopic: '' });
  const [topicName, setTopicName] = useState('');

  // Add project topic
  const handleAddTopic = () => {
    if (topicName) {
      setProjectTopics([...projectTopics, topicName]);
      setTopicName('');
    }
  };

  // Delete project topic
  const handleDeleteTopic = (index) => {
    setProjectTopics(projectTopics.filter((_, i) => i !== index));
  };

  // Add mentor
  const handleAddMentor = () => {
    if (mentor.name && mentor.email && mentor.projectTopic) {
      setMentors([...mentors, mentor]);
      setMentor({ name: '', email: '', phone: '', password: '', projectTopic: '' });
    }
  };

  // Delete mentor
  const handleDeleteMentor = (index) => {
    setMentors(mentors.filter((_, i) => i !== index));
  };

  // Logout
  const handleLogout = () => {
    alert('Logged out');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} className="logout-btn">Logout</button>

      <section>
        <h3>Project Topics</h3>
        <ul>
          {projectTopics.map((topic, index) => (
            <li key={index}>
              {topic}
              <button onClick={() => handleDeleteTopic(index)} className="delete-btn">Delete</button>
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
          <button onClick={handleAddTopic} className="add-btn">Add Topic</button>
        </div>
      </section>

      <section>
        <h3>Mentors</h3>
        <ul>
          {mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name} - {mentor.projectTopic}
              <button onClick={() => handleDeleteMentor(index)} className="delete-btn">Delete</button>
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
          <input
            type="text"
            placeholder="Project Topic"
            value={mentor.projectTopic}
            onChange={(e) => setMentor({ ...mentor, projectTopic: e.target.value })}
          />
          <button onClick={handleAddMentor} className="add-btn">Add Mentor</button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
