import React, { useState } from "react"
import Calendar from "../../../../../../../reusable/calendar/Calendar.jsx"

/**
 * В этом компоненте необходимо выбрать дни для повторения задачи
 *
 * @param values - состояние со значениями календаря
 * @param setValues - функция для изменения состояния принимает данные
 * @returns {JSX.Element}
 * @constructor
 */
const HubRepeatCalendar = ({ values, setValues }) => {
  const [calendarValue, setCalendarValue] = useState(new Date())

  //TODO организовать сохранение в values в основной стейт

  return <Calendar onChange={setCalendarValue} value={calendarValue} noIndent period="month" />
}

export default HubRepeatCalendar
