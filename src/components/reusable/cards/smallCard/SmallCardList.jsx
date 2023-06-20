import React, { useState } from "react"
import SmallCard from "./SmallCard.jsx"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import SmallCardListDnD from "./SmallCardListDnD.jsx"
import SmallCardDispatcher from "./SmallCardDispatcher.jsx"

const SmallCardList = ({ list, dnd, type }) => {
  return (
    <div className="small-card__list">
      <SmallCardDispatcher dnd={dnd} list={list} type={type} />
    </div>
  )
}

export default SmallCardList
