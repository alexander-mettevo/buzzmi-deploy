import React from 'react';
import InfoCard from "./InfoCard.jsx";
const InfoCardList = ({infoList}) => {
  return (
    <div>
      {infoList?.length > 0 && infoList.map((item) =>
        (
          <div className={'mb-2 mb-lg-3'} key={item?.id}>
            <InfoCard item={item}  />
          </div>
        ))}
    </div>
  );
};

export default InfoCardList;