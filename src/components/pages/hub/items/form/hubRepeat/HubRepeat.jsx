import React, { useEffect, useState } from "react"
import HubRepeatMode from "./items/hubRepeatMode/HubRepeatMode.jsx"

const HubRepeat = ({ values, setValues }) => {
  return (
    <div>
      <HubRepeatMode values={values} setValues={setValues} />
    </div>
  )
}

export default HubRepeat
