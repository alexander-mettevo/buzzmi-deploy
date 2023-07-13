import { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import Calendar from "../../../reusable/calendar/Calendar.jsx"
import ProgressHeader from "../hubTread/header/ProgressHeader.jsx"
import PageNavigation from "../../../reusable/pageNavigation/PageNavigation.jsx"
import { pageNav } from "../../../../mock-data/hub/hub.js"
import HubTaskList from "../items/form/checkList/items/HubTaskList.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import CustomizableCircleChartWrapper from "../../../reusable/assets/charts/customizableCircleChart/CustomizableCircleChartWrapper.jsx"
import Box from "../../../reusable/cards/box/Box.jsx"
import HubBasicInfo from "./items/HubBasicInfo.jsx"
import HubNote from "./items/HubNote.jsx"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import Form from "../../../reusable/form/Form.jsx"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import HubMedia from "../items/hubMedia/HubMedia.jsx"
import { useParams } from "react-router-dom"
import MultiBox from "../../../reusable/cards/multiBox/MultiBox.jsx"
import { mocData } from "./mocData.js"
import HubMediaInvert from "../items/hubMedia/HubMediaInvert.jsx"
import Description from "../../../reusable/assets/description/Description.jsx"

const validationSchema = new ValidationSchema({})

const getCurrentType = (list, id) => list.filter((el) => el.id === id)[0]?.text
const HubTaskInfo = () => {
  let { id } = useParams()
  const data = mocData[id - 1]

  const [calendarValue, setCalendarValue] = useState(data?.dayList[0]?.date || null)
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
      progressInfo: data.progressInfo,
      tasks: data.tasks,
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
          lastItemLink={{ href: `/hub/preview-habit/${id}`, title: "Edit task" }}
        />
        <Form error={error} onSubmit={handleSubmit}>
          <div className="mb-4">
            <Description item={data.infoCardData} />
          </div>
          <div className="d-md-none">
            <HubMediaInvert
              title="Treadmill"
              galleryList={data?.galleryList}
              videoSrcLink={data?.videoSrcLink}
              audioSrcLink={data?.audioSrcLink}
            />
          </div>
          <div className="d-none d-md-block">
            <HubMedia
              title="Treadmill"
              galleryList={data?.galleryList}
              videoSrcLink={data?.videoSrcLink}
              audioSrcLink={data?.audioSrcLink}
            />
          </div>
          <Box className=" hub-form-box mb-4">
            <CustomizableCircleChartWrapper
              values={values.progressInfo}
              setValues={(value) => setValue("progressInfo", value)}
            />
          </Box>

          <div className="mb-4">
            <MultiBox icon="/images/hub/form/photo.png" title="Add photos of your progress">
              <PictureUploaderList
                defaultValues={data.images}
                setValue={null}
                classNames="picture-uploader__wrapper_mod"
                locked={true}
              />
            </MultiBox>
          </div>

          <MultiBox icon="/images/hub/form/check-list.png" className="mb-4" spaceMode title="Checklist">
            <HubTaskList
              showAddTask={false}
              value={values.tasks}
              setValues={(value) => setValue("tasks", value)}
              locked={true}
            />
          </MultiBox>
          <ProgressHeader text="2 complated" />
          <div className="mb-4">
            <PageNavigation list={data.pageNav} value={viewTypeId} onChange={onPageNavChange} />
          </div>
          <div className="box box_big mb-4">
            <Calendar
              value={calendarValue}
              onChange={setCalendarValue}
              dayList={data.dayList}
              period={
                currentType === data.viewTypeList.doneLastMonth || currentType === data.viewTypeList.donePastMonth
                  ? "month"
                  : undefined
              }
              buttonProps={{
                text: "View all stats",
                onClick: () => null,
              }}
            />
          </div>
          <HubBasicInfo reminder={data.basicInfo.when} repeat={data.basicInfo.repeat} when={data.basicInfo.reminder} />
          {data.noteData && <HubNote value={data.noteData} />}
          <div className="d-flex justify-content-center mt-5 mt-md-7">
            <button className="button _fw button_secondary button_m double-secondary px-6 px-lg-14">Delete</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default HubTaskInfo
