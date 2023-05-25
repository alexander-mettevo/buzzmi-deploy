import React, {useEffect, useRef, useState} from 'react';
import InfoCardMenuMobile from "./InfoCardMenuMobile.jsx";
import InfoCardMenuDesktop from "./InfoCardMenuDesktop.jsx";

const InfoCardMenu = ({id, showMenu, setShowMenu}) => {

  const menuRef = useRef(null);

  const handleMenu = (event) => {
    event.stopPropagation();
    if (!menuRef.current.contains(event.target)) {
      setShowMenu(!showMenu);
    }
  }

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', handleMenu);
    } else {
      document.removeEventListener('click', handleMenu);
    }
    return () => {
      document.removeEventListener('click', handleMenu);
    }
  }, [showMenu])

  const handleCompleteTask = () => {}

  const handleEditTask = () => {}

  const handleDeleteTask = () => {}

  return (
    <div className={`menu-card ${showMenu ? 'open' : ''}`}>
      <button onClick={handleMenu}>
        <img src="/images/assets/info-card/dots_menu.svg" alt="dots menu"/>
      </button>
      <div ref={menuRef} className={`menu-card__wrapper ${showMenu ? 'open' : ''}`}>
        <InfoCardMenuDesktop
          handleEditTask={handleCompleteTask}
          handleCompleteTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}/>
        <InfoCardMenuMobile/>
      </div>
    </div>
  );
};

export default InfoCardMenu;