import React from 'react';
import './CompleteTask.css'; // Import the CSS file for styling
import { useTasks } from '../TaskContext'; // Import the useTasks hook

const CompleteTask = () => {
  const { tasks } = useTasks(); // Get tasks from the context
  const [selectedTask, setSelectedTask] = React.useState(null);

  const handleSelectTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="complete-task-container">
      <h2>Complete a Task</h2>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.title}
              className="task-item"
              onClick={() => handleSelectTask(task)}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Price: ${task.price}</p>
            </div>
          ))
        )}
      </div>

      {selectedTask && (
        <div className="task-details">
          <h2>Task Details</h2>
          <h3>{selectedTask.title}</h3>
          <p>{selectedTask.description}</p>
          <p>Price: ${selectedTask.price}</p>
          <button onClick={() => alert(`Selected Task: ${selectedTask.title}`)}>Select Task</button>
        </div>
      )}
    </div>
  );
};

export default CompleteTask;
 