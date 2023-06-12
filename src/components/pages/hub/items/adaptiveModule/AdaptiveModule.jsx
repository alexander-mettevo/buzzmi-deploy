import React from "react"

const AdaptiveModule = ({ mobileView, desktopView }) => {
  return (
    <>
      <div className="d-md-none">{mobileView}</div>
      <div className="d-none d-md-block">{desktopView}</div>
    </>
  )
}

export default AdaptiveModule
