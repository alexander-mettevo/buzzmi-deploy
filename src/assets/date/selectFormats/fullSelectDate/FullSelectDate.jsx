import React, { useEffect, useState } from "react"

const FullSelectDate = () => {
  const currentDate = new Date()
  const [day, setDay] = useState(currentDate.getDate())
  const [month, setMonth] = useState(currentDate.getMonth() + 1) // Months are 0-indexed in JS Date
  const [year, setYear] = useState(currentDate.getFullYear())

  const months = [...Array(12).keys()].map((i) => i + 1)
  const years = Array.from({ length: 101 }, (_, i) => year - 50 + i)

  // this will contain days according to selected month and year
  const [days, setDays] = useState([])

  useEffect(() => {
    if (month && year) {
      const daysInMonth = new Date(year, month, 0).getDate()
      const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1)
      setDays(daysArray)
    }
  }, [month, year])

  return (
    <div>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Day</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Month</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FullSelectDate
