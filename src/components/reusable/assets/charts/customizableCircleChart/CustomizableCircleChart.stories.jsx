import CustomizableCircleChart from "./CustomizableCircleChart.jsx"

export default {
  title: "Reusable/Charts/CustomizableCircleChart",
  component: CustomizableCircleChart,
  tags: ["autodocs"],
  argTypes: {
    initValue: {
      description: "The initial value of the chart",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    currentValue: {
      description: "The current value of the chart",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    showTypeValue: {
      description: "The flag that determines whether the type of value will be displayed",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    type: {
      description: "The type of the chart",
      options: ["time", "distanceMetric", "distanceImperial"],
      control: {
        type: "radio",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}

const Template = (args) => <CustomizableCircleChart {...args} />
export const Default = Template.bind({})
Default.args = {
  currentValue: 31.1,
  type: "distanceMetric",
  initValue: 111,
}

export const Time = Template.bind({})
Time.args = {
  currentValue: 1000,
  type: "time",
  showTypeValue: false,
  initValue: 2000,
}
