import { useState } from "react"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import mocData from "../hubCreateTask/mocData.js"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import { infoCardData } from "../../../../mock-data/hub/hub.js"
import HubTaskForm from "../items/form/hubTaskForm/HubTaskForm.jsx"
import Description from "../../../reusable/assets/description/Description.jsx"

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

const HubEditTask = () => {
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
    defaultValues: {
      repeat: {
        type: "Month",
        every: "01",
        value: "2023-08-31",
      },
      tags: ["cycling", "gym", "swimming"],
    },
  })

  return (
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage title="Cycling" btnText="Cancel" />
        <div className="mb-4">
          <Description item={infoCardData} />
        </div>
        <HubTaskForm
          values={values}
          error={error}
          handleSubmit={handleSubmit}
          setValue={setValue}
          data={data}
          btnTitle="Add task"
        />
      </div>
    </div>
  )
}

export default HubEditTask
