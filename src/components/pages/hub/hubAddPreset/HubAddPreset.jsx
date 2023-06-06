import React, {useEffect, useState} from 'react';
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";
import AddName from "../items/form/addName/AddName.jsx";
import Form from "../../../reusable/form/Form.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import Box from "../../../reusable/cards/box/Box.jsx";
import MediaWrapper from "../../../reusable/assets/mediaWrapper/MediaWrapper.jsx";
import DropdownToggle from "../../../reusable/assets/dropdown/dropdownToggle/DropdownToggle.jsx";
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx";
import VideoUploader from "../../../reusable/uploader/videoUploader/VideoUploader.jsx";
import AudioUploader from "../../../reusable/uploader/audioUploader/AudioUploader.jsx";
import Checkbox from "../../../reusable/assets/checkbox/Checkbox.jsx";

const validationSchema = new ValidationSchema(
  {
    name: [
      {rule: 'required'},
      {rule: 'minLength', value: 3},
      {rule: 'maxLength', value: 40},
    ],
  }
);

const HubAddPreset = () => {
  const [showInTask, setShowInTask] = useState(false);
  const [error, setError] = useState(null)


  //TODO example function to send request
  const sendRequest = async (formData) => {
    try {
      //TODO: send request
      console.log('formData', formData)
    } catch (e) {
      setError(e)
    }
  }

  const {register, handleSubmit, setValue, isValid, values} = useFormValidator(validationSchema, (formData) => {
    console.log('useFormValidator', formData)
    sendRequest(formData)
  });

  useEffect(() => {
    setValue('showInTask', showInTask)
  }, [showInTask])


  return (
    <div className='main-layout__single-container'>
      <BackBtnWithTitlePage title='Add Preset'/>
      <Form error={error} onSubmit={handleSubmit} formClassName='hub-form-wrapper'>
        <AddName setValue={setValue} title='Add preset name' placeholder='Enter a name' name='name'
                 register={register}/>
        <Box className='hub-form-box d-flex justify-content-between align-items-center'>
          <h4 className="h4">Choose cover image</h4>
          <MediaWrapper/>
        </Box>
        <Box className='hub-form-box'>
          <h4 className="h4 mb-3 mb-lg-4">Add description</h4>
          <textarea
            onChange={e => setValue('description', e.target.value)}
            placeholder='Add a short description of the preset'
            className='textarea'/>
        </Box>
        <DropdownToggle title='Add 4 description images' info='Add 4 description images' idChecked='images'>
          <PictureUploaderList setValue={setValue}/>
        </DropdownToggle>
        <DropdownToggle title='Add description video' info='Add description video' idChecked='video'>
          <VideoUploader setValue={setValue}/>
        </DropdownToggle>
        <DropdownToggle title='Add description audio' info='Add description audio' idChecked='audio'>
          <AudioUploader setValue={setValue}/>
        </DropdownToggle>
        <Box className='hub-form-box'>
          <div className='mb-3 mb-lg-4 d-flex align-items-center justify-content-between dropdown__button_toggle'>
            <div className='d-flex align-items-center'>
              <img src="/images/assets/forms/task-center.png" alt="task-center"/>
              <h4 className="h4 ms-3">Display in Task Center</h4>
            </div>

            <Checkbox setState={setShowInTask} idChecked='showInTask'/>
          </div>
          <div>
            <h6 className="h6 mb-2 text-dark-secondary">
              Task view: Preset-based
            </h6>
            <p className="text-r">
              When the toggle is on, view tasks as a preset; when off, see individual tasks in the task center.
            </p>
          </div>

        </Box>
        <div className='d-flex bottom-mobile-button justify-content-center mt-5'>
          <PrimaryButton className={` ${!isValid ? 'button_inactive' : ''}`} type="submit"
                        >Continue</PrimaryButton>
        </div>
      </Form>
    </div>
  );
};

export default HubAddPreset;