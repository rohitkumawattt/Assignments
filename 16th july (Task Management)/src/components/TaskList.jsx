// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, changeTaskStatus, handleEditClick }) {
  if (tasks.length === 0) {
    return <p>No tasks yet! Add a new one to get started.</p>;
  }

  return (
    <div className="task-list-container">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
          handleEditClick={handleEditClick}
        />
      ))}
    </div>
  );
}

export default TaskList;