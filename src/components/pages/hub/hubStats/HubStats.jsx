import React, {useState} from "react";
import Rank from "../items/rank/Rank.jsx";
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx";
import Calendar from "../../../reusable/calendar/Calendar.jsx";
import FilterList from "../items/filterList/FilterList.jsx";
import MainLayoutRightColumn
    from "../../../layouts/mainLayout/mainLayoutContent/mainLayoutRightColumn/MainLayoutRightColumn.jsx";
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx";
import UpdateInfo from "../../../reusable/updateInfo/UpdateInfo.jsx";

const tabsLast = [
    {
        href: '/hub/tasks',
        title: 'Tasks'
    }, {
        href: '/hub/stats',
        title: 'Stats'
    },
    {
        href: '/hub/leaderboard',
        title: 'Leaderboard'
    }
]

const HubStats = () => {
    const [calendarValue, setCalendarValue] = useState("2023-05-01")
    return(
        <>
            <div className='main-layout__row'>
                <div className='main-layout__mid'>
                    <div className='mb-7'>
                        <Rank withAvatar/>
                    </div>
                    <LinkTabs list={tabsLast}/>
                    <UpdateInfo text="Points last synced on Today, 01:30 pm" onBtnClick={() => null}/>
                    <div className="box box_big mb-9">
                        <Calendar onChange={setCalendarValue}
                                  value={calendarValue}
                                  period="week"
                                  noIndent
                                  buttonProps={{text: "See todays tasks", handler: () => null}}/>
                    </div>
                    <FilterList/>
                </div>

                <MainLayoutRightColumn>
                    <AdditionalInformation/>
                </MainLayoutRightColumn>
            </div>

        </>
    )
}

export default HubStats;