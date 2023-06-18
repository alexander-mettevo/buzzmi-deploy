import React, { useEffect, useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import Form from "../../../reusable/form/Form.jsx"
import AddName from "../items/form/addName/AddName.jsx"
import ChoseImage from "../items/choseImage/ChoseImage.jsx"
import MultiBox from "../../../reusable/cards/multiBox/MultiBox.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import VideoUploader from "../../../reusable/uploader/videoUploader/VideoUploader.jsx"
import AudioUploader from "../../../reusable/uploader/audioUploader/AudioUploader.jsx"
import Box from "../../../reusable/cards/box/Box.jsx"
import Checkbox from "../../../reusable/assets/checkbox/Checkbox.jsx"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx"
import FormToggleDropdown from "../../../reusable/assets/dropdown/formToggleDropdown/FormToggleDropdown.jsx"

const HubAddPresetComponent = ({ error, handleSubmit, setValue, values, isValid, register }) => {
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
        />
        <ChoseImage values={values} setValue={setValue} />
        <MultiBox title="Add description">
          <textarea
            onChange={(e) => setValue("description", e.target.value)}
            placeholder="Add a short description of the preset"
            className="textarea"
          />
        </MultiBox>
        <FormToggleDropdown
          setValue={setValue}
          title="Add 4 description images"
          info="Add 4 description images"
          name="images"
        >
          <PictureUploaderList setValue={setValue} />
        </FormToggleDropdown>
        <FormToggleDropdown setValue={setValue} title="Add description video" info="Add description video" name="video">
          <VideoUploader setValue={setValue} />
        </FormToggleDropdown>
        <FormToggleDropdown setValue={setValue} title="Add description audio" info="Add description audio" name="audio">
          <AudioUploader setValue={setValue} />
        </FormToggleDropdown>
        <MultiBox
          icon="/images/assets/forms/task-center.png"
          title="Display in Task Center"
          rightSide={<Checkbox setState={setShowInTask} idChecked="showInTask" />}
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

export default HubAddPresetComponent
