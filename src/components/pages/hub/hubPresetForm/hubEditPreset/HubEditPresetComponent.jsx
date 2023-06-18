import React, { useEffect, useState } from "react"
import BackBtnWithTitlePage from "../../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import Form from "../../../../reusable/form/Form.jsx"
import AddName from "../../items/form/addName/AddName.jsx"
import ChoseImage from "../../items/choseImage/ChoseImage.jsx"
import Box from "../../../../reusable/cards/box/Box.jsx"
import DropdownToggle from "../../../../reusable/assets/dropdown/dropdownToggle/DropdownToggle.jsx"
import PictureUploaderList from "../../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import VideoUploader from "../../../../reusable/uploader/videoUploader/VideoUploader.jsx"
import AudioUploader from "../../../../reusable/uploader/audioUploader/AudioUploader.jsx"
import Checkbox from "../../../../reusable/assets/checkbox/Checkbox.jsx"
import SubmitButton from "../../../../reusable/btns/buttons/submitButton/SubmitButton.jsx"

const HubEditPresetComponent = ({ error, handleSubmit, setValue, values, isValid, register }) => {
  const [showInTask, setShowInTask] = useState(false)

  useEffect(() => {
    setValue("showInTask", showInTask)
  }, [showInTask])

  return (
    <div className="main-layout__single-container">
      <BackBtnWithTitlePage title="Edit Preset" />
      <Form error={error} onSubmit={handleSubmit} formClassName="hub-form-wrapper">
        <AddName
          setValue={setValue}
          title="Add preset name"
          placeholder="Enter a name"
          name="name"
          register={register}
        />
        <ChoseImage values={values} setValue={setValue} />
        <Box className="hub-form-box">
          <h4 className="h4 mb-3 mb-lg-4">Add description</h4>
          <textarea
            onChange={(e) => setValue("description", e.target.value)}
            placeholder="Add a short description of the preset"
            className="textarea"
            value={values.description || ""}
          />
        </Box>
        <DropdownToggle
          title="Add 4 description images"
          info="Add 4 description images"
          defaultValue={values?.images.length > 0}
          idChecked="images"
        >
          <PictureUploaderList defaultValues={values?.images} setValue={setValue} />
        </DropdownToggle>
        <DropdownToggle
          title="Add description video"
          info="Add description video"
          defaultValue={values?.video}
          idChecked="video"
        >
          <VideoUploader setValue={setValue} defaultValue={values?.video} />
        </DropdownToggle>
        <DropdownToggle
          title="Add description audio"
          info="Add description audio"
          defaultValue={values?.audio}
          idChecked="audio"
        >
          <AudioUploader defaultValue={values?.audio} setValue={setValue} />
        </DropdownToggle>
        <Box className="hub-form-box">
          <div className="mb-3 mb-lg-4 d-flex align-items-center justify-content-between dropdown__button_toggle">
            <div className="d-flex align-items-center">
              <img src="/images/assets/forms/task-center.png" alt="task-center" />
              <h4 className="h4 ms-3">Display in Task Center</h4>
            </div>

            <Checkbox setState={setShowInTask} defaultValue={values?.showInTask} idChecked="showInTask" />
          </div>
          <div>
            <h6 className="h6 mb-2 text-dark-secondary">Task view: Preset-based</h6>
            <p className="text-r">
              When the toggle is on, view tasks as a preset; when off, see individual tasks in the task center.
            </p>
          </div>
        </Box>
        <div className="d-flex bottom-mobile-button justify-content-center mt-5">
          <SubmitButton isValid={isValid} />
        </div>
      </Form>
    </div>
  )
}

export default HubEditPresetComponent
