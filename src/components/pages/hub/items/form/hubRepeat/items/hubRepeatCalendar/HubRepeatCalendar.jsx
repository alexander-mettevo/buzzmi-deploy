import React, { useEffect, useState } from "react"
import Calendar from "../../../../../../../reusable/calendar/Calendar.jsx"
import moment from "moment"

const HubRepeatCalendar = ({ values, setValues }) => {
  const [calendarValue, setCalendarValue] = useState(new Date(moment(values?.value).format()))

  useEffect(() => {
    if (values?.value !== calendarValue) {
      setValues({ ...values, value: calendarValue })
    }
  }, [calendarValue])

  return <Calendar onChange={setCalendarValue} value={calendarValue} noIndent period="month" />
}

export default HubRepeatCalendar
