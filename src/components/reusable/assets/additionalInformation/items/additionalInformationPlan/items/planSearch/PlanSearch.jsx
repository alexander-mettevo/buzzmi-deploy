import React, {useState} from 'react';
import styles from './plan-search.module.scss';

const PlanSearch = () => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    //TODO: search logic
    console.log(value);
  }

  const handleValue = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles['plan-search']}>
      <input onChange={handleValue} type="text" className='input input_simple-text' placeholder='Search'/>
      <img onClick={handleSearch} src="/images/assets/search.svg" alt="search icon"/>
    </div>
  );
};

export default PlanSearch;