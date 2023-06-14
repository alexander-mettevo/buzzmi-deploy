import React from "react"
import styles from "../customizable-circle.module.scss"
const CustomizableCircleChartButton = ({ symbol, onClick }) => {
  return (
    <button onClick={onClick} className={styles["customizable-circle__button"]}>
      {symbol}
    </button>
  )
}

export default CustomizableCircleChartButton
