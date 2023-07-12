import React, { useEffect, useState } from "react"
import HubTask from "./HubTask"
import HubTaskInput from "./HubTaskInput"

function HubTaskList({ setValues, value = [], locked, showAddTask = true }) {
  const addTask = (name) => {
    if (setValues) {
      const newTask = { id: Date.now(), name, completed: false }
      setValues([...value, newTask])
    }
  }

  const deleteTask = (id) => {
    if (setValues) {
      setValues(value.filter((task) => task.id !== id))
    }
  }

  const editTask = (id, newName) => {
    if (setValues) {
      setValues(value.map((task) => (task.id === id ? { ...task, name: newName } : task)))
    }
  }

  const toggleTask = (id) => {
    if (setValues) {
      setValues(value.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }
  }

  // Load tasks from local storage when component mounts
  useEffect(() => {
    if (setValues && showAddTask) {
      const savedTasks = localStorage.getItem("tasks")
      if (savedTasks) {
        setValues(JSON.parse(savedTasks))
      }
    }
  }, [])

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(value))
  }, [value])

  return (
    <div className="checklist">
      {value?.length > 0 ? (
        value.map((task) => (
          <HubTask
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            deleteTask={locked ? null : deleteTask}
            editTask={editTask}
            toggleTask={toggleTask}
          />
        ))
      ) : (
        <div className="text-center text-s">No assignments</div>
      )}
      {showAddTask && <HubTaskInput addTask={addTask} />}
    </div>
  )
}

export default HubTaskList
