import React from "react"
import styles from "./customizable-circle.module.scss"
import Progress from "../circleChart/Progress.jsx"

const CustomizableCircleChartComponent = ({ refChart, chartBg, value, initValue, progress }) => (
  <div className={styles["customizable-circle"]} ref={refChart}>
    <div>
      <Progress
        progress={progress}
        hideBall
        hideValue
        reduction={0}
        transitionDuration={3}
        background={chartBg}
        strokeWidth={50}
        size={500}
        sizeDifference={1}
        gradient={[
          { stop: 0.6, color: "#F498E3" },
          { stop: 0.8, color: "#EE6CD3" },
          { stop: 1, color: "#B0319B" },
        ]}
      />

      <div className={styles["customizable-circle__inner-value"]}>
        <div>{value}</div>
        <div className="mt-2 text-s">Goal: {initValue}</div>
      </div>
    </div>
  </div>
)

export default CustomizableCircleChartComponent
