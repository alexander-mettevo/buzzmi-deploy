import React, {useEffect, useState} from 'react';
import styles from './Avatar.module.scss';
import propTypes from 'prop-types';

const Avatar = ({mode = ""}) => {
  const [avatarMode, setAvatarMode] = useState("");
  const [avatar, setAvatar] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541");

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

  const getData = async () => {
    try {
      const data = "/images/moc/avatar-big.png"
        setAvatar(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {getData()}, [])

  return (
    <div className={`${styles.avatar} ${avatarMode}`}>
      <img src={avatar} alt="avatar" className={styles["avatar__img"]}/>
    </div>
  );
};

Avatar.propTypes = {
  mode: propTypes.string
}
export default Avatar;