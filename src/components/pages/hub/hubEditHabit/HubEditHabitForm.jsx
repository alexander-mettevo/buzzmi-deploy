import FormToggleDropdown from "../../../reusable/assets/dropdown/formToggleDropdown/FormToggleDropdown"
import SubmitButton from "../../../reusable/btns/buttons/submitButton/SubmitButton"
import CustomLink from "../../../reusable/btns/links/CustomLink"
import MultiBox from "../../../reusable/cards/multiBox/MultiBox"
import Form from "../../../reusable/form/Form"
import PictureUploaderList from "../../../reusable/uploader/pictureUploader/PictureUploaderList"
import HubTaskList from "../items/form/checkList/items/HubTaskList"
import CheckTags from "../items/form/checkTags/CheckTags"
import HubReminder from "../items/form/hubReminder/HubReminder"
import HubRepeat from "../items/form/hubRepeat/HubRepeat"
import RadioMode from "../items/form/radioMode/RadioMode"
import SetGoal from "../items/form/setGoal/SetGoal"
import SpecificTime from "../items/specificTime/SpecificTime"

const when = [
  { title: "Morning", value: "morning" },
  { title: "Afternoon", value: "afternoon" },
  { title: "Evening", value: "evening" },
  { title: "Any time", value: "anyTime" },
]

const HubEditHabitForm = ({ values, error, handleSubmit, data, setValue }) => {
  return (
    <Form id="task-form" error={error} onSubmit={handleSubmit} formClassName="hub-form-wrapper">
      <MultiBox
        setValue={setValue}
        icon="/images/hub/form/calendar.png"
        defaultValue="anyTime"
        title="When?"
        name="when"
      >
        <RadioMode setValue={setValue} value={values.when} name="when" variants={when} defaultValue="anyTime" />
        <SpecificTime values={values.specTime} setValues={(value) => setValue("specTime", value)} />
      </MultiBox>
      <FormToggleDropdown
        setValue={setValue}
        icon="/images/hub/form/repeat.png"
        title="Repeat"
        text="set a cycle for your plan"
        name="repeat"
        values={values.repeat}
        defaultValue={{
          type: "Week",
          every: "01",
          value: null,
        }}
      >
        <HubRepeat values={values.repeat} setValues={(value) => setValue("repeat", value)} />
      </FormToggleDropdown>
      <FormToggleDropdown
        defaultValue={{ type: "mins", number: 0 }}
        setValue={setValue}
        icon="/images/hub/form/goal.png"
        title="Set a goal"
        name="goal"
      >
        <SetGoal values={values.goal} setValues={(value) => setValue("goal", value)} />
      </FormToggleDropdown>
      <FormToggleDropdown
        setValue={setValue}
        icon="/images/hub/form/clock.png"
        title="Reminder"
        name="reminder"
        defaultValue={{ hours: 12, minutes: "00", ampm: "AM" }}
      >
        <HubReminder values={values.reminder} setValues={(value) => setValue("reminder", value)} />
      </FormToggleDropdown>
      <FormToggleDropdown setValue={setValue} icon="/images/hub/form/check-list.png" title="Checklist" name="tasks">
        <HubTaskList value={values.tasks} setValues={(value) => setValue("tasks", value)} />
      </FormToggleDropdown>
      <FormToggleDropdown
        defaultValue={" "}
        setValue={setValue}
        icon="/images/hub/form/notes.png"
        title="Note"
        name="note"
      >
        <input
          type="text"
          className="input input_simple-text"
          placeholder="Add your note here"
          onChange={(e) => setValue("note", e.target.value)}
        />
      </FormToggleDropdown>
      <FormToggleDropdown
        setValue={setValue}
        icon="/images/hub/form/photo.png"
        title="Add photos of your progress"
        name="photos"
        defaultValue={[]}
      >
        <PictureUploaderList
          classNames="picture-uploader__wrapper_mod"
          setValue={setValue}
          defaultValues={values.images}
        />
      </FormToggleDropdown>
      <MultiBox defaultValue={[]} setValue={setValue} icon="/images/hub/form/hash.png" title="Tags" name="tags">
        <CheckTags tags={data.tags} value={values.tags} setValue={setValue} valueName="tags" />
      </MultiBox>
      <div className="mb-10 mb-lg-0 "></div>
      <div className="d-flex justify-content-center align-items-center flex-column mt-12 bottom-mobile-button">
        <CustomLink className="_fw button_s mb-4 alt-btn" to="/hub/add-activity">
          Preview task
        </CustomLink>
        <SubmitButton form="task-form" isValid title="Add task" />
      </div>
    </Form>
  )
}

export default HubEditHabitForm
