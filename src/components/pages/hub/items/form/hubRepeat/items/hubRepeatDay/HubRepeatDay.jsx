import React, { useEffect } from "react"

const HubRepeatDay = ({ values, setValues }) => {
  useEffect(() => {
    setValues({
      ...values,
      every: "01",
      value: "01",
    })
  }, [])

  return null
}

export default HubRepeatDay
