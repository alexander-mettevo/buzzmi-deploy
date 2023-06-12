import { useEffect, useState } from "react"

const useDateSelect = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const [selectedDate, setSelectedDate] = useState(currentDate)
  const [period, setPeriod] = useState("Day")
  const months = [...Array(12).keys()].map((i) => i + 1)
  const years = Array.from({ length: 101 }, (_, i) => currentYear - 50 + i)

  // The days in a month depends on the selected month and year
  const [days, setDays] = useState([])

  useEffect(() => {
    const month = selectedDate.getMonth() + 1 // Months are 0-indexed in JS Date
    const year = selectedDate.getFullYear()
    if (month && year) {
      const daysInMonth = new Date(year, month, 0).getDate()
      const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1)
      setDays(daysArray)
    }
  }, [selectedDate])

  return { selectedDate, setSelectedDate, days, months, years, period, setPeriod }
}

export default useDateSelect
