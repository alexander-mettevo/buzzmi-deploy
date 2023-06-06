import React from 'react';
import Tooltip from "../tooltip/Tooltip.jsx";

const Info = ({text}) => {
  return (
    <div className='info'>
      <Tooltip position='bottom' tooltipText={text}>
        <div className='info__icon'>i</div>
      </Tooltip>
    </div>
  );
};

export default Info;