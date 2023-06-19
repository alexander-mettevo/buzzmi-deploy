import React, { useState } from "react"
import Checkbox from "../../../../../../../reusable/assets/checkbox/Checkbox.jsx"
import Calendar from "react-calendar"

/**
 * В этом компоненте необходимо выбрать день когда задача будет закончена
 *
 * @param values - состояние со значениями календаря
 * @param setValues - функция для изменения состояния принимает данные
 * @returns {JSX.Element}
 * @constructor
 */
const HubRepeatEndDate = ({ values = {}, setValues }) => {
  const [isOpen, setIsOpen] = useState(!!values?.endDate)
  const [calendarValue, setCalendarValue] = useState(new Date())

  //TODO организовать сохранение в values в основной стейт

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center pt-4">
        <div className="multi-box__title">
          <img src="/images/hub/main/access/calendar.png" alt="icon" className="multi-box__icon" />
          <span className="h4 me-21 me-lg-3">End Date</span>
        </div>

        <Checkbox defaultValue={isOpen} setState={setIsOpen} idChecked="end-date" />
      </div>
      <div className="pt-4">
        {isOpen && <Calendar onChange={setCalendarValue} value={calendarValue} noIndent period="month" />}
      </div>
    </div>
  )
}

export default HubRepeatEndDate
