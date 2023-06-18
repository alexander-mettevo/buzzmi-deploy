import React, { useEffect, useState } from "react"
import HubRepeatMode from "./items/hubRepeatMode/HubRepeatMode.jsx"
import HubRepeatSwitcher from "./items/hubRepeatSwitcher/HubRepeatSwitcher.jsx"

const HubRepeat = ({ values, setValues }) => {
  return (
    <>
      <HubRepeatMode values={values} setValues={setValues} />
      <HubRepeatSwitcher values={values} setValues={setValues} />
    </>
  )
}

export default HubRepeat
