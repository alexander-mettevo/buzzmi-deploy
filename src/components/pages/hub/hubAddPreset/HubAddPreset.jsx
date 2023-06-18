import React, { useEffect, useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import AddName from "../items/form/addName/AddName.jsx"
import Form from "../../../reusable/form/Form.jsx"
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx"
import Box from "../../../reusable/cards/box/Box.jsx"
import DropdownToggle from "../../../reusable/assets/dropdown/dropdownToggle/DropdownToggle.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import VideoUploader from "../../../reusable/uploader/videoUploader/VideoUploader.jsx"
import AudioUploader from "../../../reusable/uploader/audioUploader/AudioUploader.jsx"
import Checkbox from "../../../reusable/assets/checkbox/Checkbox.jsx"
import ChoseImage from "../items/choseImage/ChoseImage.jsx"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx"
import MultiBox from "../../../reusable/cards/multiBox/MultiBox.jsx"
import HubAddPresetComponent from "./HubAddPresetComponent.jsx"

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

const HubAddPreset = () => {
  const [error, setError] = useState(null)

  //TODO example function to send request
  const sendRequest = async (formData) => {
    try {
      //TODO: send request
      console.log("formData", formData)
    } catch (e) {
      setError(e)
    }
  }

  const { handleSubmit, setValue, values, isValid, register } = useFormValidator(validationSchema, sendRequest)

  return (
    <HubAddPresetComponent
      error={error}
      handleSubmit={handleSubmit}
      setValue={setValue}
      values={values}
      isValid={isValid}
      register={register}
    />
  )
}

export default HubAddPreset
