import React from 'react';
import Rank from "../../items/rank/Rank.jsx";

const HubMainDesktop = () => {
  return (
    <>
      <h1 className={'h3 mb-21'}>
        Rise and shine, Jane!
      </h1>
      <p className={'text-b mb-4'}>
        We're here to help you power through your to-do's and make the most of your day.
      </p>
      <Rank withAvatar/>
    </>
  );
};

export default HubMainDesktop;