import { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import Calendar from "../../../reusable/calendar/Calendar.jsx"
import GoalList from "../../../reusable/goalList/GoalList.jsx"
import PageNavigation from "../../../reusable/pageNavigation/PageNavigation.jsx"
import ProgressHeader from "./header/ProgressHeader.jsx"
import { dayList, goalList, infoCardData, pageNav, viewTypeList } from "../../../../mock-data/hub/hub.js"
import { useParams } from "react-router-dom"
import Description from "../../../reusable/assets/description/Description.jsx"
import Box from "../../../reusable/cards/box/Box.jsx"

const getCurrentType = (list, id) => list.filter((el) => el.id === id)[0]?.text

const TopComponent = ({ goal, repeat }) => (
  <div className="">
    <div className="d-flex align-items-center mb-21">
      <div className="h5 me-2">Goal:</div>
      <div className="text-r calendar__info">{goal}</div>
    </div>
    <div className="d-flex align-items-center">
      <div className="h5 me-2">Repeat:</div>
      <div className="text-r calendar__info">{repeat}</div>
    </div>
  </div>
)

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
        <Box topComponent={<TopComponent goal="1.3 km" repeat="Every 3 days" />} className="box mb-4">
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
        </Box>
      </div>
    </div>
  )
}

export default HubTread
