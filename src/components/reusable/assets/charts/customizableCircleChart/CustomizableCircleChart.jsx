import React, { useEffect, useRef, useState } from "react"
import CustomizableCircleChartComponent from "./CustomizableCircleChartComponent.jsx"

const CustomizableCircleChart = ({ progress, parsedCurrentValue, parsedInitValue }) => {
  const [chartBg, setChartBg] = useState(null)
  const refChart = useRef(null)

  useEffect(() => {
    setChartBg(window.getComputedStyle(refChart.current).getPropertyValue("--chart-bg"))
  })

  return (
    <CustomizableCircleChartComponent
      refChart={refChart}
      chartBg={chartBg}
      progress={progress}
      value={parsedCurrentValue}
      initValue={parsedInitValue}
    />
  )
}

export default CustomizableCircleChart
