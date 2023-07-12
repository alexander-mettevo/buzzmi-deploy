import React from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCard from "../../../reusable/cards/infoCard/InfoCard.jsx"
import { infoCardData, tasksData } from "../../../../mock-data/hub/hub.js"
import SmallCardDispatcher from "../../../reusable/cards/smallCard/SmallCardDispatcher.jsx"

const HubTaskPresetEdit = () => {
  return (
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage title="Energetic Morning" btnText="Back" />

        <div className="mb-4">
          <InfoCard item={infoCardData} />
        </div>
        <div className="present-preview__cards">
          <SmallCardDispatcher type="form" list={tasksData} />
        </div>
      </div>
    </div>
  )
}

export default HubTaskPresetEdit
