import React from "react"
import styles from "../customizable-circle.module.scss"
const CustomizableCircleChartButton = ({ symbol }) => {
  return <button className={styles["customizable-circle__button"]}>{symbol}</button>
}

export default CustomizableCircleChartButton
