import { useState } from "react"
import CalendarSvg from "./CalendarSVG.jsx"
import cn from "classnames"
import Calendar from "../../../../calendar/Calendar.jsx"
import { Tooltip } from "react-tooltip"
import moment from "moment"

const DateInput = ({ label, setValue, errors }) => {
  const [value, onChange] = useState(null)

  const handleDateChange = (date) => {
    onChange(date)
    setValue("birthday", date)
  }

  return (
    <div className="input-label date-input">
      <div>{label}</div>
      <div className="date-input__field-wrapper">
        <input
          type="text"
          className="input input_simple-text date-input__field"
          placeholder=""
          value={value ? moment(value).format("MM/DD/YYYY") : "MM/DD/YYYY"}
        />
        <CalendarSvg />
      </div>
      <Tooltip className="date-input__tooltip" clickable anchorSelect=".date-input__field" place="top">
        <div className="date-input__wrapper">
          <Calendar
            className={cn("date-picker date-picker_mode-switch", {
              "line-wrapper": !value,
              "_form-error": errors,
            })}
            onChange={handleDateChange}
            value={value || new Date()}
            view=""
          />
        </div>
      </Tooltip>

      <div>{errors && <div className="text-error text-center">{errors[0]}</div>}</div>
      <div className="date-wrapper__subtitle text-r">Your birthday won’t be shown publicly</div>
    </div>
  )
}

export default DateInput
