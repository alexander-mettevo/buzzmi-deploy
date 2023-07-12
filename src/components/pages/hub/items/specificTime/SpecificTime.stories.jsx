import SpecificTime from "./SpecificTime"

export default {
  title: "Pages/Hub/Items/SpecificTime",
  component: SpecificTime,
  tags: ["autodocs"],
  argTypes: {
    values: {
      description: "Values for reminder",
      control: {
        type: "object",
      },
    },
    setValues: {
      description: "Set values for reminder",
      control: {
        type: "function",
      },
    },
  },
}

const Template = (args) => <SpecificTime {...args} />
export const Default = Template.bind({})
Default.args = {
  values: { hours: 12, minutes: "00", ampm: "AM" },
  setValues: () => {},
}
