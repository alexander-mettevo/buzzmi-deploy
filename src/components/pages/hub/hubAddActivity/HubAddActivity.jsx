import { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import FilterTags from "../items/filterList/items/filterTags/FilterTags.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"

// mock data
import { mockItems, mockTags, presetList, addActivityTabs } from "../../../../mock-data/hub/hub.js"
import PrimaryLink from "../../../reusable/btns/links/PrimaryLink.jsx"
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx"
import SmallCardDispatcher from "../../../reusable/cards/smallCard/SmallCardDispatcher.jsx"
import InfoCardList from "../../../reusable/cards/infoCard/InfoCardList.jsx"

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
      <div className="pb-lg-6">
        <LinkTabs list={addActivityTabs} activeTabId={activeTab} onChange={setActiveTab} />
      </div>
      <div className="d-lg-none">{activeTab === 0 && <SearchInput leftIcon />}</div>
      <FilterTags wrapMode tags={mockTags} />
      <div className="d-none d-md-block">
        <InfoCardList infoList={currentList[activeTab]} />
      </div>
      <div className="d-md-none">
        <SmallCardDispatcher list={currentList[activeTab]} />
      </div>
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
