import React, { useEffect, useRef, useState } from "react"
import moment from "moment"
import CalendarComponent from "react-calendar"
import { triggerClickOnNext, triggerClickOnPrev } from "./customListener.js"

const monthNames = {
  0: "jan",
  1: "feb",
  2: "mar",
  3: "apr",
  4: "may",
  5: "jun",
  6: "jul",
  7: "aug",
  8: "sep",
  9: "oct",
  10: "nov",
  11: "dec",
}

const dayIncrement = 6

const dateFormat = "YYYY-MM-DD"

const getType = ({ dayList, type, date }) => {
  if (!dayList || dayList.length === 0) {
    return
  }
  return dayList.filter(
    (el) => moment(el.date, dateFormat).format() === moment(date, dateFormat).format() && el.type === type,
  )[0]
}

const renderCellContent = ({ date, dayList }) => {
  if (!dayList || dayList.length === 0) {
    return
  }

  const currentGoalIsCompleted = getType({ dayList, date, type: "completed" })
  const currentGoalIsNotCompleted = getType({ dayList, date, type: "uncompleted" })

  if (currentGoalIsCompleted) {
    return <span className="calendar__marker calendar__marker--pink" />
  }
  if (currentGoalIsNotCompleted) {
    return <span className="calendar__marker calendar__marker--gray" />
  }
}

const Calendar = ({ dayList, onChange, value, noNavigation, buttonProps, period, hasFooter, noIndent }) => {
  const isForWeek = period === "week"
  const [currentMonth, setCurrentMonth] = useState(moment(value).get("month"))
  const [firstDayOfCurrentWeek, setFirstDayOfCurrentWeek] = useState(0)
  const [redrew, setRedrew] = useState(false)

  const setDefaultFirstDayIndex = () => {
    const targetWeek = moment(value).isoWeekday("Monday").dayOfYear()
    setFirstDayOfCurrentWeek(targetWeek)
  }

  useEffect(() => {
    if (isForWeek) {
      setDefaultFirstDayIndex()
    }
  }, [])

  useEffect(() => {
    if (redrew) {
      setRedrew(false)
    }
  }, [redrew])

  const onChangeWeek = (decrement = 0) => {
    setDefaultFirstDayIndex(firstDayOfCurrentWeek + decrement)
    setFirstDayOfCurrentWeek(firstDayOfCurrentWeek + decrement)
  }

  const onViewChange = ({ activeStartDate }) => {
    setCurrentMonth(moment(activeStartDate).get("month"))
  }

  useEffect(() => {
    if (period !== "week") {
      return
    }
    if (
      moment()
        .dayOfYear(Number(firstDayOfCurrentWeek + 6))
        .get("date") !== 7
    ) {
      triggerClickOnPrev()
    }
    if (moment().dayOfYear(Number(firstDayOfCurrentWeek)).get("date") === 1) {
      triggerClickOnNext()
    }
  }, [firstDayOfCurrentWeek])

  const getLabelText = ({ direction }) => {
    if (direction === "down") {
      return (
        <span
          onClick={() => (isForWeek ? onChangeWeek(-(dayIncrement + 1)) : null)}
          className="calendar__btn-text calendar__btn-text--left"
        >
          <i className="fa-solid fa-arrow-left" />
          {period === "week" ? "Prev" : <>{currentMonth - 1 >= 0 ? monthNames[currentMonth - 1] : monthNames[11]}</>}
        </span>
      )
    }
    if (direction === "up") {
      return (
        <span
          onClick={() => (isForWeek ? onChangeWeek(dayIncrement + 1) : null)}
          className="calendar__btn-text calendar__btn-text--right"
        >
          <i className="fa-solid fa-arrow-right" />
          {period === "week" ? "Next" : <>{currentMonth + 1 <= 11 ? monthNames[currentMonth + 1] : monthNames[0]}</>}
        </span>
      )
    }
  }

  const minAndMaxDate = {
    min: new Date(moment(value).dayOfYear(Number(firstDayOfCurrentWeek)).format(dateFormat)),
    max: new Date(
      moment(value)
        .dayOfYear(Number(firstDayOfCurrentWeek) + dayIncrement)
        .format(dateFormat),
    ),
  }

  const onReset = () => {
    setRedrew(true)
    setDefaultFirstDayIndex()
  }

  return (
    <div
      className={
        "calendar" + (noNavigation ? " calendar--no-navigation" : "") + (noIndent ? " calendar--no-indent" : "")
      }
    >
      {noNavigation && (
        <div className="calendar__header d-flex justify-content-between">
          <span className="calendar__header-title">Calendar</span>
        </div>
      )}
      <div className="calendar__body">
        {!redrew && (
          <CalendarComponent
            defaultActiveStartDate={new Date(value)}
            value={value}
            onChange={(current) => onChange(moment(current).format(dateFormat))}
            onActiveStartDateChange={onViewChange}
            tileContent={({ date }) => renderCellContent({ date, dayList })}
            prevLabel={getLabelText({ direction: "down" })}
            nextLabel={getLabelText({ direction: "up" })}
            locale="en-EN"
            view="month"
            allowPartialRange={true}
            minDate={isForWeek ? minAndMaxDate["min"] : null}
            maxDate={isForWeek ? minAndMaxDate["max"] : null}
          />
        )}
      </div>
      {buttonProps && (
        <div className="calendar__btn-wrapper text-center">
          <button
            className="calendar__btn"
            onClick={() => (buttonProps.isDateAnchor ? onReset() : buttonProps.handler())}
          >
            {buttonProps.text}
          </button>
        </div>
      )}
      {hasFooter && (
        <div className="calendar__footer d-flex">
          <span className="calendar__footer-item calendar__footer-item--pink-marker">Completed goal</span>
          <span className="calendar__footer-item calendar__footer-item--gray-marker">Uncompleted goal</span>
        </div>
      )}
    </div>
  )
}

export default Calendar;