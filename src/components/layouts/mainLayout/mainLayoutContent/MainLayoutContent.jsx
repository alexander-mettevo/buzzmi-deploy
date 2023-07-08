import MainLayoutRightColumn from "./mainLayoutRightColumn/MainLayoutRightColumn.jsx"
import cn from "classnames"

const MainLayoutContent = ({ children, rightColumnContent }) => {
  return (
    <div
      className={cn("main-layout__row", {
        "main-layout__row_mod": !rightColumnContent,
      })}
    >
      <div
        className={cn("main-layout__mid", {
          "main-layout__mid_mod": !rightColumnContent,
        })}
      >
        {children}
      </div>
      {!!rightColumnContent && <MainLayoutRightColumn>{rightColumnContent}</MainLayoutRightColumn>}
    </div>
  )
}

export default MainLayoutContent
