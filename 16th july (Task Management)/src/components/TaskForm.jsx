// src/components/TaskForm.jsx
import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editingTask, updateTask, setEditingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || ''); // Handle optional description
      setPriority(editingTask.priority);
    } else {
      // Clear form when not editing or after an edit is saved
      setTitle('');
      setDescription('');
      setPriority('Low');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Task title is required!');
      return;
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      priority,
    };

    if (editingTask) {
      updateTask({ ...editingTask, ...newTask }); // Merge existing ID and status
    } else {
      addTask(newTask);
    }
    // Clear form after submission
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  const handleCancelEdit = () => {
    setEditingTask(null); // Clear the editing state in App.jsx
  };

  return (
    <div className="task-form-container">
      <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">{editingTask ? 'Save Changes' : 'Add Task'}</button>
        {editingTask && (
          <button type="button" onClick={handleCancelEdit} style={{ marginLeft: '10px' }}>
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}

export default TaskForm;