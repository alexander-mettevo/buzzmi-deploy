import { basicInfo, dayList, infoCardData, noteData, pageNav, viewTypeList } from "../../../../mock-data/hub/hub.js"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"

export const mocData = [
  {
    infoCardData,
    galleryList,
    videoSrcLink,
    audioSrcLink: "/sounds/test-track.mp3",
    pageNav,
    dayList,
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
      type: "",
      initValue: 300,
      currentValue: 100,
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
  },
  {},
  {},
]
