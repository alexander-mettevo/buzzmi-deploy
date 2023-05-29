import React, {useState} from "react";
import moment from "moment";
import CalendarComponent from 'react-calendar'

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
    11: "dec"
}

const dateFormat = "YYYY-MM-DD";

const getType = ({dayList, type, date}) => {
    return dayList.filter(el => moment(el.date, dateFormat).format() === moment(date, dateFormat).format() && el.type === type)[0]
}

const Calendar = ({
    minDate,
    maxDate,
    dayList,
    onChange,
    value,
    noNavigation,
    onHeaderBtnHandler
}) => {
    const [currentMonth, setCurrentMonth] = useState(moment(value).get("month"));

    const renderCellContent = ({date}) => {
        const currentGoalIsCompleted = getType({dayList, date, type: "completed"});
        const currentGoalIsNotCompleted = getType({dayList, date, type: "uncompleted"});

        if (currentGoalIsCompleted) {
            return <span className="calendar__marker calendar__marker--pink"/>
        }
        if (currentGoalIsNotCompleted) {
            return <span className="calendar__marker calendar__marker--gray"/>
        }
    }

    const onViewChange = ({activeStartDate}) => {
        setCurrentMonth(moment(activeStartDate).get('month'))
    }

    const getPrevLabelText = ({direction}) => {
        if (direction === "down") {
            return <span className="calendar__btn-text calendar__btn-text--left"><i className="fa-solid fa-arrow-left"/>{currentMonth - 1 >= 0 ? monthNames[currentMonth - 1] : monthNames[11]}</span>
        }
        if (direction === "up") {
            return <span className="calendar__btn-text calendar__btn-text--right"><i className="fa-solid fa-arrow-right"/>{currentMonth + 1 <= 11 ? monthNames[currentMonth + 1] : monthNames[0]}</span>
        }
    }

    return (
        <div className={"calendar" + (noNavigation ? " calendar--no-navigation" : "")}>
            {noNavigation && <div className="calendar__header d-flex justify-content-between">
                <span className="calendar__header-title">Calendar</span>
                {onHeaderBtnHandler && <button className="calendar__header-btn" onClick={onHeaderBtnHandler}>See today's tasks</button>}
            </div>}
            <div className="calendar__body">
                <CalendarComponent defaultActiveStartDate={new Date(value)}
                                   value={value}
                                   onChange={current => onChange(moment(current).format(dateFormat))}
                                   onActiveStartDateChange={onViewChange}
                                   tileContent={renderCellContent}
                                   prevLabel={getPrevLabelText({direction: "down"})}
                                   nextLabel={getPrevLabelText({direction: "up"})}
                                   locale="en-EN"
                                   view="month"
                                   minDate={minDate ? new Date(minDate) : null}
                                   maxDate={maxDate ? new Date(maxDate) : null}/>
            </div>
            <div className="calendar__footer d-flex">
                <span className="calendar__footer-item calendar__footer-item--pink-marker">Completed goal</span>
                <span className="calendar__footer-item calendar__footer-item--gray-marker">Uncompleted goal</span>
            </div>
        </div>
    )
}

export default Calendar;