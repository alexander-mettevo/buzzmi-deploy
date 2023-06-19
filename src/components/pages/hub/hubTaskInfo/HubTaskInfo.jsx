import React, { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import InfoCard from "../../../reusable/cards/infoCard/InfoCard.jsx"
import Gallery from "../../../reusable/gallary/Gallery.jsx"
import VideoGallery from "../../../reusable/videoGallery/VideoGallery.jsx"
import AudioPlayer from "../../../reusable/audioPlayer/AudioPlayer.jsx"
import Calendar from "../../../reusable/calendar/Calendar.jsx"
import ProgressHeader from "../hubTread/header/ProgressHeader.jsx"
import PageNavigation from "../../../reusable/pageNavigation/PageNavigation.jsx"
import {
  dayList,
  infoCardData,
  pageNav,
  viewTypeList,
  progressData,
  basicInfo,
  noteData,
} from "../../../../mock-data/hub/hub.js"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"
import HubTaskList from "../items/form/checkList/items/HubTaskList.jsx"
import DropdownToggle from "../../../reusable/assets/dropdown/dropdownToggle/DropdownToggle.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import CustomizableCircleChartWrapper from "../../../reusable/assets/charts/customizableCircleChart/CustomizableCircleChartWrapper.jsx"
import Box from "../../../reusable/cards/box/Box.jsx"
import HubBasicInfo from "./items/HubBasicInfo.jsx"
import HubNote from "./items/HubNote.jsx"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import Form from "../../../reusable/form/Form.jsx"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"

const validationSchema = new ValidationSchema({})

const getCurrentType = (list, id) => list.filter((el) => el.id === id)[0]?.text
const HubTaskInfo = () => {
  const [calendarValue, setCalendarValue] = useState(dayList[0].date)
  const [viewTypeId, setViewTypeId] = useState(0)
  const [currentType, setCurrentType] = useState(getCurrentType(pageNav, 0))
  const [error, setError] = useState(null)

  const sendRequest = async (formData) => {
    try {
      //TODO: send request
      console.log("formData", formData)
    } catch (e) {
      setError(e)
    }
  }

  const { handleSubmit, setValue, values } = useFormValidator(validationSchema, sendRequest, {
    defaultValues: {
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
  })

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
        <Form error={error} onSubmit={handleSubmit}>
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
          <Box className=" hub-form-box mb-4">
            <CustomizableCircleChartWrapper
              values={values.progressInfo}
              setValues={(value) => setValue("progressInfo", value)}
            />
          </Box>

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
              <HubTaskList
                showAddTask={false}
                value={values.tasks}
                setValues={(value) => setValue("tasks", value)}
                locked={true}
              />
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
          <HubBasicInfo reminder={basicInfo.when} repeat={basicInfo.repeat} when={basicInfo.reminder} />
          {noteData && <HubNote value={noteData} />}
          <div className="d-flex justify-content-center mt-5 mt-md-7">
            <button className="button button_secondary button_m double-secondary px-6 px-lg-14">Delete</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default HubTaskInfo
