import React from "react"
import Box from "../../../../reusable/cards/box/Box.jsx"
import styles from "./basic-info.module.scss"

const TopComponent = () => <div className="h4">Basic info</div>

const ListItem = ({ title, value, iconSrc }) => (
  <div className={styles["basic-info__item"]}>
    <div className="d-flex align-items-center">
      <img className={styles["basic-info__img"]} src={iconSrc} alt={"icon-" + title} />
      <div className="h4 ms-3">{title}</div>
    </div>
    <div className="text-r ms-3">{value}</div>
  </div>
)

const HubBasicInfo = ({ when, repeat, reminder }) => {
  return (
    <Box className="mb-4" topComponent={<TopComponent />}>
      {when && <ListItem value={when} title="When?" iconSrc="/images/hub/main/access/calendar.png" />}
      {repeat && <ListItem value={repeat} title="Repeat" iconSrc="/images/hub/form/repeat.png" />}
      {reminder && <ListItem value={reminder} title="Reminder" iconSrc="/images/hub/form/clock.png" />}
    </Box>
  )
}

export default HubBasicInfo
