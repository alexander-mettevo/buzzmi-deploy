import React, {useEffect, useState} from 'react';
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx";
import Form from "../../../reusable/form/Form.jsx";

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
    }
  });

  console.log('values', values)

  useEffect(() => {
    setValue('showInTask', showInTask)
  }, [showInTask])

  return (
    <div className='main-layout__single-container'>
      <BackBtnWithTitlePage title='Edit Preset'/>
      <Form error={error} onSubmit={handleSubmit} formClassName='hub-form-wrapper'>

        <div className='d-flex bottom-mobile-button justify-content-center mt-5'>
          <SubmitButton isValid={isValid}/>
        </div>
      </Form>
    </div>
  );
};

export default HubEditPreset;