import React from 'react';
import Box from "../box/Box.jsx";
import InfoCardMain from "./items/infoCardMain/InfoCardMain.jsx";
import {Link} from "react-router-dom";

const InfoCard = ({item}) => {

  if (item?.type === 'link') {
    return (
      <Link to={item?.to}>
        <Box className='box-info-card box_hover'>
          <InfoCardMain info={item?.info} image={item.image} badges={item.badges} id={item.id} type='link'/>
        </Box>
      </Link>
    );
  } else {
    return (
      <Box className='box-info-card'>
        <InfoCardMain info={item?.info} image={item.image} badges={item.badges} id={item.id} type='menu'/>
      </Box>
    );
  }

};

export default InfoCard;