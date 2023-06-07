import React, {useState} from 'react';
import LinkTabs from "../../../../reusable/assets/linkTabs/LinkTabs.jsx";
import Rank from "../../items/rank/Rank.jsx";
import RankRow from "../../items/rank/items/RankRow/RankRow.jsx";
import FilterList from "../../items/filterList/FilterList.jsx";
import Calendar from "../../../../reusable/calendar/Calendar.jsx";
import UpdateInfo from "../../../../reusable/updateInfo/UpdateInfo.jsx";

//todo moc data
const tabsFirst = [{
  href: '/hub',
  title: 'Hub'
},{
  href: '/calendar',
  title: 'Calendar'
}]

const tabsLast = [{
  href: '/hub/tasks',
  title: 'Tasks'
}, {
  href: '/hub/stats',
  title: 'Stats'
},
  {
    href: '/hub/leaderboard',
    title: 'Leaderboard'
  }]

const HubTasksMobile = ({data}) => {
    const [calendarValue, setCalendarValue] = useState("2023-05-01")
  return (
    <>
      <LinkTabs list={tabsFirst}/>
      <div className='my-3'>
        <RankRow withAvatar/>
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
      <FilterList data={data}/>

    </>
  );
};

export default HubTasksMobile;