import React from "react"
import PrimaryButton from "../PrimaryButton.jsx"
import classNames from "classnames"

const SubmitButton = ({ isValid, title = "Continue", props }) => {
  return (
    <PrimaryButton className={classNames({ button_inactive: !isValid })} type="submit" {...props}>
      {title}
    </PrimaryButton>
  )
}

export default SubmitButton
