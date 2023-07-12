import { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCardList from "../../../reusable/cards/infoCard/InfoCardList.jsx"
import FilterTags from "../items/filterList/items/filterTags/FilterTags.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"

// mock data
import { mockItems, mockTags, presetList, addActivityTabs } from "../../../../mock-data/hub/hub.js"
import PrimaryLink from "../../../reusable/btns/links/PrimaryLink.jsx"
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx"

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
      <div className="pb-md-6 pb-4">
        <LinkTabs list={addActivityTabs} activeTabId={activeTab} onChange={setActiveTab} />
      </div>
      <div>
        <SearchInput leftIcon />
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
      <div className="d-flex bottom-mobile-button justify-content-center mt-5 d-lg-none">
        <PrimaryLink className="_fw" to="/hub/add-task">
          Add My Own Task
        </PrimaryLink>
      </div>
    </MainLayoutContent>
  )
}

export default HubAddActivity
