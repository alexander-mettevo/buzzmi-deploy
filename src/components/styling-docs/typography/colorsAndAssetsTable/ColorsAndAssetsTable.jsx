import React from 'react';
import styles from './styles-table.module.scss';
import {stylesArr} from "./stylesArray.js";

const ColorsAndAssetsTable = () => {
  return (
    <div className={styles['styles-table']}>
      <div className={styles['header']}>
        <div>Class Name</div>
        <div>Example</div>
        <div>Styles</div>
      </div>
      {stylesArr.map(style => (
        <div className={styles['row']} key={style.className}>
          <div>.{style.className}</div>
          <div className={style.className}>Example Text</div>
          <div>{Object.entries(style.styles).map(([key, value]) =>
            <span key={key}>{key}: {value}; </span>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorsAndAssetsTable;