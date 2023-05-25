import React from 'react';
import Box from "../box/Box.jsx";
import InfoCardMain from "./items/infoCardMain/InfoCardMain.jsx";

const InfoCard = ({item}) => {
  return (
    <Box className={'box-info-card'}>
      <InfoCardMain info={item?.info} image={item.image} badges={item.badges} id={item.id} type={'menu'}/>
    </Box>
  );
};

export default InfoCard;