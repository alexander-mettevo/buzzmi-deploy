import React, {useEffect, useState} from 'react';
import styles from './message.module.scss';

const Message = ({message}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  useEffect(() => {
    if (!!message) {
      setShow(true);
    }
  }, [])

  if (!show) return null;

  return (
    <div className={styles.message}>
      <div className={styles['message__wrapper']}>
        <button onClick={handleClose} className={styles['message__close']}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div dangerouslySetInnerHTML={{__html: message}}></div>
      </div>
    </div>
  );
};

export default Message;