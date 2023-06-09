import React, {useEffect, useState} from 'react';
import HubTask from './HubTask';
import HubTaskInput from './HubTaskInput';

function HubTaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Load tasks from local storage when component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="checklist">
      {tasks.map((task) => (
        <HubTask
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleTask={toggleTask}
        />
      ))}
      <HubTaskInput addTask={addTask} />
    </div>
  );
}

export default HubTaskList;
