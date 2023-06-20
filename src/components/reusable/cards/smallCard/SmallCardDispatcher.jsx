import React from "react"
import SmallCardListDnD from "./SmallCardListDnD.jsx"
import SmallCard from "./SmallCard.jsx"
import SmallCardListForm from "./SmallCardListForm.jsx"

const SmallCardDispatcher = ({ list, dnd, type = "" }) => {
  if (dnd) return <SmallCardListDnD list={list} dnd={dnd} />
  else if (type === "form") return <SmallCardListForm list={list} />
  else
    return (
      <div className="small-card__list">
        {list.map((card) => (
          <SmallCard {...card} key={card.id} />
        ))}
      </div>
    )
}

export default SmallCardDispatcher
