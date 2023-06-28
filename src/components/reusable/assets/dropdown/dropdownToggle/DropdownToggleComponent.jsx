import { useEffect, useRef, useState } from "react"
import DropdownRightSide from "./items/dropdownRightSide/DropdownRightSide.jsx"
import MultiBox from "../../../cards/multiBox/MultiBox.jsx"

const DropdownToggleComponent = ({
  isOpen,
  setIsOpen,
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
  const contentRef = useRef(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setScrollHeight(contentRef.current?.children[0]?.scrollHeight)
    } else {
      setScrollHeight(0)
    }
  }, [contentRef?.current])

  const dropdownRightSide = (
    <DropdownRightSide
      isEditable={isEditable}
      onEditBtn={onEditBtn}
      editBtnText={editBtnText}
      defaultValue={defaultValue}
      setIsOpen={setIsOpen}
      idChecked={idChecked}
    />
  )

  return (
    <MultiBox icon={icon} info={info} title={title} rightSide={dropdownRightSide} isHideMode={!isOpen}>
      <div
        className={`dropdown__content ${isOpen ? "dropdown__content--open" : ""}`}
        style={{ minHeight: isOpen ? `${scrollHeight}px` : 0 }}
        ref={contentRef}
      >
        {isOpen && children}
      </div>
    </MultiBox>
  )
}

export default DropdownToggleComponent
