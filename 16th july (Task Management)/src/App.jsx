// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; // Or your chosen CSS file

function App() {
  const [tasks, setTasks] = useState([]); // Array to store all tasks
  const [editingTask, setEditingTask] = useState(null); // State to hold the task being edited

  // Optional: useEffect for localStorage sync (Bonus Feature)
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 1. Add New Task (CREATE)
  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: Date.now(), status: 'Pending' }, // Assign unique ID and default status
    ]);
  };

  // 3. Edit Task (UPDATE)
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null); // Clear editing state after update
  };

  // 4. Delete Task (DELETE)
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // 5. Change Task Status
  const changeTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="task-manager-app">
      <h1>Task Manager</h1>
      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
        setEditingTask={setEditingTask} // To allow canceling edit
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}

export default App;