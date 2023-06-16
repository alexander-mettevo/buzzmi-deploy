import MobileSelect from "./MobileSelect.jsx"

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
  title: "Reusable/MultiSelect/items/MobileSelect/MobileSelect",
  component: MobileSelect,
  tags: ["autodocs"],
  argTypes: {
    optionGroups: {
      name: "optionGroups",
      type: { name: "object", required: true },
      defaultValue: null,
    },
    valueGroups: {
      name: "valueGroups",
      type: { name: "object", required: true },
      defaultValue: null,
    },
    onChange: {
      name: "onChange",
      type: { name: "func", required: true },
      defaultValue: null,
    },
  },
}

const Template = (args) => <MobileSelect {...args} />
export const Default = Template.bind({})
Default.args = {
  optionGroups: options,
  valueGroups: valueGroups,
  onChange: onChange,
}
