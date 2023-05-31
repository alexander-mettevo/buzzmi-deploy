import React from 'react';
import Box from "../box/Box.jsx";
import InfoCardMain from "./items/infoCardMain/InfoCardMain.jsx";
import {Link} from "react-router-dom";

const InfoCard = ({item}) => {
  return (
    <Link to={item.href}>
      <Box className='box-info-card box_hover'>
        <InfoCardMain info={item?.info} image={item.image} badges={item.badges} id={item.id} type={'menu'}/>
      </Box>
    </Link>
  );
};

export default InfoCard;