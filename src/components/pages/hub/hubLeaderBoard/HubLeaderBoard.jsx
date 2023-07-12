import React from "react"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"
import Rank from "../items/rank/Rank.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import Board from "../../../reusable/board/Board.jsx"

// mock data
import { boardItems } from "../../../../mock-data/hub/hub.js"

const tabsLast = [
  {
    href: "/hub/tasks",
    title: "Tasks",
  },
  {
    href: "/hub/stats",
    title: "Stats",
  },
  {
    href: "/hub/leaderboard",
    title: "Leaderboard",
  },
]

const HubLeaderBoard = () => {
  return (
    <MainLayoutContent rightColumnContent={<AdditionalInformation />}>
      <>
        <div className="mb-7">
          <Rank withAvatar />
        </div>
        <div className="mb-2">
          <LinkTabs list={tabsLast} />
        </div>
        <div className="hub__cup">
          <img src="/images/assets/cup.png" alt="cup -img" />
        </div>
        <Board items={boardItems} />
      </>
    </MainLayoutContent>
  )
}

export default HubLeaderBoard
