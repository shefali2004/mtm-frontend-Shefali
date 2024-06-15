import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, description) => {
    setTasks([...tasks, { id: Date.now(), text: task, description, isEditing: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, newText, newDescription) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, description: newDescription, isEditing: false } : task));
  };

  const toggleEdit = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} toggleEdit={toggleEdit} />
    </div>
  );
}

export default App;
