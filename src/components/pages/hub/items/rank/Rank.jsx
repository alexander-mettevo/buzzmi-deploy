import React from "react"
import Box from "../../../../reusable/cards/box/Box.jsx"
import RankRow from "./items/RankRow/RankRow.jsx"
import { Link } from "react-router-dom"

const RankTop = () => (
  <div className={"d-flex justify-content-between align-items-center"}>
    <h4 className="h4">Your Rank</h4>
    <Link to="/hub/leaderboard" className="text-alt-primary d-none d-lg-block">
      View rank ladder
    </Link>
  </div>
)

const Rank = ({ withAvatar }) => {
  return (
    <Box paddingMode="rank" topComponent={<RankTop />}>
      <RankRow withAvatar={withAvatar} />
    </Box>
  )
}

export default Rank
