import SelectDay from "./SelectDay.jsx"

export default {
  title: "Pages/Hub/Items/Form/SelectDay",
  component: SelectDay,
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

const Template = (args) => <SelectDay {...args} />
export const Default = Template.bind({})
Default.args = {
  values: {},
  setValues: () => {},
}
