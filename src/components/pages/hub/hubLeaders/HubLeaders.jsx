import React, { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import { useParams } from "react-router-dom"
import PeriodList from "../../../reusable/periodList/PeriodList.jsx"
import PersonalCard from "../../../reusable/cards/personalCard/PersonalCard.jsx"

//mocks

import { persons } from "../../../../mock-data/hub/hub.js"
const leaders = {
  0: persons[0],
  1: persons[1],
  2: persons[2],
}

const periodList = [
  {
    id: 0,
    text: "Last week",
  },
  {
    id: 1,
    text: "This week",
  },
  {
    id: 2,
    text: "Last Month",
  },
  {
    id: 3,
    text: "This month",
  },
  {
    id: 4,
    text: "Year",
  },
]

const HubLeaders = () => {
  const { type } = useParams()
  const [period, setPeriod] = useState(0)

  return (
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage title="Leaderboard" btnText="Back " />
        <div className="hub__leaders">
          <div className="hub__leaders-item hub__leaders-item--first">
            <div className="hub__leaders-item-img">
              <img src={leaders[0].img} alt={leaders[0].name} />
            </div>
            <div className="hub__leaders-item-text">{leaders[0].nickName}</div>
          </div>
          <div className="hub__leaders-item hub__leaders-item--second">
            <div className="hub__leaders-item-img">
              <img src={leaders[1].img} alt={leaders[1].name} />
            </div>
            <div className="hub__leaders-item-text">{leaders[1].nickName}</div>
          </div>
          <div className="hub__leaders-item hub__leaders-item--third">
            <div className="hub__leaders-item-img">
              <img src={leaders[2].img} alt={leaders[2].name} />
            </div>
            <div className="hub__leaders-item-text">{leaders[2].nickName}</div>
          </div>
          <span className="hub__leaders-text">{type.replaceAll("-", " ")} leaders</span>
        </div>
        <PeriodList items={periodList} value={period} onClick={setPeriod} />
        <div className="personal-card__list">
          {persons.map((person) => {
            return <PersonalCard {...person} key={person.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HubLeaders
