import React, {useEffect, useState} from 'react';
import styles from './Avatar.module.scss';
import propTypes from 'prop-types';

const Avatar = ({src, mode = ""}) => {
  const [avatarMode, setAvatarMode] = useState("");

  useEffect(() => {
    switch (mode) {
      case "small":
        setAvatarMode(styles["avatar__inner"]);
        break;
      case "medium":
        setAvatarMode(styles["avatar__mid"]);
        break;
      case "border":
        setAvatarMode(styles["avatar__with-border"]);
        break;
      default:
        setAvatarMode("");

    }
  }, [mode]);

  return (
    <div className={`${styles.avatar} ${avatarMode}`}>
      <img src={src} alt="avatar" className={styles["avatar__img"]}/>
    </div>
  );
};

Avatar.propTypes = {
  src: propTypes.string.isRequired,
  mode: propTypes.string
}
export default Avatar;