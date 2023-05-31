import React from 'react';
import SmallCard from "./SmallCard.jsx";

const SmallCardList = ({list}) => {
  return (
    <div className='small-card__list'>
      {list.length > 0 && list.map((item) => <SmallCard key={item.id} title={item.title} img={item.img} link={item.link}/>)}
    </div>
  );
};

export default SmallCardList;