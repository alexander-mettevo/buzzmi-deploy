import { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCard from "../../../reusable/cards/infoCard/InfoCard.jsx"
import Calendar from "../../../reusable/calendar/Calendar.jsx"
import GoalList from "../../../reusable/goalList/GoalList.jsx"
import PageNavigation from "../../../reusable/pageNavigation/PageNavigation.jsx"
import ProgressHeader from "./header/ProgressHeader.jsx"
import { dayList, goalList, infoCardData, pageNav, viewTypeList } from "../../../../mock-data/hub/hub.js"
import { useParams } from "react-router-dom"
import Description from "../../../reusable/assets/description/Description.jsx"

const getCurrentType = (list, id) => list.filter((el) => el.id === id)[0]?.text

const HubTread = () => {
  const { id } = useParams()
  const [calendarValue, setCalendarValue] = useState(dayList[0].date)
  const [viewTypeId, setViewTypeId] = useState(0)
  const [currentType, setCurrentType] = useState(getCurrentType(pageNav, 0))

  const onPageNavChange = (id) => {
    setViewTypeId(id)
    if (getCurrentType) {
      setCurrentType(getCurrentType(pageNav, id))
    }
  }

  return (
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage
          title="Treadmill"
          btnText="Back to stats"
          lastItemLink={{ title: "Edit", href: `/hub/edit-task/${id}` }}
        />
        <div className="mb-4">
          <Description item={infoCardData} />
        </div>
        <ProgressHeader text="2 complated" />
        <div className="mb-4">
          <PageNavigation list={pageNav} value={viewTypeId} onChange={onPageNavChange} />
        </div>
        <div className="box box_big mb-4">
          <Calendar
            value={calendarValue}
            hasFooter
            onChange={setCalendarValue}
            dayList={dayList}
            period={
              currentType === viewTypeList.doneLastWeek || currentType === viewTypeList.doneThisWeek
                ? "week"
                : undefined
            }
          />
          <GoalList list={goalList} />
        </div>
      </div>
    </div>
  )
}

export default HubTread
