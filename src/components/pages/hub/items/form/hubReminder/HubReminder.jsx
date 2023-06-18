import React from "react"
import { ampm, ampmWithLabel, hours, hoursWithLabel, minutes, minutesWithLabel } from "./data.js"
import CustomSelect from "../../../../../reusable/form/select/customSelect/CustomSelect.jsx"
import MobileCustomSelect from "../../../../../reusable/multiSelect/items/mobileSelect/MobileCustomSelect.jsx"
import useWindowSize from "../../../../../../hooks/useWindowSize.js"

const HubReminder = ({ values, setValues }) => {
  const { width } = useWindowSize()

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
  if (!width) return null

  return (
    <div>
      {width > 768 ? (
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
      ) : (
        <MobileCustomSelect
          optionGroups={{
            hours,
            minutes,
            ampm,
          }}
          valueGroups={values}
          onChange={onChange}
          topInfo={`Remind me at ${values.hours}:${values.minutes} ${values.ampm}`}
        />
      )}
    </div>
  )
}

export default HubReminder
