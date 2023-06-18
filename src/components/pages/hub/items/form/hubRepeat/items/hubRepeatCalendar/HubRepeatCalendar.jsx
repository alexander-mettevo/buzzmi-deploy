import React, { useState } from "react"
import Calendar from "../../../../../../../reusable/calendar/Calendar.jsx"

const HubRepeatCalendar = () => {
  const [calendarValue, setCalendarValue] = useState(new Date())

  //TODO организовать сохранение в values в основной стейт

  return <Calendar onChange={setCalendarValue} value={calendarValue} noIndent period="month" />
}

export default HubRepeatCalendar
