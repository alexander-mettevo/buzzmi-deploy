import parseValue from "../../../../../../assets/parseValue/parseValue.js"
import { useEffect, useState } from "react"

export const parseTime = (value) => {
  let hours = value > 0 ? Math.floor(value / 1000 / 60 / 60) % 24 : 0
  let minutes = value > 0 ? Math.floor(value / 1000 / 60) % 60 : 0
  let seconds = value > 0 ? Math.floor(value / 1000) % 60 : 0

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
