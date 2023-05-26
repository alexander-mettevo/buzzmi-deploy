import React from 'react';
import './Colors.scss';
import {lightColors} from "./colorsArray.js";

const Colors = () => {
  return (
    <div className="colors">
      {lightColors.map((section) => (
        <ColorSection key={section.section} section={section} />
      ))}
    </div>
  );
};

const ColorSection = ({ section }) => {
  return (
    <div className="color-section">
      <h2 className="section-title">{section.section}</h2>
      <div className="color-row">
        {section.colors.map((color) => (
          <ColorBox key={color.name} name={color.name} value={color.value} />
        ))}
      </div>
    </div>
  );
};

const ColorBox = ({ name, value }) => {
  return (
    <div className="color-box">
      <div className="color-sample" style={{ background: `${value}` }}></div>
      <div className="color-info">
        <span className="color-name">{name}</span>
        <span className="color-value">{value}</span>
      </div>
    </div>
  );
};

export default Colors
