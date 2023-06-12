import React, { useState } from "react"
import useDateSelect from "../../../../hooks/useDateSelect/useDateSelect.js"
import CustomSelect from "../../../../components/reusable/form/select/customSelect/CustomSelect.jsx"

const DaySelectDate = () => {
  const [selected, setSelected] = useState({
    value: new Date().getDate(),
    label: new Date().getDate(),
  })
  const { days } = useDateSelect()

  return (
    <CustomSelect
      className="select__secondary"
      options={days.map((d) => ({ value: d, label: d }))}
      setSelected={setSelected}
      selected={selected}
    />
  )
}

export default DaySelectDate
