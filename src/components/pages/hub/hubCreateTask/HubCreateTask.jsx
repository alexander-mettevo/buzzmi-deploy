import React, { useState } from "react"
import mocData from "./mocData.js"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import HubCreateTaskComponent from "./HubCreateTaskComponent.jsx"

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

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

  const { handleSubmit, setValue, values } = useFormValidator(validationSchema, sendRequest, {
    defaultValues: {},
  })
  console.log("HubCreateTask", values)
  return (
    <HubCreateTaskComponent values={values} error={error} handleSubmit={handleSubmit} setValue={setValue} data={data} />
  )
}

export default HubCreateTask
