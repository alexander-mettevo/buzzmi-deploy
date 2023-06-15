import React from "react"
import MobileSelect from "../../../../../reusable/multiSelect/items/mobileSelect/MobileSelect.jsx"
import { ampm, ampmWithLabel, hours, hoursWithLabel, minutes, minutesWithLabel } from "./data.js"
import CustomSelect from "../../../../../reusable/form/select/customSelect/CustomSelect.jsx"

const HubReminder = ({ values, setValues }) => {
  const onChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const onChangeHours = (value) => {
    setValues({
      ...values,
      hours: value.value,
    })
  }

  const onChangeMinutes = (value) => {
    setValues({
      ...values,
      minutes: value.value,
    })
  }

  const onChangeAmPm = (value) => {
    setValues({
      ...values,
      ampm: value.value,
    })
  }

  return (
    <div>
      <div className="d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center">
          <CustomSelect
            className="select__secondary w-100 mx-2"
            options={hoursWithLabel}
            selected={{ value: values.hours, label: values.hours }}
            setSelected={onChangeHours}
          />
          <CustomSelect
            className="select__secondary w-100 mx-2"
            options={minutesWithLabel}
            selected={{ value: values.minutes, label: values.minutes }}
            setSelected={onChangeMinutes}
          />
          <CustomSelect
            className="select__secondary w-100 mx-2"
            options={ampmWithLabel}
            selected={{ value: values.ampm, label: values.ampm }}
            setSelected={onChangeAmPm}
          />
        </div>
      </div>
      <div className="d-md-none">
        <MobileSelect
          optionGroups={{
            hours,
            minutes,
            ampm,
          }}
          valueGroups={values}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default HubReminder
