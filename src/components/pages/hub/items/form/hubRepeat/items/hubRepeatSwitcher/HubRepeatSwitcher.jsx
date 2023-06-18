import React from "react"
import SelectDay from "../../../selectDay/SelectDay.jsx"
import HubRepeatDay from "../hubRepeatDay/HubRepeatDay.jsx"
import HubRepeatCalendar from "../hubRepeatCalendar/HubRepeatCalendar.jsx"

const HubRepeatSwitcher = ({ values, setValues }) => {
  switch (values?.type) {
    case "Week":
      return <SelectDay values={values} setValues={setValues} />
    case "Month":
      return <HubRepeatCalendar />
    case "Day":
      return <HubRepeatDay values={values} setValues={setValues} />
    default:
      return null
  }
}

export default HubRepeatSwitcher
