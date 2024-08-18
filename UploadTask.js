import React, { useState } from 'react';
import './UploadTask.css'; // Import the CSS file for styling
import { useTasks } from '../TaskContext'; // Import the useTasks hook

const UploadTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
  });
  
  const { addTask } = useTasks();

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the task to the global context
    addTask(taskData);
    // Reset form fields
    setTaskData({
      title: '',
      description: '',
      category: '',
      price: '',
    });
    // Optionally, redirect or show a confirmation message
  };

  return (
    <div className="upload-task-container">
      <form className="upload-task-form" onSubmit={handleSubmit}>
        <h2>Upload a Task</h2>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={taskData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={taskData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={taskData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={taskData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Upload Task</button>
      </form>
    </div>
  );
};

export default UploadTask;
 