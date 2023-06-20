import React from "react"
import SmallCard from "./SmallCard.jsx"
import BottomBtns from "../../btns/bottomBtns/BottomBtns.jsx"
import PrimaryButton from "../../btns/buttons/PrimaryButton.jsx"

/**
 * Please note that a different way of processing the form is used here.
 * The logic for submitting the form must be written in handleSubmit
 *
 * @param list
 * @returns {JSX.Element}
 * @constructor
 */
const SmallCardListForm = ({ list }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    /**
     * example values: ["1", "2", "3"]
     * number is the id of the card
     */

    let values = Array.from(e.target.elements)
      .filter((el) => el.checked)
      .map((el) => el.name)

    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit} id="card-list-form">
      <div className="small-card__list">
        {list.map((card) => (
          <SmallCard {...card} key={card.id} checkbox />
        ))}
      </div>

      <BottomBtns>
        <PrimaryButton form="card-list-form" type="submit">
          Save
        </PrimaryButton>
        <PrimaryButton form="card-list-form" type="submit">
          Save and share
        </PrimaryButton>
      </BottomBtns>
    </form>
  )
}

export default SmallCardListForm
