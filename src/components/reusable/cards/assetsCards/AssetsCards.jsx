import React from "react"
import AssetsCard from "./assetsCard/AssetsCard.jsx"

const AssetsCards = ({ list = [] }) => {
  if (list?.length === 0) return null

  return (
    <div className="assets-card__list">
      {list.map(({ id, link, title, img }, index) => (
        <AssetsCard key={id || index + "assets-card"} link={link} title={title} img={img} />
      ))}
    </div>
  )
}

export default AssetsCards
