import React from 'react';

const itemsData = {
  all: {
    name: 'All',
    className: 'badge badge_all'
  },
  presets: {
    name: 'Presets',
    className: 'badge badge_presets'
  },
  workouts: {
    name: 'Workouts',
    className: 'badge badge_workouts'
  },
  habits: {
    name: 'Habits',
    className: 'badge badge_habits'
  },
  program: {
    name: 'Program',
    className: 'badge badge_program'
  },
  challenges: {
    name: 'Challenges',
    className: 'badge badge_challenges'
  },
  buzzmiTasks: {
    name: 'Buzzmi Tasks',
    className: 'badge badge_buzzmi-tasks'
  },
  completed: {
    name: 'Completed',
    className: 'badge badge_completed badge_one-color',
    icon: '/images/assets/check-circle.svg'
  }
}

const Badge = ({type, count, active, onClick}) => {
  return (
    <button className={itemsData[type].className} onClick={() => onClick ? onClick() : null}>
      {itemsData[type].icon && <img src={itemsData[type].icon} alt="icon" className="me-1"/>}
      {itemsData[type].name}
      {count && <span className="badge_count">({count})</span>}
    </button>
  )
};

export default Badge;