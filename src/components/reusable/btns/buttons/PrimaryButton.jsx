import React from 'react';
import Button from "./Button.jsx";
import {Link} from "react-router-dom";

const PrimaryButton = ({link, children, className, ...props}) => {

  return link ? (
    <Link to={link} className={'_fw button_primary ' + className} {...props}>
      {children}
    </Link>
  ) : (
    <Button className={'_fw button_primary ' + className} {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;