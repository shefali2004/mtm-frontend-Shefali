import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty.');
      return;
    }
    addTask(task, description);
    setTask('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <textarea
          className="form-control"
          placeholder="Add a description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}

export default TaskInput;
