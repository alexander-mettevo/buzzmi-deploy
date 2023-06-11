import React, { useState } from "react"
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import mocData from "./mocData.js"
import DropdownToggle from "../../../reusable/assets/dropdown/dropdownToggle/DropdownToggle.jsx"
import { useFormValidator } from "../../../../../form-validator/hooks/index.js"
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js"
import Form from "../../../reusable/form/Form.jsx"
import HubTaskList from "../items/form/checkList/items/HubTaskList.jsx"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList.jsx"
import CheckTags from "../items/form/checkTags/CheckTags.jsx"

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

  const { register, handleSubmit, setValue, isValid, values } = useFormValidator(validationSchema, sendRequest, {
    defaultValues: {
      tasks: [],
      images: [],
      tags: [],
      note: "",
    },
  })

  return (
    <div className="main-layout__single-container">
      <BackBtnWithTitlePage title={data?.title} />
      <Form error={error} onSubmit={handleSubmit} formClassName="hub-form-wrapper">
        <DropdownToggle icon="/images/hub/form/calendar.png" title="When?" idChecked="when">
          Test
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/repeat.png" title="Repeat" idChecked="repeat">
          Repeat
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/goal.png" title="Set a goal" idChecked="goal">
          Set a goal
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/clock.png" title="Reminder" idChecked="reminder">
          Reminder
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/check-list.png" title="Checklist" idChecked="checklist">
          <HubTaskList value={values.tasks} setValues={(value) => setValue("tasks", value)} />
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/notes.png" title="Note" idChecked="note">
          <input
            value={values.note}
            type="text"
            className="input input_simple-text"
            placeholder="Add your note here"
            onChange={(e) => setValue("note", e.target.value)}
          />
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/photo.png" title="Add photos of your progress" idChecked="photos">
          <PictureUploaderList
            classNames="picture-uploader__wrapper_mod"
            setValue={setValue}
            defaultValues={values.images}
          />
        </DropdownToggle>
        <DropdownToggle icon="/images/hub/form/hash.png" title="Tags" idChecked="tags">
          <CheckTags tags={data.tags} value={values.tags} setValue={setValue} valueName="tags" />
        </DropdownToggle>
      </Form>
    </div>
  )
}

export default HubCreateTask
