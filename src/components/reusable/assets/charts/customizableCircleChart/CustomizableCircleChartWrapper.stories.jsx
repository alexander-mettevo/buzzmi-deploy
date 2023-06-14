import CustomizableCircleChartWrapper from "./CustomizableCircleChartWrapper.jsx"

//create description  for the component
/**
 * This component is designed to display a progress chart, and it also contains a button that allows you to complete the task. Provided that all the requirements are met.
 At the time of writing this documentation, this component can handle time, distance, and normal numeric values. But if you need to add more values please read the documentation of the __parseValue__ function which is located at the following path: /src/assets/parseValue/readme.md

 Also an important role in this component performs a hook __useHandlerChartData__ to it as written documentation, which lies on the following path ./useHandlerChartData/readme.md
 */

const defaultValues = {
  type: "",
  initValue: 10000,
  currentValue: 5000,
}

const setDefaultValues = (value) => {
  return {
    ...defaultValues,
    ...value,
  }
}

const distanceMetricValues = {
  type: "distanceMetric",
  initValue: 10000,
  currentValue: 5000,
}

const distanceValues = (value) => {
  return {
    ...distanceMetricValues,
    ...value,
  }
}

const timeValues = {
  type: "time",
  initValue: 10000,
  currentValue: 5000,
}

const time = (value) => {
  return {
    ...timeValues,
    ...value,
  }
}

export default {
  title: "Reusable/Charts/CustomizableCircleChart/CustomizableCircleChartWrapper",
  component: CustomizableCircleChartWrapper,
  tags: ["autodocs"],
  argTypes: {
    values: {
      description: "Object with values",
      table: {
        type: {
          summary: "Object",
        },
      },
    },
    setValues: {
      description: "Function to set values",
      table: {
        type: {
          summary: "Function",
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
  values: defaultValues,
  setValues: setDefaultValues,
}

export const DistanceMetric = Template.bind({})
DistanceMetric.args = {
  values: distanceMetricValues,
  setValues: distanceValues,
}

export const Time = Template.bind({})
Time.args = {
  values: timeValues,
  setValues: time,
}
