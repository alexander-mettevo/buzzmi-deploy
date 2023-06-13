import React, { useEffect, useRef, useState } from "react"
import CustomizableCircleChartComponent from "./CustomizableCircleChartComponent.jsx"
import useHandlerChartData from "./useHandlerChartData/useHandlerChartData.js"

const calculatePercentage = (initValue, currentValue) => {
  if (initValue === 0) {
    return 0
  }

  return Math.round((currentValue / initValue) * 100)
}

const CustomizableCircleChart = (props) => {
  const { type, initValue = 100, currentValue, showTypeValue = true } = props
  const [progress, setProgress] = useState(calculatePercentage(initValue, currentValue))
  const { parsedInitValue, parsedCurrentValue } = useHandlerChartData(type, initValue, currentValue, showTypeValue)
  const [chartBg, setChartBg] = useState(null)
  const refChart = useRef(null)

  useEffect(() => {
    setChartBg(window.getComputedStyle(refChart.current).getPropertyValue("--chart-bg"))
  })

  useEffect(() => {
    setProgress(calculatePercentage(initValue, currentValue))
  }, [currentValue])

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
