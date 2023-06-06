import CircleChart from "./CircleChart.jsx";

export default {
  title: 'Reusable/Charts/CircleChart',
  component: CircleChart,
  tags: ["autodocs"],
  argTypes: {
    progress: {
      description: "The progress of the chart",
      table: {
        type: {
          summary: "number",
        }
      }
    },
    withAvatar: {
      description: "The flag that determines whether the avatar will be displayed",
      table: {
        type: {
          summary: "boolean",
        }
      },
      options: [true, false],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <CircleChart {...args} />;
export const Default = Template.bind({});
Default.args = {
  progress: 36,
  withAvatar: false
}

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  progress: 36,
  withAvatar: true
}