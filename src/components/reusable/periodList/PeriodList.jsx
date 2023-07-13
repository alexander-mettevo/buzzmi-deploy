import cn from "classnames"

const PeriodList = ({ items, value, onClick, ligntMode }) => {
  return items && items.length > 0 ? (
    <div
      className={cn("period-list", {
        "period-list--light": ligntMode,
      })}
    >
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
