import React, { useState } from "react"
import Rank from "../items/rank/Rank.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import Calendar from "../../../reusable/calendar/Calendar.jsx"
import FilterList from "../items/filterList/FilterList.jsx"
import MainLayoutRightColumn from "../../../layouts/mainLayout/mainLayoutContent/mainLayoutRightColumn/MainLayoutRightColumn.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"
import UpdateInfo from "../../../reusable/updateInfo/UpdateInfo.jsx"
import PeriodList from "../../../reusable/periodList/PeriodList.jsx"
import { tabsLast } from "../../../../mock-data/hub/hub.js"

const mockItems = [
  {
    title: "Any time of the day",
    list: [
      {
        image: {
          src: "/images/hub/main/gym.png",
          alt: "Placeholder",
        },
        type: "link",
        to: "/hub/tread",
        badges: [
          {
            type: "workouts",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
      {
        image: {
          src: "/images/hub/main/list.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
      {
        image: {
          src: "/images/hub/main/drink.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
    ],
  },
  {
    title: "Any time of the day",
    list: [
      {
        image: {
          src: "/images/hub/main/gym.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
      {
        image: {
          src: "/images/hub/main/list.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
      {
        image: {
          src: "/images/hub/main/drink.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
    ],
  },
  {
    title: "Any time of the day",
    list: [
      {
        image: {
          src: "/images/hub/main/gym.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
      {
        image: {
          src: "/images/hub/main/list.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
      {
        image: {
          src: "/images/hub/main/drink.png",
          alt: "Placeholder",
        },
        badges: [
          {
            type: "workouts",
          },
          {
            type: "completed",
          },
        ],
        info: {
          title: "Strength Traning",
          text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
        },
      },
    ],
  },
]

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

const HubStats = () => {
  const [calendarValue, setCalendarValue] = useState("2023-05-01")
  const [periodType, setPeriodType] = useState(null)
  return (
    <>
      <div className="main-layout__row">
        <div className="main-layout__mid">
          <div className="mb-7">
            <Rank withAvatar />
          </div>
          <LinkTabs list={tabsLast} />
          <UpdateInfo text="Points last synced on Today, 01:30 pm" onBtnClick={() => null} />
          <PeriodList items={periodList} onClick={(periodValue) => setPeriodType(periodValue)} value={periodType} />
          <div className="box box_big mb-9">
            <Calendar
              onChange={setCalendarValue}
              value={calendarValue}
              period="week"
              noIndent
              buttonProps={{ text: "See todays tasks", handler: () => null }}
            />
          </div>
          <FilterList data={mockItems} />
        </div>

        <MainLayoutRightColumn>
          <AdditionalInformation />
        </MainLayoutRightColumn>
      </div>
    </>
  )
}

export default HubStats
