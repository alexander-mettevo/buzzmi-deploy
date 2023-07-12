import React, { useState } from "react"
import mocData from "./mocData.js"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import HubTaskForm from "../items/form/hubTaskForm/HubTaskForm.jsx"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"

const validationSchema = new ValidationSchema({})

const HubCreateTask = () => {
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

  const { handleSubmit, setValue, values, isValid } = useFormValidator(validationSchema, sendRequest, {
    defaultValues: {},
  })

  return (
    <div className="main-layout__single-container">
      <BackBtnWithTitlePage title={data?.title} />
      <HubTaskForm
        values={values}
        error={error}
        handleSubmit={handleSubmit}
        setValue={setValue}
        data={data}
        btnTitle="Add task"
      />
    </div>
  )
}

export default HubCreateTask
