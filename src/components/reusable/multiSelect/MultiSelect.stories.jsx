import MultiSelect from "./MultiSelect.jsx"

const options = {
  title: ["Mr.", "Mrs.", "Ms.", "Dr."],
  firstName: ["John", "Micheal", "Elizabeth"],
  secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
}

const valueGroups = {
  title: "Mr.",
  firstName: "Micheal",
  secondName: "Jordan",
}

const onChange = (name, value) => {
  valueGroups[name] = value
}

export default {
  title: "Reusable/MultiSelect/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {},
}

const Template = (args) => <MultiSelect {...args} />
export const Default = Template.bind({})
Default.args = {}
