import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx"
import HubTasksDesktop from "./hubTasksDesktop/HubTasksDesktop.jsx"
import HubTasksMobile from "./hubTasksMobile/HubTasksMobile.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"

const mockItems = [
  {
    title: "Any time of the day",
    list: [
      {
        id: "1",
        type: "task",
        image: {
          src: "/images/hub/main/gym.png",
          alt: "Placeholder",
        },
        to: "/hub/preset-preview",
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
        id: "1",
        type: "task",
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
        id: "1",
        type: "task",
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
        id: "1",
        type: "task",
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

const HubTasks = () => {
  return (
    <MainLayoutContent rightColumnContent={<AdditionalInformation />}>
      <ResizeComponent
        desktopComponent={<HubTasksDesktop data={mockItems} />}
        mobileComponent={<HubTasksMobile data={mockItems} />}
      />
    </MainLayoutContent>
  )
}

export default HubTasks
