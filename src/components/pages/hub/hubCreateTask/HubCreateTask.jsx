import React, { useState } from "react"
import mocData from "./mocData.js"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import HubCreateTaskComponent from "./HubCreateTaskComponent.jsx"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton.jsx"

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
    <>
      <HubCreateTaskComponent
        values={values}
        error={error}
        handleSubmit={handleSubmit}
        setValue={setValue}
        data={data}
        btnTitle="Add task"
      />
    </>
  )
}

export default HubCreateTask
