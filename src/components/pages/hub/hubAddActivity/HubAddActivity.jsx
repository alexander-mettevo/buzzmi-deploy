import { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCardList from "../../../reusable/cards/infoCard/InfoCardList.jsx"
import FilterTags from "../items/filterList/items/filterTags/FilterTags.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"

// mock data
import { mockItems, mockTags, presetList, addActivityTabs } from "../../../../mock-data/hub/hub.js"

const HubAddActivityContent = () => {
  const [activeTab, setActiveTab] = useState(0)
  const currentList = {
    0: mockItems,
    1: presetList,
    2: [...presetList, presetList[0]],
  }

  return (
    <div>
      <BackBtnWithTitlePage title="Add Task" btnText="Back" />
      <div className="pb-6">
        <LinkTabs list={addActivityTabs} activeTabId={activeTab} onChange={setActiveTab} />
      </div>
      <FilterTags wrapMode tags={mockTags} />
      <InfoCardList infoList={currentList[activeTab]} />
    </div>
  )
}

const HubAddActivity = () => {
  return (
    <MainLayoutContent rightColumnContent={<AdditionalInformation onPresetBtn onMyTaskBtn />}>
      <HubAddActivityContent />
    </MainLayoutContent>
  )
}

export default HubAddActivity
