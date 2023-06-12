import React from "react"
import { Link, useNavigate } from "react-router-dom"

const BackBtnWithTitlePage = ({ title, btnText, lastItemLink }) => {
  const navigate = useNavigate()

  return (
    <div className="back-btn back-btn_with-title">
      <button className="back-btn__content" onClick={() => navigate(-1)}>
        <img className="back-btn__icon" src="/images/assets/back.svg" alt="arrow left" />
        <span className="back-btn__text">{btnText}</span>
      </button>
      <span className="h3">{title}</span>
      {lastItemLink && lastItemLink.href && lastItemLink.title && (
        <Link className="back-btn__last-link text-alt-primary" to={lastItemLink.href}>
          {lastItemLink.title}
        </Link>
      )}
    </div>
  )
}

export default BackBtnWithTitlePage
