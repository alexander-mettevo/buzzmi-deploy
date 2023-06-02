import React, {useState} from 'react';
import Rank from "../../items/rank/Rank.jsx";
import LinkTabs from "../../../../reusable/assets/linkTabs/LinkTabs.jsx";
import FilterList from "../../items/filterList/FilterList.jsx";
import Calendar from "../../../../reusable/calendar/Calendar.jsx";
import UpdateInfo from "../../../../reusable/updateInfo/UpdateInfo.jsx";

const tabsLast = [
    {
        href: '/hub/tasks',
        title: 'Tasks'
    }, {
        href: '/hub/stats',
        title: 'Stats'
    }, {
        href: '/hub/leaderboard',
        title: 'Leaderboard'
    }
]

const HubTasksDesktop = () => {
    const [calendarValue, setCalendarValue] = useState("2023-05-01")
    return (
        <>
            <div className='mb-7'>
                <Rank withAvatar/>
            </div>
            <LinkTabs list={tabsLast}/>
            <UpdateInfo text="Points last synced on Today, 01:30 pm" onBtnClick={() => null}/>
            <div className="box box_big mb-9">
                <Calendar onChange={setCalendarValue}
                          value={calendarValue}
                          noIndent
                          period="week"
                          buttonProps={{text: "See todays tasks", handler: () => null}}/>
            </div>
            <FilterList/>
        </>
    );
};

export default HubTasksDesktop;