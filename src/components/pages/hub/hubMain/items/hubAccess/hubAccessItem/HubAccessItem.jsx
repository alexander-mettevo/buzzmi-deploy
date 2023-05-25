import React from 'react';
import Box from "../../../../../../reusable/cards/box/Box.jsx";

const HubAccessItem = ({image, title, handler}) => {
  return (

    <button className={'hub-access'} onClick={handler}>
      <Box className={'hub-access__block'}>
        <div className={'hub-access__img'}>
          <img className={''} src={image.src} alt={image.alt}/>
        </div>
        <h6 className={'text-r mt-md-2 ms-2 ms-md-0'}>{title}</h6>
      </Box>
    </button>


  );
};

export default HubAccessItem;