import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, updateTask, toggleEdit }) {
  return (
    <ul className="list-group">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleEdit={toggleEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
