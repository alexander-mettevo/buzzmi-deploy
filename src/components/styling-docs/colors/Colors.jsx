import React from 'react';
import style from './colors.module.scss';
import {lightColors} from "./colorsArray.js";

const Colors = () => {

  return (
    <div className={style["colors"]}>
      {lightColors.map((section) => (
        <ColorSection key={section.section} section={section} />
      ))}
    </div>
  );
};

const ColorSection = ({ section }) => {
  return (
    <div className={style["color-section"]}>
      <h2 className={`${style["section-title"]} h2`}>{section.section}</h2>
      <div className={style["color-row"]}>
        {section.colors.map((color) => (
          <ColorBox key={color.name} name={color.name} value={color.value} />
        ))}
      </div>
    </div>
  );
};

const ColorBox = ({ name, value }) => {
  return (
    <div className={style["color-box"]}>
      <div className={style["color-sample"]} style={{ background: `${value}` }}></div>
      <div className={style["color-info"]}>
        <span className={style["color-name"]}>{name}</span>
        <span className={style["color-value"]}>{value}</span>
      </div>
    </div>
  );
};

export default Colors
