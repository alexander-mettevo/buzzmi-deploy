import cn from "classnames"

const itemsData = {
  all: {
    name: "All",
    className: "badge badge_all",
  },
  presets: {
    name: "Presets",
    className: "badge badge_presets",
  },
  workouts: {
    name: "Workouts",
    className: "badge badge_workouts",
  },
  habits: {
    name: "Habits",
    className: "badge badge_habits",
  },
  program: {
    name: "Program",
    className: "badge badge_program",
  },
  challenges: {
    name: "Challenges",
    className: "badge badge_challenges",
  },
  buzzmiTasks: {
    name: "Buzzmi Tasks",
    className: "badge badge_buzzmi-tasks",
  },
  completed: {
    name: "Completed",
    className: "badge badge_completed badge_one-color",
    icon: "/images/assets/check-circle.svg",
  },
  secondary: {
    className: "badge  badge_buzzmi-tasks",
  },
}

const Badge = ({ type, count, active, onClick, title }) => {
  return (
    <span
      onClick={() => (onClick ? onClick() : null)}
      className={cn(`${itemsData[type].className}`, {
        badge__active: active,
      })}
    >
      {!!itemsData[type]?.icon && <img src={itemsData[type].icon} alt="icon" className="me-1 badge__icon" />}
      {!!title ? title : itemsData[type].name}
      {count && <span className="badge_count">({count})</span>}
    </span>
  )
}

export default Badge
