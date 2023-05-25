import Badge from "./Badge.jsx";

export default {
  title: 'Components/Reusable/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['all', 'presets', 'workouts', 'habits', 'program', 'challenges', 'buzzmiTasks', 'completed'],
      control: {type: 'select'},
      defaultValue: 'all'
    }
  }
}

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: 'all'
}