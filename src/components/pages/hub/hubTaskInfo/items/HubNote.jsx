import React from "react"
import Box from "../../../../reusable/cards/box/Box.jsx"

const TopComponent = () => (
  <div className="h4 d-flex align-items-center ">
    <img className="dropdown__icon" src="/images/hub/form/notes.png" alt="note-icon" />
    <span className="ms-3">Note</span>
  </div>
)

const HubNote = ({ value }) => {
  return (
    <Box topComponent={<TopComponent />}>
      <p className="text-r pb-6  pb-md-9">{value}</p>
    </Box>
  )
}

export default HubNote
