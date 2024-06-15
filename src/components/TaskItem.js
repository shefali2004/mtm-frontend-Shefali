import React, { useState } from 'react';

function TaskItem({ task, deleteTask, updateTask, toggleEdit }) {
  const [newText, setNewText] = useState(task.text);
  const [newDescription, setNewDescription] = useState(task.description);
  const [error, setError] = useState('');

  const handleUpdate = () => {
    if (newText.trim() === '') {
      setError('Task cannot be empty.');
      return;
    }
    updateTask(task.id, newText, newDescription);
    setError('');
  };

  return (
    <li className="list-group-item d-flex flex-column">
      {task.isEditing ? (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            type="text"
            className="form-control mb-2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleUpdate}
          />
          <textarea
            className="form-control"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={handleUpdate}
          />
        </>
      ) : (
        <>
          <span className="task-text">{task.text}</span>
          <span className="task-description">{task.description}</span>
        </>
      )}
      <div className="mt-2">
        <button onClick={() => toggleEdit(task.id)} className="btn btn-secondary btn-sm me-2">
          {task.isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
