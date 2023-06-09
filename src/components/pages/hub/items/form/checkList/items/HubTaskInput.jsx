import React, { useState } from 'react';

function HubTaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="checklist__task-input">
      <form onSubmit={handleSubmit} className='d-flex justify-content-between align-items-center'>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add your item"
          className='input input_simple-text'
        />
        <button className='text-alt-primary text-r no-wrap' type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default HubTaskInput;