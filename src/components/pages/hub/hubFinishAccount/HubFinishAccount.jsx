import React from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import SmallCardDispatcher from "../../../reusable/cards/smallCard/SmallCardDispatcher.jsx"
import { tasksData } from "../../../../mock-data/hub/hub.js"

const HubFinishAccount = () => {
  return (
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage title="Finish your account setup" />
        <div className="present-preview__cards">
          <SmallCardDispatcher list={tasksData} />
        </div>
      </div>
    </div>
  )
}

export default HubFinishAccount
