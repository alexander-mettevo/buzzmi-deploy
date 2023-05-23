import React from 'react';
import useWindowSize from "../../../../hooks/useWindowSize.js";

const ResizeComponent = ({desktopComponent, mobileComponent}) => {
  const {width} = useWindowSize();

  if (width > 992) return desktopComponent;
  else return mobileComponent;
};

export default ResizeComponent;