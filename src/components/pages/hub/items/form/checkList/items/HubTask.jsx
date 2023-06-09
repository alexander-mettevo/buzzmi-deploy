import React, {useState} from 'react';

function HubTask({id, name, completed, deleteTask, editTask, toggleTask}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleEdit = () => {
    editTask(id, newName);
    setIsEditing(false);
  };

  return (
    <div className='checklist__task-row'>
      <div className="checklist__task" >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(id)}
          className='checklist__checkbox'
          id={`task-${id}`}
        />
        <label htmlFor={`task-${id}`} className='checklist__label'/>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={handleChange}
            onBlur={handleEdit}
            autoFocus
            className='text-r text-dark-secondary '
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            // className={completed ? 'task__completed' : ''}
            className='text-r text-dark-secondary '
          >
          {name}
        </span>
        )}
      </div>

      <button className='text-alt-primary checklist__delete' onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}

export default HubTask;
