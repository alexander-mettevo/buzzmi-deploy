import React from 'react';
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SmallCardList from "../../../reusable/cards/smallCard/SmallCardList.jsx";

const list =  [
  {
    id: 'vsdvad 0',
    link: '/hub/add-activity',
    title: 'Profile picture upload',
    img: {
      src: '/images/moc/hub/1.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'hgfdhrthrt 1',
    link: '/hub/add-activity',
    title: 'Verify account email',
    img: {
      src: '/images/moc/hub/2.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'fefwev 2',
    link: '/hub/add-activity',
    title: 'Verify Phone number ',
    img: {
      src: '/images/moc/hub/3.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'fefwev 3',
    link: '/hub/add-activity',
    title: 'Setup two factor authentication ',
    img: {
      src: '/images/moc/hub/4.png',
      alt: 'Add an activity'
    }
  },
  {
    id: 'fefwev 4',
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
      <BackBtnWithTitlePage title="Add Task" btnText="Back"/>
      <SmallCardList list={list}/>
    </div>
  );
};

export default HubAddActivity;