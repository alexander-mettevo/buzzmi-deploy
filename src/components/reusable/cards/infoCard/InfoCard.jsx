import { useEffect, useState } from "react"
import Box from "../box/Box.jsx"
import InfoCardMain from "./items/infoCardMain/InfoCardMain.jsx"
import { Link } from "react-router-dom"

const InfoCard = ({ item }) => {
  const [link, setLink] = useState("")
  const [isTask, setIsTask] = useState(item?.type === "task")

  useEffect(() => {
    if (!!item?.href) {
      setLink(item.href)
    } else if (isTask) {
      setLink(`/hub/task-info/${item?.id}`)
    } else {
      setLink(`/hub/preset-preview/${item?.id}`)
    }
  }, [])

  return (
    <Link to={link}>
      <Box className={`box-info-card box_hover`}>
        <InfoCardMain
          info={item?.info}
          image={item.image}
          badges={item.badges}
          id={item.id}
          type={item.type !== null ? (!isTask ? "link" : "menu") : null}
        />
      </Box>
    </Link>
  )
}

export default InfoCard
