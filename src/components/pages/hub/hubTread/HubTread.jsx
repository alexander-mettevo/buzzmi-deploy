import React, {useState} from "react";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import InfoCard from "../../../reusable/cards/infoCard/InfoCard.jsx";
import Calendar from "../../../reusable/calendar/Calendar.jsx";
import GoalList from "../../../reusable/goalList/GoalList.jsx";
import moment from "moment/moment.js";
import PageNavigation from "../../../reusable/pageNavigation/PageNavigation.jsx";
import ProgressHeader from "./header/ProgressHeader.jsx";

// mock data
const infoCardData = {
    "image": {
        "src": "/images/hub/main/gym.png",
        "alt": "Placeholder"
    },
    "info": {
        "title": "Strength Traning",
        "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
    },
    "type": null
}

const goalList = new Array(5).fill('').map((el, index) => ({
    id: index,
    name: "Week " + (index + 1),
    goal: "3,9km",
    achieved: "3,7km",
    countActiveDays: index  + 1,
    type: index % 2 === 0 ? "uncompleted" : "completed"
}))

const getDaysInMonth = (month, year) =>
    (new Array(31))
        .fill('')
        .map((v,i)=> ({
            date: moment([year, month-1, i + 1]).format("YYYY-MM-DD"),
            type: i % 3 === 0 ? "completed" : i % 4 === 0 ? "uncompleted" : null,
        }))
        .filter(v=> moment(v.date).get('month') === month - 1)
const dayList = getDaysInMonth(moment().get("month") + 1, 2023);

const viewTypeList = {
    doneLastWeek: "Done last week",
    doneThisWeek: "Done this week",
    doneLastMonth: "Done last month",
    donePastMonth: "Done past month"
}

const pageNav = [
    {
        text: viewTypeList.doneLastWeek,
        id: 0
    },
    {
        text: viewTypeList.doneThisWeek,
        id: 1
    },
    {
        text: viewTypeList.doneLastMonth,
        id: 2
    },
    {
        text: viewTypeList.donePastMonth,
        id: 3
    },
]

const getCurrentType = (list, id) => list.filter(el => el.id === id)[0]?.text;

const HubTread = () => {
    const [calendarValue, setCalendarValue] = useState(dayList[0].date)
    const [viewTypeId, setViewTypeId] = useState(0);
    const [currentType, setCurrentType] = useState(getCurrentType(pageNav, 0));

    const onPageNavChange = (id) => {
        setViewTypeId(id)
        if(getCurrentType) {
            setCurrentType(getCurrentType(pageNav, id))
        }
    }

    return(
        <div className="hub">
            <div className="hub__content">
                <BackBtnWithTitlePage title="Treadmill" btnText="Back to stats"/>
                <div className="mb-4">
                    <InfoCard item={infoCardData} />
                </div>
                <ProgressHeader text="2 complated"/>
                <div className="mb-4">
                    <PageNavigation list={pageNav} value={viewTypeId} onChange={onPageNavChange}/>
                </div>
                <div className="box box_big mb-4">
                    <Calendar value={calendarValue}
                              onChange={setCalendarValue}
                              dayList={dayList}
                              period={currentType === viewTypeList.doneLastWeek || currentType === viewTypeList.doneThisWeek ? "week" : undefined} />
                    <GoalList list={goalList}/>
                </div>
            </div>
        </div>
    )
}

export default HubTread