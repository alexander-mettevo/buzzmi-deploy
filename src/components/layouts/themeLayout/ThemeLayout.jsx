import React, {useEffect, useRef} from 'react';
import {Outlet} from "react-router-dom";

const ThemeLayout = () => {
  const themeSwitcherRef = useRef(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    themeSwitcherRef.current.checked = theme === 'dark';
  }, [])

  const handleThemeSwitcher = (e) => {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <>
      <input
        ref={themeSwitcherRef}
        className='theme-handler__switch'
        id="theme-switch"
        type="checkbox"
        onChange={handleThemeSwitcher}
      />
      <div className='wrapper'>
        <Outlet />
      </div>
    </>
  );
};

export default ThemeLayout;