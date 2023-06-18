import React from "react"
import Checkbox from "../../../../checkbox/Checkbox.jsx"

const DropdownRightSide = ({ isEditable, onEditBtn, editBtnText, defaultValue, setIsOpen, idChecked }) => {
  return (
    <div className="dropdown__arrow d-flex">
      {isEditable ? (
        <button className="text-alt-primary" onClick={onEditBtn}>
          {editBtnText}
        </button>
      ) : (
        <Checkbox defaultValue={defaultValue} setState={setIsOpen} idChecked={idChecked} />
      )}
    </div>
  )
}

export default DropdownRightSide
