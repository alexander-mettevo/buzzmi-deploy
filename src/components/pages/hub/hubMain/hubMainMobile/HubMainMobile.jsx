import React from 'react';
import Rank from "../../items/rank/Rank.jsx";
import Avatar from "../../../../reusable/assets/avatar/Avatar.jsx";

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

      <Rank withAvatar={false}/>
    </>
  );
};

export default HubMainMobile;