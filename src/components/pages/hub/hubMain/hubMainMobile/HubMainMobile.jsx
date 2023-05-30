import React from 'react';
import Avatar from "../../../../reusable/assets/avatar/Avatar.jsx";
import RankRow from "../../items/rank/items/RankRow/RankRow.jsx";
import Box from "../../../../reusable/cards/box/Box.jsx";
import PlanInfo
  from "../../../../reusable/assets/additionalInformation/items/additionalInformationPlan/items/planInfo/PlanInfo.jsx";
import HubMembershipTop from "./items/HubMembershipTop.jsx";
import Dropdown from "../../../../reusable/assets/dropdown/Dropdown.jsx";
import HubNextLevelInfo from "./items/hubNextLevelInfo/HubNextLevelInfo.jsx";
import HubWallet from "../items/hubWallet/HubWallet.jsx";
import {Link} from "react-router-dom";
import Button from "../../../../reusable/btns/buttons/Button.jsx";
import InfoCardList from "../../../../reusable/cards/infoCard/InfoCardList.jsx";
import HubAccess from "../items/hubAccess/HubAccess.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


//TODO: mock data
const infoList = [{
  image: {
    src: '/images/hub/main/gym.png',
    alt: 'Placeholder'
  },
  badges: [{
    type: 'workouts'
  }, {
    type: 'completed'
  }],
  info: {
    title: 'Strength Traning',
    text: 'Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the'
  }
},
  {
    image: {
      src: '/images/hub/main/list.png',
      alt: 'Placeholder'
    },
    badges: [{
      type: 'habits'
    }],
    info: {
      title: 'Drink your water',
      text: 'Drink up! Increasing your daily water intake is vital as you to stay healthy. Dehydration can cause fatigue, indigestion, a...'
    }
  },
  {
    image: {
      src: '/images/hub/main/drink.png',
      alt: 'Placeholder'
    },
    badges: [{
      type: 'buzzmiTasks'
    }, {
      type: 'completed'
    }],
    info: {
      title: 'Finish your account setup',
      text: 'Draink up! Increasing your daily water'
    }
  }]

const HubMainMobile = () => {
  return (
    <>
      <ul className="react-tabs__tab-list" role="tablist">
        <Link className="react-tabs__tab react-tabs__tab--selected" to={'/hub'}>Hub
        </Link>
        <Link className="react-tabs__tab" to={'/calendar'}>Calendar
        </Link>
      </ul>
      <div className='d-flex flex-column align-items-center'>
        <h1 className={'h3 mb-3'}>
          Rise and shine, Jane!
        </h1>
        <Avatar
          mode="border"
          src="/images/moc/avatar-big.png"
        />
        <p className={'text-b my-3 text-center'}>
          We're here to help you power through your to-do's and make the most of your day.
        </p>
      </div>
      <Box paddingMode='rank'>
        <h4 className='h4'>Your Rank</h4>
        <RankRow/>
      </Box>
      <Box paddingMode='rank' className='mt-3'>
        <Dropdown Content={HubNextLevelInfo} title={'How to get next level?'}/>
      </Box>
      <Box paddingMode='rank' className='mt-3' topComponent={<HubMembershipTop/>}>
        <PlanInfo/>
      </Box>
      <HubWallet/>
      <div className={'d-flex justify-content-between align-items-center mt-6 mt-lg-9 mb-lg-3 mb-5'}>
        <h4 className={'h4'}>My plan for today</h4>
        <Link to={'/hub/tasks'}>
          <Button className={'button_secondary button_m double-secondary px-6 px-lg-14'}>
            See All tasks
          </Button>
        </Link>
      </div>
      <InfoCardList infoList={infoList}/>
      <div className={'d-flex justify-content-between align-items-center mt-6 mt-lg-9 mb-lg-3 mb-5'}>
        <h4 className={'h4'}>Quick access</h4>
        <Link to={'/hub/tasks'} className={'text-alt-primary'}>
          Edit
        </Link>
      </div>
      <HubAccess/>
    </>
  );
};

export default HubMainMobile;