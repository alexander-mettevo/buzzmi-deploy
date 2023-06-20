import React from "react"
import { Link } from "react-router-dom"

const AssetsCard = ({ link, title, img }) => {
  return (
    <Link className="assets-card" to={link}>
      <div className="assets-card__image">
        <img src={img} alt="assets-card-image" />
      </div>

      <div className="h5">{title}</div>
    </Link>
  )
}

export default AssetsCard
