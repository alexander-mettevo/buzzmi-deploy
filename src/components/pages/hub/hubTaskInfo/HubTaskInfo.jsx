import React, { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCard from "../../../reusable/cards/infoCard/InfoCard.jsx"
import Gallery from "../../../reusable/gallary/Gallery.jsx"
import VideoGallery from "../../../reusable/videoGallery/VideoGallery.jsx"
import AudioPlayer from "../../../reusable/audioPlayer/AudioPlayer.jsx"
import Calendar from "../../../reusable/calendar/Calendar.jsx"
import moment from "moment"
import ProgressHeader from "../hubTread/header/ProgressHeader.jsx"
import PageNavigation from "../../../reusable/pageNavigation/PageNavigation.jsx"
import { checkList, dayList, infoCardData, pageNav, viewTypeList } from "../../../../mock-data/hub/hub.js"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"
import HubTaskList from "../items/form/checkList/items/HubTaskList.jsx"
import DropdownToggle from "../../../reusable/assets/dropdown/dropdownToggle/DropdownToggle.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"

const getCurrentType = (list, id) => list.filter((el) => el.id === id)[0]?.text
const HubTaskInfo = () => {
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
          lastItemLink={{ href: "/", title: "Edit task" }}
        />
        <div className="mb-4">
          <InfoCard item={infoCardData} />
        </div>
        <div className="hub__holder">
          <Gallery list={galleryList} isSmall />
          <div className="hub__media">
            <div className="hub__video mb-3">
              <VideoGallery src={videoSrcLink} />
            </div>
            <div className="hub__audio">
              <AudioPlayer src="/sounds/test-track.mp3" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <DropdownToggle
            icon="/images/hub/form/photo.png"
            title="Add photos of your progress"
            idChecked="photos"
            isEditable={true}
            defaultValue={true}
            editBtnText="Edit"
          >
            <PictureUploaderList setValue={null} classNames="picture-uploader__wrapper_mod" locked={true} />
          </DropdownToggle>
        </div>

        <div className="mb-4">
          <DropdownToggle
            icon="/images/hub/form/check-list.png"
            title="Checklist"
            idChecked="checklist"
            defaultValue={true}
            isEditable={true}
            editBtnText="Edit"
          >
            <HubTaskList value={checkList} setValues={null} locked={true} />
          </DropdownToggle>
        </div>
        <ProgressHeader text="2 complated" />
        <div className="mb-4">
          <PageNavigation list={pageNav} value={viewTypeId} onChange={onPageNavChange} />
        </div>
        <div className="box box_big mb-4">
          <Calendar
            value={calendarValue}
            onChange={setCalendarValue}
            dayList={dayList}
            period={
              currentType === viewTypeList.doneLastWeek || currentType === viewTypeList.doneThisWeek
                ? "week"
                : undefined
            }
            buttonProps={{
              text: "View all stats",
              onClick: () => null,
            }}
          />
        </div>
        <div className="d-flex justify-content-center ">
          <button className="button button_secondary button_m double-secondary px-6 px-lg-14">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default HubTaskInfo
