import React, { useEffect, useState } from "react"
import DropdownToggleComponent from "../dropdownToggle/DropdownToggleComponent.jsx"

const FormToggleDropdown = ({
  icon,
  title,
  children,
  info,
  defaultValue = null,
  isEditable = false,
  onEditBtn,
  editBtnText,
  setValue,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(!!defaultValue)

  useEffect(() => {
    if (!!defaultValue) {
      setValue(name, defaultValue)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setValue(name, null)
    } else {
      setValue(name, defaultValue)
    }
  }, [isOpen])

  return (
    <DropdownToggleComponent
      icon={icon}
      title={title}
      info={info}
      idChecked={name}
      defaultValue={defaultValue}
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

export default FormToggleDropdown
