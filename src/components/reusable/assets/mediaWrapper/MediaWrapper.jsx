import React from "react"

const MediaWrapper = ({ iconSrc = "/images/assets/forms/image.svg", onClick, locked, ...props }) => {
  return (
    <button onClick={onClick} type="button" className="media-wrapper" disabled={locked} {...props}>
      <img src={iconSrc} alt="media-icon" className="media-wrapper__icon" />
    </button>
  )
}

export default MediaWrapper
