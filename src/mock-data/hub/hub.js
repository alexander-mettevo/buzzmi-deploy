import moment from "moment"

const getDaysInMonth = (month, year) =>
  new Array(31)
    .fill("")
    .map((v, i) => ({
      date: moment([year, month - 1, i + 1]).format("YYYY-MM-DD"),
      type: i % 3 === 0 ? "completed" : i % 4 === 0 ? "uncompleted" : null,
    }))
    .filter((v) => moment(v.date).get("month") === month - 1)

export const viewTypeList = {
  doneLastWeek: "Done last week",
  doneThisWeek: "Done this week",
  doneLastMonth: "Done last month",
  donePastMonth: "Done past month",
}

export const pageNav = [
  {
    text: viewTypeList.doneLastWeek,
    id: 0,
  },
  {
    text: viewTypeList.doneThisWeek,
    id: 1,
  },
  {
    text: viewTypeList.doneLastMonth,
    id: 2,
  },
  {
    text: viewTypeList.donePastMonth,
    id: 3,
  },
]
export const dayList = getDaysInMonth(moment().get("month") + 1, 2023)

// mock data
export const infoCardData = {
  image: {
    src: "/images/hub/main/drink.png",
    alt: "Placeholder",
  },
  info: {
    title: "Description",
    text: "Drink up! Increasing your daily water intake is vital as you to stay healthy. Dehydration can cause fatigue, indigestion, and memory lapse.",
  },
  type: null,
}

export const progressData = {
  type: "",
  initValue: 300,
  currentValue: 100,
}

export const goalList = new Array(5).fill("").map((el, index) => ({
  id: index,
  name: "Week " + (index + 1),
  goal: "3,9km",
  achieved: "3,7km",
  countActiveDays: index + 1,
  type: index % 2 === 0 ? "uncompleted" : "completed",
}))

export const basicInfo = {
  when: "Any time of the day",
  repeat: "every 3 days",
  reminder: "at 12:00",
}

export const noteData =
  "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"

export const tasksData = [
  {
    link: "",
    title: "Yoga",
    img: {
      src: "/images/hub/main/drink.png",
      alt: "Placeholder",
    },
    id: 0,
  },
  {
    link: "",
    title: "Cycling",
    img: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
    id: 1,
  },
  {
    link: "",
    title: "Drink water",
    img: {
      src: "/images/hub/main/drink.png",
      alt: "Placeholder",
    },
    id: 2,
  },
  {
    link: "",
    title: "Coffee with family",
    img: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
    id: 3,
  },
  {
    link: "",
    title: "Brush teeth",
    img: {
      src: "/images/hub/main/drink.png",
      alt: "Placeholder",
    },
    id: 4,
  },
  {
    link: "/",
    title: "Take medicine",
    img: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
    id: 5,
  },
]

export const mockItems = [
  {
    type: "link",
    to: "/hub/add-activity",
    image: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
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
    type: "link",
    to: "/hub/add-activity",
    image: {
      src: "/images/hub/main/list.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "program",
      },
    ],
    info: {
      title: "Strength Traning",
      text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
    },
  },
  {
    type: "link",
    to: "/hub/add-activity",
    image: {
      src: "/images/hub/main/drink.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "challenges",
      },
    ],
    info: {
      title: "Strength Traning",
      text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
    },
  },
]
export const presetList = mockItems.map((el) => ({
  type: "link",
  to: el.to,
  image: el.image,
  info: el.info,
}))
export const mockTags = ["all", "presets", "workouts", "habits", "program", "challenges"]
export const tabsLastMod = [
  {id: 0,
    href: "/hub/tasks",
    title: "Tasks",
  },
  {id: 1,
    href: "/hub/stats",
    title: "Stats",
  },
  {id: 2,
    href: "/hub/leaderboard",
    title: "Leaderboard",
  },
]

export const tabsLast = [
  {
    href: "/hub/tasks",
    title: "Tasks",
  },
  {
    href: "/hub/stats",
    title: "Stats",
  },
  {
    href: "/hub/leaderboard",
    title: "Leaderboard",
  },
]



export const boardItems = [
  {
    img: "/images/hub/board/01.svg",
    text: "Personal Plan Leaders",
    link: "/hub/leaders/personal-plan",
    imgList: ["/images/creators/1.jpg", "/images/creators/2.jpg", "/images/creators/3.jpg"],
    id: 0,
    itemBgColor: "light-pink",
    iconBgColor: "pink",
  },
  {
    img: "/images/hub/board/02.svg",
    text: "Habits Leaders",
    link: "/hub/leaders/habits",
    imgList: ["/images/creators/4.jpg", "/images/creators/5.jpg", "/images/creators/6.jpg"],
    id: 1,
    itemBgColor: "sky",
    iconBgColor: "light-green",
  },
  {
    img: "/images/hub/board/03.svg",
    text: "Workouts Leaders",
    link: "/hub/leaders/workout",
    imgList: ["/images/creators/7.jpg", "/images/creators/8.jpg", "/images/creators/9.jpg"],
    id: 2,
    itemBgColor: "sky",
    iconBgColor: "light-blue",
  },
  {
    img: "/images/hub/board/04.svg",
    text: "Challenges Leaders",
    link: "/hub/leaders/challenges",
    imgList: ["/images/creators/10.jpg", "/images/creators/11.jpg", "/images/creators/12.jpg"],
    id: 3,
    itemBgColor: "light-yellow",
    iconBgColor: "yellow",
  },
  {
    img: "/images/hub/board/05.svg",
    text: "Programs Leaders",
    link: "/hub/leaders/program",
    imgList: ["/images/creators/1.jpg", "/images/creators/2.jpg", "/images/creators/3.jpg"],
    id: 4,
    itemBgColor: "blue",
    iconBgColor: "dark-blue",
  },
]

export const persons = [
  {
    img: "/images/creators/1.jpg",
    name: "Jane",
    nickName: "@janedoe",
    info: "Elite creator",
    id: "1",
    values: [
      {
        value: "100, 500",
        img: "/images/hub/wallet/diamond.svg",
      },
      {
        value: "100, 500",
        img: "/images/hub/wallet/energy.svg",
      },
    ],
  },
  {
    img: "/images/creators/2.jpg",
    name: "Kate",
    nickName: "@katedoe",
    info: "Elite creator",
    id: "2",
    values: [
      {
        value: "100, 500",
        img: "/images/hub/wallet/diamond.svg",
      },
      {
        value: "100, 500",
        img: "/images/hub/wallet/energy.svg",
      },
    ],
  },
  {
    img: "/images/creators/3.jpg",
    name: "John",
    nickName: "@johndoe",
    info: "Elite creator",
    id: "3",
    values: [
      {
        value: "100, 500",
        img: "/images/hub/wallet/diamond.svg",
      },
      {
        value: "100, 500",
        img: "/images/hub/wallet/energy.svg",
      },
    ],
  },
  {
    img: "/images/creators/4.jpg",
    name: "Jane",
    nickName: "@janedoe",
    info: "Elite creator",
    id: "4",
    values: [
      {
        value: "100, 500",
        img: "/images/hub/wallet/diamond.svg",
      },
      {
        value: "100, 500",
        img: "/images/hub/wallet/energy.svg",
      },
    ],
  },
  {
    img: "/images/creators/1.jpg",
    name: "John",
    nickName: "@johndoe",
    info: "Elite creator",
    id: "5",
    values: [
      {
        value: "100, 500",
        img: "/images/hub/wallet/diamond.svg",
      },
      {
        value: "100, 500",
        img: "/images/hub/wallet/energy.svg",
      },
    ],
  },
]
