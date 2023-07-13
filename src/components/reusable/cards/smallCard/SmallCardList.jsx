import SmallCardDispatcher from "./SmallCardDispatcher.jsx"

const SmallCardList = ({ list, dnd, type }) => {
  return (
    <div className="small-card__list">
      <SmallCardDispatcher dnd={dnd} list={list} type={type} />
    </div>
  )
}

export default SmallCardList
