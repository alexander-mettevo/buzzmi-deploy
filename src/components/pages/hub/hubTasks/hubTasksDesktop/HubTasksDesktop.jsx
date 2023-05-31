import React from 'react';
import Rank from "../../items/rank/Rank.jsx";
import LinkTabs from "../../../../reusable/assets/linkTabs/LinkTabs.jsx";
import FilterList from "../../items/filterList/FilterList.jsx";

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

const HubTasksDesktop = () => {
  return (
    <>
      <div className='mb-7'>
        <Rank withAvatar/>
      </div>
      <LinkTabs list={tabsLast}/>
      <FilterList/>
    </>
  );
};

export default HubTasksDesktop;