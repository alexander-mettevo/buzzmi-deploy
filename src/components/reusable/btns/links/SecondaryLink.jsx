import React from 'react';
import CustomLink from "./CustomLink.jsx";

const SecondaryButton = ({children, className, to, ...props}) => {
  return (
      <CustomLink to={to} className={'button_secondary  btn-text ' + className} {...props}>
        {children}
      </CustomLink>

  );
};

export default SecondaryButton;