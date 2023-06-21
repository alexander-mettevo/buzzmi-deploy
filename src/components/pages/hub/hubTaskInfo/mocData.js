import { basicInfo, dayList, infoCardData, noteData, pageNav } from "../../../../mock-data/hub/hub.js"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"

const viewTypeList = {
  doneLastMonth: "Done last month",
  donePastMonth: "Done past month",
  doneLastWeek: "Done last week",
  doneThisWeek: "Done this week",
}

export const mocData = [
  {
    infoCardData,
    galleryList,
    videoSrcLink,
    audioSrcLink: "/sounds/test-track.mp3",
    pageNav,
    basicInfo,
    noteData,
    viewTypeList,
    images: [
      "https://cdn.pixabay.com/photo/2016/11/22/21/38/action-1850677_640.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/22/28/person-1281607_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg",
      "https://cdn.pixabay.com/photo/2019/07/11/02/15/yoga-day-4329901_640.jpg",
    ],
    progressInfo: {
      currentValue: 1.33,
      initValue: 3,
      type: "distanceMetric",
    },
    tasks: [
      {
        id: 16865620703,
        name: "First glass of water in the morning",
        completed: false,
      },
      {
        id: 168656256431,
        name: "Drink water before thirsty",
        completed: false,
      },
      {
        id: 16865627431,
        name: "Drink 8 glass of water",
        completed: false,
      },
    ],
    dayList: [
      {
        date: "2023-06-01",
        type: "completed",
      },
      {
        date: "2023-06-02",
        type: null,
      },
      {
        date: "2023-06-03",
        type: null,
      },
      {
        date: "2023-06-04",
        type: "completed",
      },
      {
        date: "2023-06-05",
        type: "uncompleted",
      },
      {
        date: "2023-06-06",
        type: null,
      },
      {
        date: "2023-06-07",
        type: "completed",
      },
      {
        date: "2023-06-08",
        type: null,
      },
      {
        date: "2023-06-09",
        type: "uncompleted",
      },
      {
        date: "2023-06-10",
        type: "completed",
      },
      {
        date: "2023-06-11",
        type: null,
      },
      {
        date: "2023-06-12",
        type: null,
      },
      {
        date: "2023-06-13",
        type: "completed",
      },
      {
        date: "2023-06-14",
        type: null,
      },
      {
        date: "2023-06-15",
        type: null,
      },
      {
        date: "2023-06-16",
        type: "completed",
      },
      {
        date: "2023-06-17",
        type: "uncompleted",
      },
      {
        date: "2023-06-18",
        type: null,
      },
      {
        date: "2023-06-19",
        type: "completed",
      },
      {
        date: "2023-06-20",
        type: null,
      },
      {
        date: "2023-06-21",
        type: "uncompleted",
      },
      {
        date: "2023-06-22",
        type: "completed",
      },
      {
        date: "2023-06-23",
        type: null,
      },
      {
        date: "2023-06-24",
        type: null,
      },
      {
        date: "2023-06-25",
        type: "completed",
      },
      {
        date: "2023-06-26",
        type: null,
      },
      {
        date: "2023-06-27",
        type: null,
      },
      {
        date: "2023-06-28",
        type: "completed",
      },
      {
        date: "2023-06-29",
        type: "uncompleted",
      },
      {
        date: "2023-06-30",
        type: null,
      },
    ],
  },
  {
    infoCardData,
    galleryList,
    videoSrcLink,
    pageNav,
    basicInfo,
    viewTypeList,
    images: [
      "https://cdn.pixabay.com/photo/2016/11/22/21/38/action-1850677_640.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/22/28/person-1281607_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg",
      "https://cdn.pixabay.com/photo/2019/07/11/02/15/yoga-day-4329901_640.jpg",
    ],
    progressInfo: {
      currentValue: 0,
      initValue: 3,
      type: "",
    },
    tasks: [
      {
        id: 16865620703,
        name: "First glass of water in the morning",
        completed: false,
      },
      {
        id: 168656256431,
        name: "Drink water before thirsty",
        completed: false,
      },
      {
        id: 16865627431,
        name: "Drink 8 glass of water",
        completed: false,
      },
    ],
    dayList: [],
  },
  {
    infoCardData,
    galleryList,
    audioSrcLink: "/sounds/test-track.mp3",
    pageNav,
    basicInfo,
    noteData,
    viewTypeList,
    images: [
      "https://cdn.pixabay.com/photo/2016/11/22/21/38/action-1850677_640.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/22/28/person-1281607_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg",
      "https://cdn.pixabay.com/photo/2019/07/11/02/15/yoga-day-4329901_640.jpg",
    ],
    progressInfo: {
      currentValue: 5000,
      initValue: 1200000,
      type: "time",
    },
    tasks: [
      {
        id: 16865620703,
        name: "First glass of water in the morning",
        completed: false,
      },
      {
        id: 168656256431,
        name: "Drink water before thirsty",
        completed: false,
      },
      {
        id: 16865627431,
        name: "Drink 8 glass of water",
        completed: false,
      },
    ],
    dayList: [],
  },
]
