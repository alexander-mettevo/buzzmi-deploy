import React from 'react';
import {Link} from "react-router-dom";
import styles from './mobile-activity.module.scss';

const MobileAddActivity = () => {
  return (
    <Link to='/hub/add-activity' className={styles['mobile-activity']}>
      Add Activities
    </Link>
  );
};

export default MobileAddActivity;