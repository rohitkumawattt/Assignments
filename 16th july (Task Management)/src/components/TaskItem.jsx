// src/components/TaskItem.jsx
import React from 'react';
import './TaskItem.css'; // You'll create this CSS file

function TaskItem({ task, deleteTask, changeTaskStatus, handleEditClick }) {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Pending':
      default:
        return 'status-pending';
    }
  };

  return (
    <div className={`task-item ${getStatusClass(task.status)}`}>
      <h3>{task.title}</h3>
      {task.description && <p className="task-description">{task.description}</p>}
      <div className="task-details">
        <span className={`task-priority ${getPriorityClass(task.priority)}`}>
          Priority: {task.priority}
        </span>
        <span className="task-status">Status: {task.status}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => handleEditClick(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <select
          value={task.status}
          onChange={(e) => changeTaskStatus(task.id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}

export default TaskItem;