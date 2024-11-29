import React, { useState } from 'react';

const ProjectTopicForm = ({ setProjectTopics }) => {
  const [topicName, setTopicName] = useState('');

  const handleAddTopic = () => {
    if (topicName) {
      setProjectTopics((prev) => [...prev, topicName]);
      setTopicName('');
    }
  };

  return (
    <div>
      <h4>Add Project Topic</h4>
      <input 
        type="text" 
        value={topicName} 
        onChange={(e) => setTopicName(e.target.value)} 
        placeholder="Enter Project Topic"
      />
      <button onClick={handleAddTopic}>Add Topic</button>
    </div>
  );
};

export default ProjectTopicForm;