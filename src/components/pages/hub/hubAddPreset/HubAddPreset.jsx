import React, {useState} from 'react';
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";
import AddName from "../items/form/addName/AddName.jsx";
import Form from "../../../reusable/form/Form.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";

const validationSchema = new ValidationSchema(
  {
    name: [
      {rule: 'required'},
      { rule: 'minLength', value: 3 },
      { rule: 'maxLength', value: 40 },
    ],
  }
);

const HubAddPreset = () => {
  const [error, setError] = useState(null)

  //TODO example function to send request
  const sendRequest = async (formData) => {
   try {
      //TODO: send request
   } catch (e) {
      setError(e)
   }
  }

  const {register, handleSubmit, setValue, isValid} = useFormValidator(validationSchema, (formData) => {
    sendRequest(formData)
  });

  return (
    <div>
      <BackBtnWithTitlePage title='Add Preset'/>
      <Form error={error} onSubmit={handleSubmit}>
        <AddName setValue={setValue} title='Add preset name' placeholder='Enter a name' name='name' register={register}/>

        <div className='d-flex justify-content-center'>
          <PrimaryButton className={`mb-7 ${!isValid ? 'button_inactive' : ''}`} type="submit" form="input-bio">Continue</PrimaryButton>
        </div>
      </Form>
    </div>
  );
};

export default HubAddPreset;