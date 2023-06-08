import React from 'react';

const Checkbox = ({ setState, idChecked, defaultValue}) => {

  const toggle = (e) => {
    setState(e.target.checked);
  }

  return (
    <>
      <input defaultChecked={defaultValue} onClick={toggle} className='checkbox' type="checkbox" id={idChecked}/>
      <label htmlFor={idChecked}>Toggle</label>
    </>
  );
};

export default Checkbox;