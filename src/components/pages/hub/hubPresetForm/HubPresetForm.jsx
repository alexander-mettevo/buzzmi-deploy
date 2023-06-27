import { useEffect, useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import Form from "../../../reusable/form/Form.jsx"
import AddName from "../items/form/addName/AddName.jsx"
import ChoseImage from "../items/choseImage/ChoseImage.jsx"
import MultiBox from "../../../reusable/cards/multiBox/MultiBox.jsx"
import FormToggleDropdown from "../../../reusable/assets/dropdown/formToggleDropdown/FormToggleDropdown.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import VideoUploader from "../../../reusable/uploader/videoUploader/VideoUploader.jsx"
import AudioUploader from "../../../reusable/uploader/audioUploader/AudioUploader.jsx"
import Checkbox from "../../../reusable/assets/checkbox/Checkbox.jsx"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx"

const HubPresetForm = ({ error, handleSubmit, setValue, values, isValid, register, data = {} }) => {
  const [showInTask, setShowInTask] = useState(false)

  useEffect(() => {
    setValue("showInTask", showInTask)
  }, [showInTask])

  return (
    <div className="main-layout__single-container">
      <BackBtnWithTitlePage title="Add Preset" />
      <Form error={error} onSubmit={handleSubmit} formClassName="hub-form-wrapper">
        <AddName
          setValue={setValue}
          title="Add preset name"
          placeholder="Enter a name"
          name="name"
          register={register}
          value={values?.name || ""}
          initPopularNames={data?.initPopularNames}
        />
        <ChoseImage values={values} setValue={setValue} />
        <MultiBox title="Add description">
          <textarea
            onChange={(e) => setValue("description", e.target.value)}
            placeholder="Add a short description of the preset"
            className="textarea"
            value={values.description || ""}
          />
        </MultiBox>
        <FormToggleDropdown
          setValue={setValue}
          title="Add 4 description images"
          info="Add 4 description images"
          name="images"
          defaultValue={values?.images?.length > 0}
        >
          <PictureUploaderList defaultValues={values?.images} setValue={setValue} />
        </FormToggleDropdown>
        <FormToggleDropdown
          defaultValue={values?.video}
          setValue={setValue}
          title="Add description video"
          info="Add description video"
          name="video"
        >
          <VideoUploader defaultValue={values?.video} setValue={setValue} />
        </FormToggleDropdown>
        <FormToggleDropdown
          defaultValue={values?.audio}
          setValue={setValue}
          title="Add description audio"
          info="Add description audio"
          name="audio"
        >
          <AudioUploader defaultValue={values?.audio} setValue={setValue} />
        </FormToggleDropdown>
        <MultiBox
          icon="/images/assets/forms/task-center.png"
          title="Display in Task Center"
          rightSide={<Checkbox defaultValue={values?.showInTask} setState={setShowInTask} idChecked="showInTask" />}
        >
          <div>
            <h6 className="h6 mb-2 text-dark-secondary">Task view: Preset-based</h6>
            <p className="text-r">
              When the toggle is on, view tasks as a preset; when off, see individual tasks in the task center.
            </p>
          </div>
        </MultiBox>
        <div className="d-flex bottom-mobile-button justify-content-center mt-5">
          <SubmitButton isValid={isValid} />
        </div>
      </Form>
    </div>
  )
}

export default HubPresetForm
