import Rank from "../../items/rank/Rank.jsx"
import Button from "../../../../reusable/btns/buttons/Button.jsx"
import { Link } from "react-router-dom"
import InfoCardList from "../../../../reusable/cards/infoCard/InfoCardList.jsx"
import HubAccess from "../items/hubAccess/HubAccess.jsx"

//TODO: mock data
const infoList = [
  {
    id: "1",
    type: "task",
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
    id: "1",
    type: "task",
    image: {
      src: "/images/hub/main/list.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "habits",
      },
    ],
    info: {
      title: "Drink your water",
      text: "Drink up! Increasing your daily water intake is vital as you to stay healthy. Dehydration can cause fatigue, indigestion, a...",
    },
  },
  {
    id: "1",
    type: "anothe",
    href: "/hub/finish-account",
    image: {
      src: "/images/hub/main/drink.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "buzzmiTasks",
      },
      {
        type: "completed",
      },
    ],
    info: {
      title: "Finish your account setup",
      text: "Draink up! Increasing your daily water",
    },
  },
]

const HubMainDesktop = () => {
  return (
    <>
      <h1 className={"h3 mb-21"}>Rise and shine, Jane!</h1>
      <p className={"text-b mb-4"}>We're here to help you power through your to-do's and make the most of your day.</p>
      <Rank withAvatar />
      <div className={"d-flex justify-content-between align-items-center mt-6 mt-lg-9 mb-lg-3 mb-5"}>
        <h4 className={"h4"}>My plan for today</h4>
        <Link to={"/hub/tasks"}>
          <Button className={"button_secondary button_m double-secondary px-6 px-lg-14"}>See All tasks</Button>
        </Link>
      </div>
      <InfoCardList infoList={infoList} />
      <div className={"d-flex justify-content-between align-items-center mt-6 mt-lg-9 mb-lg-3 mb-5"}>
        <h4 className={"h4"}>Quick access</h4>
        <Link to={"/hub/tasks"} className={"text-alt-primary"}>
          Edit
        </Link>
      </div>
      <HubAccess />
    </>
  )
}

export default HubMainDesktop
