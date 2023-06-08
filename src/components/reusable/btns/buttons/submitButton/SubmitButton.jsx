import React from 'react';
import PrimaryButton from "../PrimaryButton.jsx";
import classNames from 'classnames';

const SubmitButton = ({isValid, title = 'Continue'}) => {

  return (
    <PrimaryButton
      className={classNames({'button_inactive': !isValid})}
      type="submit"
    >
      {title}
    </PrimaryButton>
  );
};

export default SubmitButton;