import React from "react";
import styles from'./styles-table.module.scss';
import {stylesArray} from "./stylesArray.js";


const SizesTable = () => (
  <div className={styles["styles-table"]}>
    <div className={styles["header"]}>
      <div>Class Name</div>
      <div>Example</div>
      <div>Styles for Big Screens</div>
      <div>Styles for Small Screens</div>
    </div>
    {stylesArray.map(style => (
      <div className={styles["row"]} key={style.className}>
        <div>.{style.className}</div>
        <div><span className={style.className}>Example Text</span></div>
        <div>
          <div>Font Size: {style.desktopRules.fontSize}px;</div>
          <div>Line Height: {style.desktopRules.lineHeight}px</div>
        </div>
        <div>
          <div>Font Size: {style.mobileRules.fontSize}px;</div>
          <div>Line Height: {style.mobileRules.lineHeight}px</div>
        </div>
      </div>
    ))}
  </div>
);

export default SizesTable;