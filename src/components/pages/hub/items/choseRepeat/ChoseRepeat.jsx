import React from "react"
import AdaptiveModule from "../adaptiveModule/AdaptiveModule.jsx"
import ChoseRepeatDesktop from "./items/choseRepeatDesktop/ChoseRepeatDesktop.jsx"
import ChoseRepeatMobile from "./items/choseRepeatMobile/ChoseRepeatMobile.jsx"

const ChoseRepeat = () => {
  return <AdaptiveModule mobileView={<ChoseRepeatMobile />} desktopView={<ChoseRepeatDesktop />} />
}

export default ChoseRepeat
