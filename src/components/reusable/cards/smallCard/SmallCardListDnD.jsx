import React, { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import SmallCard from "./SmallCard.jsx"

const reorder = ({ list, startIndex, endIndex }) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const SmallCardListDnD = ({ list, dnd }) => {
  const [listItems, setListItems] = useState(list)

  const onDragEnd = ({ destination, source }) => {
    if (!destination) {
      return
    }

    const items = reorder({
      list: listItems,
      startIndex: source.index,
      endIndex: destination.index,
    })

    setListItems(items)
  }

  return (
    <div className="small-card__list">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                opacity: snapshot.isDragging ? "0.5" : "1",
              }}
              {...provided.droppableProps}
            >
              {listItems.map((card, i) => {
                return (
                  <Draggable draggableId={"key-" + card.id} index={i} key={card.id}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} className="small-card__list-dnd mb-2" {...provided.draggableProps}>
                        <div
                          className="small-card__list-dnd-btn d-flex align-content-center justify-content-center"
                          {...provided.dragHandleProps}
                        >
                          <img src="/images/assets/dnd.svg" alt="dnd icon" />
                        </div>
                        <SmallCard {...card} key={card.id} dnd={dnd} />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default SmallCardListDnD
