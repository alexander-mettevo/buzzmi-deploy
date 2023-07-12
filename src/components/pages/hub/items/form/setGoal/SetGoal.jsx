import React from "react"
import CustomSelect from "../../../../../reusable/form/select/customSelect/CustomSelect.jsx"

const modeSelect = [
  { label: "mins", value: "mins" },
  { label: "times", value: "times" },
  { label: "glasses", value: "glasses" },
]

const SetGoal = ({ values, setValues }) => {
  const handleChangingValue = (e) => {
    const number = e.target.value
    setValues({ ...values, number })
  }
  const handleChangingGoalValue = (e) => {
    const number = e.target.value
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
      <div className="set-goal__group">
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
      <label className="set-goal__group set-goal__group--column">
        <strong className="set-goal__group-title">Add your goal manually</strong>
        <input
          onChange={handleChangingGoalValue}
          type="number"
          placeholder="Add your goal here"
          className="input input_simple-text"
        />
      </label>
    </div>
  )
}

export default SetGoal
