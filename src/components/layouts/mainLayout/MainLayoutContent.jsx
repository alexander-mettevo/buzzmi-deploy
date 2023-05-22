import React from 'react';
import MainLayoutRightColumn from "./MainLayoutRightColumn.jsx";

const MainLayoutContent = ({children, rightColumnContent}) => {
  return (
    <div className='main-layout__row'>
      <div className='main-layout__mid'>
        {children}
      </div>


      <MainLayoutRightColumn>
        {rightColumnContent}
      </MainLayoutRightColumn>
    </div>
  );
};

export default MainLayoutContent;