import { useState } from "react"
import Rank from "../items/rank/Rank.jsx"
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx"
import FilterList from "../items/filterList/FilterList.jsx"
import MainLayoutRightColumn from "../../../layouts/mainLayout/mainLayoutContent/mainLayoutRightColumn/MainLayoutRightColumn.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"
import UpdateInfo from "../../../reusable/updateInfo/UpdateInfo.jsx"
import PeriodList from "../../../reusable/periodList/PeriodList.jsx"
import { tabsLast } from "../../../../mock-data/hub/hub.js"
import RankRow from "../items/rank/items/RankRow/RankRow.jsx"

const mockItems = [
  {
    list: [
      {
        href: "/hub/tread/1",
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
        href: "/hub/tread/1",
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
        href: "/hub/tread/1",
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
    list: [
      {
        href: "/hub/tread/1",
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
        href: "/hub/tread/1",
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
        href: "/hub/tread/1",
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
    list: [
      {
        href: "/hub/tread/1",
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
        href: "/hub/tread/1",
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
        href: "/hub/tread/1",
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

const tabs = [
  {
    href: "/hub",
    title: "Hub",
  },
  {
    href: "/calendar",
    title: "Calendar",
  },
]

const HubStats = () => {
  const [calendarValue, setCalendarValue] = useState("2023-05-01")
  const [periodType, setPeriodType] = useState(0)
  return (
    <>
      <div className="main-layout__row">
        <div className="main-layout__mid">
          <div className="mb-3 d-md-none">
            <LinkTabs list={tabs} />
          </div>

          <div className="mb-7 d-none d-md-block">
            <Rank withAvatar />
          </div>
          <div className="mb-7 d-md-none">
            <RankRow withAvatar />
          </div>
          <LinkTabs list={tabsLast} />
          <UpdateInfo text="Points last synced on Today, 01:30 pm" onBtnClick={() => null} />
          <PeriodList
            ligntMode
            items={periodList}
            onClick={(periodValue) => setPeriodType(periodValue)}
            value={periodType}
          />
          {/* <div className="box box_big mb-9">
            <Calendar
              onChange={setCalendarValue}
              value={calendarValue}
              period="week"
              noIndent
              buttonProps={{ text: "See todays tasks", handler: () => null }}
            />
          </div> */}
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
