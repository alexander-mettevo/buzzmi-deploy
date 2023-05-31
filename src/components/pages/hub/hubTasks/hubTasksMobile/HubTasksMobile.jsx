import React from 'react';
import LinkTabs from "../../../../reusable/assets/linkTabs/LinkTabs.jsx";
import Rank from "../../items/rank/Rank.jsx";
import RankRow from "../../items/rank/items/RankRow/RankRow.jsx";
import FilterList from "../../items/filterList/FilterList.jsx";

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

const HubTasksMobile = () => {
  return (
    <>
      <LinkTabs list={tabsFirst}/>
      <div className='my-3'>
        <RankRow withAvatar/>
      </div>
      <LinkTabs list={tabsLast}/>
      <FilterList/>

    </>
  );
};

export default HubTasksMobile;