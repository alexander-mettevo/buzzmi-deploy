import React, {useEffect, useState} from 'react';
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx";
import Form from "../../../reusable/form/Form.jsx";
import AddName from "../items/form/addName/AddName.jsx";
import ChoseImage from "../items/choseImage/ChoseImage.jsx";
import Box from "../../../reusable/cards/box/Box.jsx";
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


const HubEditPreset = () => {
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

  const {register, handleSubmit, setValue, isValid, values} = useFormValidator(validationSchema, sendRequest, {
    defaultValues: {
      name: 'test',
      coverImage: 'https://cdn.pixabay.com/photo/2016/11/29/09/14/walking-1868652_1280.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias asperiores atque autem commodi consequatur cumque cupiditate deserunt doloribus ducimus ea earum eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit hic id illum impedit in incidunt ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quas quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde ut vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum',
      images: [
        "https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/06/15/adult-1867743_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/04/24/20/38/bodybuilder-331670_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg"
      ],
      video: 'https://cdn.pixabay.com/vimeo/395456375/32937.mp4?width=1280&hash=e538e5b790285eee9adde29d0031e344a4a9ed1b',
      audio: '/sounds/test-track.mp3',
      showInTask: true,
    }
  });


  useEffect(() => {
    setValue('showInTask', showInTask)
  }, [showInTask])


  return (
    <div className='main-layout__single-container'>
      <BackBtnWithTitlePage title='Edit Preset'/>
      <Form error={error} onSubmit={handleSubmit} formClassName='hub-form-wrapper'>
        <AddName setValue={setValue} title='Add preset name' placeholder='Enter a name' name='name'
                 register={register}/>
        <ChoseImage values={values} setValue={setValue}/>
        <Box className='hub-form-box'>
          <h4 className="h4 mb-3 mb-lg-4">Add description</h4>
          <textarea
            onChange={e => setValue('description', e.target.value)}
            placeholder='Add a short description of the preset'
            className='textarea'
            value={values.description || ''}
          />
        </Box>
        <DropdownToggle title='Add 4 description images' info='Add 4 description images'
                        defaultValue={values?.images.length > 0} idChecked='images'>
          <PictureUploaderList defaultValues={values?.images} setValue={setValue}/>
        </DropdownToggle>
        <DropdownToggle title='Add description video' info='Add description video' defaultValue={values?.video}
                        idChecked='video'>
          <VideoUploader setValue={setValue} defaultValue={values?.video}/>
        </DropdownToggle>
        <DropdownToggle title='Add description audio' info='Add description audio' defaultValue={values?.audio}
                        idChecked='audio'>
          <AudioUploader defaultValue={values?.audio} setValue={setValue}/>
        </DropdownToggle>
        <Box className='hub-form-box'>
          <div className='mb-3 mb-lg-4 d-flex align-items-center justify-content-between dropdown__button_toggle'>
            <div className='d-flex align-items-center'>
              <img src="/images/assets/forms/task-center.png" alt="task-center"/>
              <h4 className="h4 ms-3">Display in Task Center</h4>
            </div>

            <Checkbox setState={setShowInTask} defaultValue={values?.showInTask} idChecked='showInTask'/>
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
          <SubmitButton isValid={isValid}/>
        </div>

      </Form>
    </div>
  );
};

export default HubEditPreset;