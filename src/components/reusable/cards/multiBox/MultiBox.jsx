import Info from "../../assets/info/Info.jsx"
import Box from "../box/Box.jsx"
import cn from "classnames"

const MultiBox = ({ icon, info, children, title, rightSide, isHideMode, text, miniMode, spaceMode, className }) => {
  return (
    <Box className={`multi-box hub-form-box ${className}`}>
      <div
        className={cn("multi-box__wrapper", {
          "multi-box__wrapper_hide-mode": isHideMode,
          "multi-box__wrapper_mini-mode": miniMode,
          "multi-box__wrapper_space-mode": spaceMode,
        })}
      >
        <div className="multi-box__title">
          {icon && <img src={icon} alt="icon" className="multi-box__icon" />}
          <div className="me-21 me-lg-3">
            <div className="h4 mb-1">{title}</div>
            <div className="text-r">{text}</div>
          </div>

          {info && <Info text={info} />}
        </div>
        {rightSide}
      </div>

      {children}
    </Box>
  )
}

export default MultiBox
