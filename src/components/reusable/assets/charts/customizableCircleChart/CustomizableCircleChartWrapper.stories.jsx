import CustomizableCircleChartWrapper from "./CustomizableCircleChartWrapper.jsx"

export default {
  title: "Reusable/Charts/CustomizableCircleChart/CustomizableCircleChartWrapper",
  component: CustomizableCircleChartWrapper,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Type",
      table: {
        type: {
          summary: "String",
        },
      },
      options: ["time", "distanceMetric", ""],
      control: {
        type: "radio",
      },
    },
    initValue: {
      description: "Init value",
      table: {
        type: {
          summary: "Number",
        },
      },
    },
    currentValue: {
      description: "Current value",
      table: {
        type: {
          summary: "Number",
        },
      },
    },
    showTypeValue: {
      description: "Show type value",
      table: {
        type: {
          summary: "Boolean",
        },
      },
    },
  },
}

const Template = (args) => <CustomizableCircleChartWrapper {...args} />
export const Default = Template.bind({})
Default.args = {
  type: "",
  initValue: 10000,
  currentValue: 5000,
}

export const DistanceMetric = Template.bind({})
DistanceMetric.args = {
  type: "distanceMetric",
  initValue: 10000,
  currentValue: 5000,
}

export const Time = Template.bind({})
Time.args = {
  type: "time",
  initValue: 10000,
  currentValue: 5000,
  showTypeValue: false,
}
