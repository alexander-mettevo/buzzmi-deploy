import React from 'react';
import HubAccessItem from "./hubAccessItem/HubAccessItem.jsx";

const items =[
  {
    image: {
      src: '/images/hub/main/access/challenges.png',
      alt: 'placeholder'
    },
    title: 'Challenges',
    handler: () => {}
  },
  {
    image: {
      src: '/images/hub/main/access/calendar.png',
      alt: 'placeholder'
    },
    title: 'Book 1-2-1',
    handler: () => {}
  },
  {
    image: {
      src: '/images/hub/main/access/sharing.png',
      alt: 'placeholder'
    },
    title: 'Sharing',
    handler: () => {}
  },
  {
    image: {
      src: '/images/hub/main/access/chat.png',
      alt: 'placeholder'
    },
    title: '...',
    handler: () => {}
  },
  {
    image: {
      src: '/images/hub/main/access/plus-circle.png',
      alt: 'placeholder'
    },
    title: 'Add',
    handler: () => {}
  }
]

const HubAccess = () => {
  return (
    <div className={'hub-list-access'}>
      {items.map((item, index) => (
        <HubAccessItem image={item?.image} title={item?.title} handler={item?.handler}/>
      ))}
    </div>
  );
};

export default HubAccess;