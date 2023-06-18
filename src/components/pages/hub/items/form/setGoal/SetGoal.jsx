import React from "react"
import CustomSelect from "../../../../../reusable/form/select/customSelect/CustomSelect.jsx"

const modeSelect = [
  { label: "mins", value: "mins" },
  { label: "times", value: "times" },
  { label: "glasses", value: "glasses" },
]

const SetGoal = ({ values, setValues }) => {
  const handleChangingValue = (e) => {
    let number = e.target.value
    setValues({ ...values, number })
  }

  const handleMode = (value) => {
    setValues({
      ...values,
      type: value.value,
    })
  }

  return (
    <div className="set-goal">
      <input
        onChange={handleChangingValue}
        type="number"
        placeholder="Enter a number"
        className="input input_simple-text set-goal__number"
      />

      <CustomSelect
        selected={!!values?.type ? { label: values.type, value: values.type } : modeSelect[0]}
        setSelected={handleMode}
        options={modeSelect}
        className="select__secondary set-goal__type"
      />
    </div>
  )
}

export default SetGoal
