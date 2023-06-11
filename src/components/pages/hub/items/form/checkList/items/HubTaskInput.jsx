import React, { useState } from "react"

function HubTaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    addTask(inputValue)
    setInputValue("")
  }

  return (
    <div className="checklist__task-input">
      <div className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add your item"
          className="input input_simple-text"
        />
        <button onClick={handleClick} className="text-alt-primary text-r no-wrap">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default HubTaskInput
