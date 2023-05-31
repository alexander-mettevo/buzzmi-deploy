import React from 'react';
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SmallCardList from "../../../reusable/cards/smallCard/SmallCardList.jsx";

const list =  [
  {
    id: 'vsdvad',
    link: '/hub/add-activity',
    title: 'Profile picture upload',
    img: {
      src: '/images/moc/hub/1.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'hgfdhrthrt',
    link: '/hub/add-activity',
    title: 'Verify account email',
    img: {
      src: '/images/moc/hub/2.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'fefwev',
    link: '/hub/add-activity',
    title: 'Verify Phone number ',
    img: {
      src: '/images/moc/hub/3.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'fefwev',
    link: '/hub/add-activity',
    title: 'Setup two factor authentication ',
    img: {
      src: '/images/moc/hub/4.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'fefwev',
    link: '/hub/add-activity',
    title: 'Define Payout account/s',
    img: {
      src: '/images/moc/hub/5.png',
      alt: 'Add an activity'
    }
  }
]

const HubAddActivity = () => {
  return (
    <div className='small-container'>
      <BackBtnWithTitlePage title='Finish your account setup'/>
      <SmallCardList list={list}/>
    </div>
  );
};

export default HubAddActivity;