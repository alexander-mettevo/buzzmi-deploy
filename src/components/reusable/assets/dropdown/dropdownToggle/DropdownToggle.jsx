import React, { useEffect, useRef, useState } from "react"
import Checkbox from "../../checkbox/Checkbox.jsx"
import Box from "../../../cards/box/Box.jsx"
import Info from "../../info/Info.jsx"
import DropdownToggleComponent from "./DropdownToggleComponent.jsx"

const DropdownToggle = ({
  icon,
  title,
  children,
  info,
  idChecked,
  defaultValue = false,
  isEditable = false,
  onEditBtn,
  editBtnText,
}) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  return (
    <DropdownToggleComponent
      icon={icon}
      title={title}
      info={info}
      idChecked={idChecked}
      isEditable={isEditable}
      onEditBtn={onEditBtn}
      editBtnText={editBtnText}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {children}
    </DropdownToggleComponent>
  )
}

export default DropdownToggle
