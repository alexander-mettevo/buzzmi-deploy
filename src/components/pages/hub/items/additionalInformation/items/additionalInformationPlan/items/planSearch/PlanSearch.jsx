import React from 'react';
import styles from './plan-search.module.scss';

const PlanSearch = () => {

  const handleSearch = (e) => {
    //TODO: handle search

    console.log(e.target.value);
  }

  return (
    <div className={styles['plan-search']}>
      <input onBlur={handleSearch} type="text" className='input input_simple-text' placeholder='Search'/>
      <img src="/images/assets/search.svg" alt="search icon"/>
    </div>
  );
};

export default PlanSearch;