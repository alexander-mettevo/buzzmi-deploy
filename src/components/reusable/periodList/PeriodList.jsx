import React from "react"

const PeriodList = ({ items, value, onClick }) => {
  return items && items.length > 0 ? (
    <div className="period-list">
      {items.map((period) => {
        return (
          <div
            className={"period-list__item" + (period.id === value ? " period-list__item--active" : "")}
            key={period.id}
          >
            <button className="period-list__btn" onClick={() => (onClick ? onClick(period.id) : null)}>
              {period.text}
            </button>
          </div>
        )
      })}
    </div>
  ) : null
}

export default PeriodList
