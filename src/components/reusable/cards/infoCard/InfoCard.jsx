import React from "react"
import Box from "../box/Box.jsx"
import InfoCardMain from "./items/infoCardMain/InfoCardMain.jsx"
import { Link } from "react-router-dom"

const InfoCard = ({ item }) => {
  const isLink = item?.type === "link"
  const cardMain = (
    <Box className={`box-info-card ${isLink ? "box_hover" : ""}`}>
      <InfoCardMain
        info={item?.info}
        image={item.image}
        badges={item.badges}
        id={item.id}
        type={item.type !== null ? (isLink ? "link" : "menu") : null}
      />
    </Box>
  )

  return isLink ? <Link to={item?.to}>{cardMain}</Link> : cardMain
}

export default InfoCard
