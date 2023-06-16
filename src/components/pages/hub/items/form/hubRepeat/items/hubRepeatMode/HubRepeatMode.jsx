import React, { useEffect } from "react"
import { mode, modeSelect, numbers, numbersSelect } from "./repeatModeData.js"
import CustomSelect from "../../../../../../../reusable/form/select/customSelect/CustomSelect.jsx"
import styles from "./repeat-mode.module.scss"
import MobileCustomSelect from "../../../../../../../reusable/multiSelect/items/mobileSelect/MobileCustomSelect.jsx"

const HubRepeatMode = ({ values, setValues }) => {
  const handleNumbers = (value) => {
    setValues({
      ...values,
      every: value.value,
    })
  }

  const onChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleMode = (value) => {
    setValues({
      ...values,
      type: value.value,
    })
  }

  useEffect(() => {
    setValues({
      ...values,
      every: numbers[0],
      type: mode[0],
    })
  }, [])

  return (
    <div className={styles["repeat-mode"]}>
      <div className={`${styles["repeat-mode__desktop-row"]} d-md-flex d-none`}>
        <div>Repeat on Every</div>
        <CustomSelect
          selected={!!values.every ? { label: values.every, value: values.every } : numbersSelect[0]}
          setSelected={handleNumbers}
          options={numbersSelect}
        />
        <CustomSelect
          selected={!!values.type ? { label: values.type, value: values.type } : modeSelect[0]}
          setSelected={handleMode}
          options={modeSelect}
        />
      </div>
      <div className="d-md-none">
        <MobileCustomSelect
          optionGroups={{
            every: numbers,
            type: mode,
          }}
          valueGroups={{
            every: numbers[0],
            type: mode[0],
          }}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default HubRepeatMode
