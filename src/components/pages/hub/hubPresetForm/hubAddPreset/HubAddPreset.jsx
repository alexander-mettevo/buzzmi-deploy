import { useState } from "react"
import { useFormValidator } from "../../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../../form-validator/ValidationSchema.js"
import HubPresetForm from "../HubPresetForm.jsx"

const data = {
  initPopularNames: ["Meditate", "Workout", "Drink water", "Dance", "Sleep better"],
}

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

  const { handleSubmit, setValue, values, isValid, register } = useFormValidator(validationSchema, sendRequest, {
    showErrorsOnSubmit: false,
  })

  return (
    <HubPresetForm
      error={error}
      handleSubmit={handleSubmit}
      setValue={setValue}
      values={values}
      isValid={isValid}
      register={register}
      data={data}
      title={"Add preset"}
    />
  )
}

export default HubAddPreset
