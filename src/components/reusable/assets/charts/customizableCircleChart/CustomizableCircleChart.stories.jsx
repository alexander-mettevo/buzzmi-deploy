import CustomizableCircleChart from "./CustomizableCircleChart.jsx"

export default {
  title: "Reusable/Charts/CustomizableCircleChart",
  component: CustomizableCircleChart,
  tags: ["autodocs"],
  argTypes: {
    progress: {
      description: "Progress",
      table: {
        type: {
          summary: "Number",
        },
      },
    },
    parsedCurrentValue: {
      description: "Parsed current value",
      table: {
        type: {
          summary: "Number",
        },
      },
    },
    parsedInitValue: {
      description: "Parsed init value",
      table: {
        type: {
          summary: "Number",
        },
      },
    },
  },
}

const Template = (args) => <CustomizableCircleChart {...args} />
export const Default = Template.bind({})
Default.args = {
  progress: 50,
  parsedCurrentValue: 50,
  parsedInitValue: 100,
}
