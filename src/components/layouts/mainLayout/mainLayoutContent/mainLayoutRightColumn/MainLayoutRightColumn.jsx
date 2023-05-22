import React from 'react';
import Sticky from 'react-stickynode';

const MainLayoutRightColumn = ({children}) => {

  return (
    <div className="main-layout__right-column">
      <Sticky bottomBoundary={'footer'}>
        {children}
      </Sticky>
    </div>
  );
};

export default MainLayoutRightColumn;