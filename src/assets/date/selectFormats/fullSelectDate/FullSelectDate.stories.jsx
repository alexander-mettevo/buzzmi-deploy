import FullSelectDate from "./FullSelectDate.jsx"

export default {
  title: "Assets/date/selectFormats/fullSelectDate",
  component: FullSelectDate,
  tags: ["autodocs"],
  argTypes: {},
}

const Template = (args) => <FullSelectDate {...args} />
export const Default = Template.bind({})
Default.args = {}
