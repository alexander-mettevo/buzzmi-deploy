import React, { useEffect, useState } from "react"
import HubTask from "./HubTask"
import HubTaskInput from "./HubTaskInput"

function HubTaskList({ setValues, value = [] }) {
  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false }
    setValues([...value, newTask])
  }

  const deleteTask = (id) => {
    setValues(value.filter((task) => task.id !== id))
  }

  const editTask = (id, newName) => {
    setValues(value.map((task) => (task.id === id ? { ...task, name: newName } : task)))
  }

  const toggleTask = (id) => {
    setValues(value.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  // Load tasks from local storage when component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setValues(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(value))
  }, [value])

  return (
    <div className="checklist">
      {value.map((task) => (
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
  )
}

export default HubTaskList
