import DaySelectDate from "./DaySelectDate.jsx"

export default {
  title: "Assets/date/selectFormats/DaySelectDate",
  component: DaySelectDate,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(story) => <div style={{ height: "500px" }}>{story()}</div>],
}

const Template = (args) => <DaySelectDate {...args} />
export const Default = Template.bind({})
Default.args = {}
