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


const HubMainMobile = () => {
  return (
    <>
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
    </>
  );
};

export default HubMainMobile;