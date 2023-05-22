import React from 'react';

const MainLayoutMenu = ({ children }) => {
  return (
    <ul className="main-layout__menu">
      {children}
    </ul>
  );
};

export default MainLayoutMenu;