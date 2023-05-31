import React from 'react';
import Box from "../box/Box.jsx";
import {Link} from "react-router-dom";

const SmallCard = ({link, title, img}) => {
  return (
    <Link to={link}>
      <Box className='box_hover small-card'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <div className='small-card__img'>
              <img src={img?.src} alt={img?.alt}/>
            </div>
            <div className='h5'>{title}</div>
          </div>
          <div className='d-flex align-items-center  text-secondary'>
            <span className='text-s'>View details</span>
            <i className="fa-solid fa-chevron-right small-card__arrow"></i>
          </div>
        </div>
      </Box>
    </Link>
  );
};

export default SmallCard;