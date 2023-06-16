import React, { useEffect, useState } from "react"
import cn from "classnames"

const daysArr = [
  {
    name: "monday",
    title: "Mon",
  },
  {
    name: "tuesday",
    title: "Tue",
  },
  {
    name: "wednesday",
    title: "Wed",
  },
  {
    name: "thursday",
    title: "Thu",
  },
  {
    name: "friday",
    title: "Fri",
  },
  {
    name: "saturday",
    title: "Sat",
  },
  {
    name: "sunday",
    title: "Sun",
  },
]

const SelectDay = ({ values, setValues }) => {
  const [days, setDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  })

  const handleDay = (e) => {
    const { name, checked } = e.target
    setDays((prevState) => ({
      ...prevState,
      [name]: checked,
    }))
  }

  useEffect(() => {
    setValues({
      ...days,
    })
  }, [days])

  useEffect(() => {
    if (values) {
      setDays({
        ...values,
      })
    }
  }, [])

  return (
    <div>
      <h5 className="h5 mb-3 mb-md-4">Choose the days for this activity</h5>
      <div className="select-day">
        {daysArr.map((day) => (
          <div>
            <div className="text-r d-none d-md-block text-center mb-1">{day?.title}</div>
            <div className="text-r d-md-none text-center mb-1">{day?.title[0]}</div>
            <label
              key={day.name}
              className={cn("select-day__label fa-solid ", {
                "fa-plus": !days[day.name],
                "select-day__label_active": days[day.name],
                "fa-check": days[day.name],
              })}
            >
              <input
                className="select-day__input"
                type="checkbox"
                name={day.name}
                onChange={handleDay}
                checked={days[day.name]}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectDay
