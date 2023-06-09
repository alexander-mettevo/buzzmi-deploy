import React, { useRef, useState } from "react"
import Checkbox from "../../checkbox/Checkbox.jsx"
import Box from "../../../cards/box/Box.jsx"
import Info from "../../info/Info.jsx"

const DropdownToggle = ({ icon, title, children, info, idChecked, defaultValue = false }) => {
  const [isOpen, setIsOpen] = useState(defaultValue)
  const contentRef = useRef(null)

  return (
    <Box className="dropdown dropdown_toggle hub-form-box">
      <div className="dropdown__button dropdown__button_toggle">
        <div className="dropdown__title">
          {icon && <img src={icon} alt="icon" className="dropdown__icon" />}
          <span className="h4 me-21 me-lg-3">{title}</span>
          <Info text={info} />
        </div>

        <div className="dropdown__arrow d-flex">
          <Checkbox defaultValue={defaultValue} setState={setIsOpen} idChecked={idChecked} />
        </div>
      </div>
      <div
        className={`dropdown__content ${isOpen ? "dropdown__content--open" : ""}`}
        style={{ "--content-height": isOpen ? `${contentRef.current?.children[0]?.scrollHeight}px` : 0 }}
        ref={contentRef}
      >
        {isOpen && children}
      </div>
    </Box>
  )
}

export default DropdownToggle
