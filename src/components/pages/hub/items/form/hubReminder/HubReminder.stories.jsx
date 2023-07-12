import HubReminder from "./HubReminder.jsx"

let values = {
  hours: 12,
  minutes: 0,
  ampm: "AM",
}

const setValues = (newValues) => {
  values = {
    ...values,
    ...newValues,
  }
}

export default {
  title: "Pages/Hub/Items/Form/HubReminder",
  component: HubReminder,
  tags: ["autodocs"],
  argTypes: {
    values: {
      description: "Values of the select",
      table: {
        type: {
          summary: "object",
        },
      },
    },
    setValues: {
      description: "Set values of the select",
      table: {
        type: {
          summary: "func",
        },
      },
    },
  },
}

const Template = (args) => <HubReminder {...args} />
export const Default = Template.bind({})
Default.args = {
  values: values,
  setValues: setValues,
}
