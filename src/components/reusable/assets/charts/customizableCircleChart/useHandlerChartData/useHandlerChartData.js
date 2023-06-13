// Фишка будет состоять в том что каждое значение будет иметь базовые числа измерений. Например время в миллисекундах, дистанция в метрах и т.д.
import parseValue from "../../../../../../assets/parseValue/parseValue.js"
import { useEffect, useState } from "react"

export const parseTime = (value) => {
  let seconds = Math.floor(value / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  if (hours < 10) hours = `0${hours}`

  if (minutes < 10) minutes = `0${minutes}`

  if (seconds < 10) seconds = `0${seconds}`

  return `${hours}:${minutes}:${seconds}`
}

const useHandlerChartData = (type, initValue, currentValue, showTypeValue) => {
  const [parsedInitValue, setParsedInitValue] = useState(null)
  const [parsedCurrentValue, setParsedCurrentValue] = useState(null)

  const handleCurrentValue = () => {
    const parsedCurrentValue = parseValue(currentValue, type)

    if (type === "time") {
      setParsedCurrentValue(parseTime(currentValue))
    } else {
      setParsedCurrentValue(showTypeValue ? parsedCurrentValue.join(" ") : parsedCurrentValue[0])
    }
  }

  useEffect(() => {
    setParsedInitValue(parseValue(initValue, type))
    handleCurrentValue()
  }, [])

  useEffect(handleCurrentValue, [currentValue])

  return {
    parsedInitValue,
    parsedCurrentValue,
  }
}

export default useHandlerChartData
