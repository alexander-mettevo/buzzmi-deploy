import { useState } from "react"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import { useParams } from "react-router-dom"
import mocData from "../hubCreateTask/mocData.js"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import Description from "../../../reusable/assets/description/Description.jsx"
import HubMediaInvert from "../items/hubMedia/HubMediaInvert.jsx"
import HubMedia from "../items/hubMedia/HubMedia.jsx"
import HubPreviewHabitForm from "./HubPreviewHabitForm.jsx"

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

const HubPreviewHabit = () => {
  let { id } = useParams()
  const data = mocData
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
    defaultValues: {},
  })
  return (
    <div className="hub hub-edit-task">
      <div className="hub__content">
        <BackBtnWithTitlePage title={data.title} />
        <div className="mb-4">
          <Description item={data.description} />
        </div>
        <div className="d-md-none">
          <HubMediaInvert
            title={data.title}
            galleryList={galleryList}
            videoSrcLink={videoSrcLink}
            audioSrcLink="/sounds/test-track.mp3"
          />
        </div>
        <div className="d-none d-md-block">
          <HubMedia
            title={data.title}
            galleryList={galleryList}
            videoSrcLink={videoSrcLink}
            audioSrcLink="/sounds/test-track.mp3"
          />
        </div>

        <HubPreviewHabitForm
          values={values}
          error={error}
          handleSubmit={handleSubmit}
          setValue={setValue}
          data={data}
        />
      </div>
    </div>
  )
}

export default HubPreviewHabit
