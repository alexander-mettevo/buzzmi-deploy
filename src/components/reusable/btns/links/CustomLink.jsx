import React from 'react';
import {Link} from "react-router-dom";

const CustomLink = ({to, children, className, ...props}) => {
  return (
    <Link className={'button ' + className} {...props} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;