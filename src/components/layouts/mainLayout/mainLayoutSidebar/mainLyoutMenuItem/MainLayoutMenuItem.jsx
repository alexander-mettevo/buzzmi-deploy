import React from 'react';
import {NavLink} from "react-router-dom";

const MainLayoutMenuItem = ({iconSrc, activeIconSrc, name, to, showOnMobile}) => {

  return (
    <li className={`main-layout__menu-item menu-item ${!showOnMobile ? "menu-item_mobile-hide" : ""}`}>
      <NavLink
          to={to}
          className="menu-item__link"
      >
        <img className="menu-item__icon" src={iconSrc} alt={'menu-icon'}/>
        <img className="menu-item__icon_active" src={activeIconSrc} alt={'menu-icon_active'}/>
        <span className="menu-item__name text-s">{name}</span>
      </NavLink>
    </li>
  );
};

export default MainLayoutMenuItem;