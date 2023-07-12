import { useEffect, useState } from "react"
import CustomizableCircleChartButton from "./items/CustomizableCircleChartButton.jsx"
import CustomizableCircleChart from "./CustomizableCircleChart.jsx"
import styles from "./customizable-circle.module.scss"
import PrimaryButton from "../../../btns/buttons/PrimaryButton.jsx"
import useHandlerChartData from "./useHandlerChartData/useHandlerChartData.js"

const calculatePercentage = (initValue, currentValue) => {
  if (initValue === 0) {
    return 0
  }

  return Math.round((currentValue / initValue) * 100)
}

const CustomizableCircleChartWrapper = (props) => {
  const { values, showTypeValue = true, setValues } = props
  const { type, initValue = 0, currentValue = 0 } = values

  const [progress, setProgress] = useState(calculatePercentage(initValue, currentValue))
  const { parsedInitValue, parsedCurrentValue } = useHandlerChartData(type, initValue, currentValue, showTypeValue)

  useEffect(() => {
    setProgress(calculatePercentage(initValue, currentValue))
  }, [currentValue])

  const handleChangingValue = (e) => {
    let value = e.target.value
    if (type === "time") value = value * 1000

    if (value > initValue) value = initValue
    if (value < 0 || typeof +value !== "number") value = 0

    setValues({ ...values, currentValue: value })
    setProgress(calculatePercentage(initValue, value))
  }

  const handleAddProgress = () => {
    let result = currentValue + initValue / 100
    if (result > initValue) result = initValue

    setValues({ ...values, currentValue: result })
  }

  const handleSubtractProgress = () => {
    let result = currentValue - initValue / 100
    if (result < 0) result = 0

    setValues({ ...values, currentValue: result })
  }

  useEffect(() => {
    setProgress(calculatePercentage(initValue, currentValue))
  }, [currentValue])

  return (
    <div className={styles["customizable-circle__wrapper"]}>
      <div className={styles["customizable-circle__row"]}>
        <CustomizableCircleChartButton symbol={<i className="fa-solid fa-minus" />} onClick={handleSubtractProgress} />
        <CustomizableCircleChart
          progress={progress}
          parsedCurrentValue={parsedCurrentValue}
          parsedInitValue={parsedInitValue}
        />
        <CustomizableCircleChartButton symbol={<i className="fa-solid fa-plus" />} onClick={handleAddProgress} />
      </div>
      <input
        onChange={handleChangingValue}
        type="number"
        placeholder="Add a value manually"
        className="input input_simple-text"
      />
      <PrimaryButton type="submit">Complete</PrimaryButton>
    </div>
  )
}

export default CustomizableCircleChartWrapper
