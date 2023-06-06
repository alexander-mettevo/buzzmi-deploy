import React from 'react';

const Checkbox = ({ setState, idChecked}) => {

  const toggle = (e) => {
    setState(e.target.checked);
  }

  return (
    <>
      <input onClick={toggle} className='checkbox' type="checkbox" id={idChecked}/>
      <label htmlFor={idChecked}>Toggle</label>
    </>
  );
};

export default Checkbox;