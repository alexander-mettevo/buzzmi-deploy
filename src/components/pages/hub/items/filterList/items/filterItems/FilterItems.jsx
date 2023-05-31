import React from 'react';
import InfoCardList from "../../../../../../reusable/cards/infoCard/InfoCardList.jsx";
import SecondaryButton from "../../../../../../reusable/btns/links/SecondaryLink.jsx";
import MobileAddActivity from "../mobileAddActivity/MobileAddActivity.jsx";

const FilterItems = ({items, isFirst}) => {
  return (
    <div className='filter-tags__items'>
      <MobileAddActivity/>
      <div className='d-flex justify-content-between align-items-center mb-2 mb-md-3'>
        <h4 className="h4">{items?.title}</h4>
        {isFirst && <SecondaryButton className='py-21 px-15 d-none d-lg-inline-flex' to='/hub/add-activity'>Add activity</SecondaryButton>}
      </div>
      <InfoCardList infoList={items?.list}/>
    </div>
  );
};

export default FilterItems;