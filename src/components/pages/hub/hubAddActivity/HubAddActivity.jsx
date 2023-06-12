import React, { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCardList from "../../../reusable/cards/infoCard/InfoCardList.jsx"
import FilterTags from "../items/filterList/items/filterTags/FilterTags.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"

// mock data
import { mockItems, mockTags, presetList, tabsLast } from "../../../../mock-data/hub/hub.js"

const HubAddActivityContent = () => {
  const [activeTab, setActiveTab] = useState(0)
  const currentList = {
    0: mockItems,
    1: presetList,
    2: [...presetList, presetList[0]],
  }

  return (
    <div className="small-container">
      <BackBtnWithTitlePage title="Add Task" btnText="Back" />
      <div className="pb-6">
        <LinkTabs list={tabsLast} activeTabId={activeTab} onChange={setActiveTab} />
      </div>
      <FilterTags tags={mockTags} />
      <InfoCardList infoList={currentList[activeTab]} />
    </div>
  )
}

const HubAddActivity = () => {
  return (
    <MainLayoutContent>
      <HubAddActivityContent />
    </MainLayoutContent>
  )
}

export default HubAddActivity
