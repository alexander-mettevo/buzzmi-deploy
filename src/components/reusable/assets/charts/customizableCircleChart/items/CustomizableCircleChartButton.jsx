import React from "react"
import styles from "../customizable-circle.module.scss"
const CustomizableCircleChartButton = ({ symbol, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles["customizable-circle__button"]}>
      {symbol}
    </button>
  )
}

export default CustomizableCircleChartButton
