import { NavLink } from "react-router-dom"
import cn from "classnames"

const LinkTabs = ({ list, onChange, activeTabId, lightUnchecked }) => {
  return (
    <div
      className={cn(`react-tabs__tab-list`, {
        "react-tabs__tab-list--light-unchecked": lightUnchecked,
      })}
      role="tablist"
    >
      {list.length > 0 &&
        list.map((item, index) => {
          return !!onChange ? (
            <button
              className={"react-tabs__tab" + (activeTabId === item.id ? " react-tabs__tab--selected" : "")}
              onClick={() => onChange(item.id)}
              key={item?.id || index + "linkTabs"}
            >
              {item.title}
            </button>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "react-tabs__tab react-tabs__tab--selected" : "react-tabs__tab")}
              to={item?.href || index + "linkTabs"}
              key={index + "linkTabs"}
            >
              {item.title}
            </NavLink>
          )
        })}
    </div>
  )
}

export default LinkTabs
