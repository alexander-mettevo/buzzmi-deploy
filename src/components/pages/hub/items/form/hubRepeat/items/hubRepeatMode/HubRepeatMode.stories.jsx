import HubRepeatMode from "./HubRepeatMode.jsx"

const values = {
  type: null,
  every: null,
  value: null,
}

const setValues = () => {}

export default {
  title: "Pages/Hub/Items/Form/HubRepeat/Items/HubRepeatMode",
  component: HubRepeatMode,
  tags: ["autodocs"],
  argTypes: {
    values: {
      description: "values",
      table: {
        type: {
          summary: "values",
        },
      },
    },
    setValues: {
      description: "setValues",
      table: {
        type: {
          summary: "setValues",
        },
      },
    },
  },
}

const Template = (args) => <HubRepeatMode {...args} />
export const Default = Template.bind({})
Default.args = {
  values,
  setValues,
}
