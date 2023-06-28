import { useState } from "react"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"
import HubMedia from "../items/hubMedia/HubMedia.jsx"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import { useParams } from "react-router-dom"
import mocData from "../hubCreateTask/mocData.js"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import HubTaskForm from "../items/form/hubTaskForm/HubTaskForm.jsx"

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

const HubEditTask = () => {
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
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage
          title={data.title}
          btnText="Back to stats"
          lastItemLink={{ href: `/hub/task-info/${id}`, title: "Cancel" }}
        />
        <HubMedia
          title={data.title}
          galleryList={galleryList}
          videoSrcLink={videoSrcLink}
          audioSrcLink="/sounds/test-track.mp3"
        />
        <HubTaskForm
          values={values}
          error={error}
          handleSubmit={handleSubmit}
          setValue={setValue}
          data={data}
          btnTitle="Save"
        />
      </div>
    </div>
  )
}

export default HubEditTask
