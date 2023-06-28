import Info from "../../assets/info/Info.jsx"
import Box from "../box/Box.jsx"
import cn from "classnames"

const MultiBox = ({ icon, info, children, title, rightSide, isHideMode }) => {
  return (
    <Box className="multi-box hub-form-box">
      <div
        className={cn("multi-box__wrapper", {
          "multi-box__wrapper_hide-mode": isHideMode,
        })}
      >
        <div className="multi-box__title">
          {icon && <img src={icon} alt="icon" className="multi-box__icon" />}
          <span className="h4 me-21 me-lg-3">{title}</span>
          {info && <Info text={info} />}
        </div>
        {rightSide}
      </div>

      {children}
    </Box>
  )
}

export default MultiBox
