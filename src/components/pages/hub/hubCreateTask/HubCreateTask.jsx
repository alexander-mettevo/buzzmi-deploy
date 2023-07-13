import { useState } from "react"
import { useFormValidator } from "../../../../../form-validator/hooks/index"
import ValidationSchema from "../../../../../form-validator/ValidationSchema"
import HubTaskForm from "./HubTaskForm"
import { useNavigate } from "react-router-dom"

const data = {
  initPopularNames: ["Meditate", "Workout", "Drink water", "Dance", "Sleep better"],
}

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

const HubAddPreset = () => {
  const [error, setError] = useState(null)
  const navigation = useNavigate()

  //TODO example function to send request
  const sendRequest = async (formData) => {
    try {
      //TODO: send request
      console.log("formData", formData)
      navigation("/hub/edit-habit/1")
    } catch (e) {
      setError(e)
    }
  }

  const { handleSubmit, setValue, values, isValid, register } = useFormValidator(validationSchema, sendRequest, {
    showErrorsOnSubmit: false,
  })

  return (
    <HubTaskForm
      error={error}
      handleSubmit={handleSubmit}
      setValue={setValue}
      values={values}
      isValid={isValid}
      register={register}
      data={data}
      title="Add task"
    />
  )
}

export default HubAddPreset
