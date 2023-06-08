import React, {useEffect, useState} from 'react';
import styles from './plan-info.module.scss';
import PrimaryButton from "../../../../../../btns/buttons/PrimaryButton.jsx";

const PlanInfo = () => {
  const [planInfo, setPlanInfo] = useState({});

  const getData = () => {
    //TODO: get data
    const data = {
      icon: {
        src: "/images/moc/free-user.png",
        alt: "plan"
      },
      title: "Free User",
    }

    setPlanInfo(data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='d-flex d-lg-block justify-content-between'>
      <div className={'d-flex align-items-center mb-lg-2'}>
        <div className={'me-2'}>
          <img className={styles['plan-info__icon']} src={planInfo?.icon?.src} alt={planInfo?.icon?.alt}/>
        </div>
        <span className={'h5'}>
          {planInfo?.title}
        </span>
      </div>
        <PrimaryButton link="/hub/upgrade" className={`${styles['plan-info__btn']} button_s`} >
          Upgrade Now
        </PrimaryButton>
    </div>
  );
};

export default PlanInfo;