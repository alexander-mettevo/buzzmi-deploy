import React from "react"
import MobileSelect from "./MobileSelect.jsx"
import styles from "./custom-select.module.scss"

const MobileCustomSelect = ({ optionGroups, valueGroups, onChange, topInfo }) => {
  return (
    <>
      {topInfo && <div className={styles["custom-select__title"]}>{topInfo}</div>}
      <MobileSelect optionGroups={optionGroups} valueGroups={valueGroups} onChange={onChange} />
    </>
  )
}

export default MobileCustomSelect
