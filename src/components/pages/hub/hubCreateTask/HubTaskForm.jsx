import { useEffect, useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage"
import Form from "../../../reusable/form/Form"
import ChoseImage from "../items/choseImage/ChoseImage"
import FormToggleDropdown from "../../../reusable/assets/dropdown/formToggleDropdown/FormToggleDropdown"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList"
import VideoUploader from "../../../reusable/uploader/videoUploader/VideoUploader"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton"
import AddName from "../items/form/addName/AddName"
import MultiBox from "../../../reusable/cards/multiBox/MultiBox"
import AudioUploader from "../../../reusable/uploader/audioUploader/AudioUploader"

const HubTaskForm = ({ error, handleSubmit, setValue, values, isValid, register, data = {}, title }) => {
  const [showInTask, setShowInTask] = useState(false)

  useEffect(() => {
    setValue("showInTask", showInTask)
  }, [showInTask])

  return (
    <div className="main-layout__single-container">
      <BackBtnWithTitlePage title={title} />
      <Form error={error} onSubmit={handleSubmit} formClassName="hub-form-wrapper">
        <AddName
          setValue={setValue}
          title="Add task name"
          placeholder="Enter a name"
          name="name"
          register={register}
          value={values?.name || ""}
          initPopularNames={data?.initPopularNames}
        />
        <ChoseImage values={values} setValue={setValue} />
        <MultiBox title="Add description" miniMode>
          <textarea
            onChange={(e) => setValue("description", e.target.value)}
            placeholder="Short description of the task in a few words"
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
          miniMode
        >
          <PictureUploaderList defaultValues={values?.images} setValue={setValue} />
        </FormToggleDropdown>
        <FormToggleDropdown
          defaultValue={values?.video}
          setValue={setValue}
          title="Add description video"
          info="Add description video"
          name="video"
          miniMode
        >
          <VideoUploader title={values?.name || ""} defaultValue={values?.video} setValue={setValue} />
        </FormToggleDropdown>
        <FormToggleDropdown
          defaultValue={values?.audio}
          setValue={setValue}
          title="Add description audio"
          info="Add description audio"
          name="audio"
          miniMode
        >
          <AudioUploader defaultValue={values?.audio} setValue={setValue} />
        </FormToggleDropdown>
        <div className="d-flex bottom-mobile-button justify-content-center mt-5">
          <SubmitButton isValid={isValid} title="Save and Continue" />
        </div>
      </Form>
    </div>
  )
}

export default HubTaskForm
