import RadioMode from "./RadioMode.jsx"

export default {
  title: "Pages/Hub/HubCreateTask/Items/RadioMode",
  component: RadioMode,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      description: "Variants",
      table: {
        type: {
          summary: "array",
        },
      },
    },
    name: {
      description: "Name",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}

const Template = (args) => <RadioMode {...args} />
export const Default = Template.bind({})
Default.args = {
  variants: [
    {
      title: "Variant 1",
      value: "variant_1",
    },
    {
      title: "Variant 2",
      value: "variant_2",
    },
    {
      title: "Variant 3",
      value: "variant_3",
    },
  ],
  name: "radio_mode",
}
