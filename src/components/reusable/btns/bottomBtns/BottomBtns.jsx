import React from "react"

const BottomBtns = ({ children }) => {
  return (
    <div className="bottom-btns">
      <div className="bottom-btns__row">{children}</div>
    </div>
  )
}

export default BottomBtns
