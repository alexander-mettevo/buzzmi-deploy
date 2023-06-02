import Badge from "./Badge.jsx";

export default {
  title: 'Components/Reusable/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['all', 'presets', 'workouts', 'habits', 'program', 'challenges', 'buzzmiTasks', 'completed', 'secondary'],
      control: {type: 'select'},
      defaultValue: 'all'
    },
    count: {
      description: 'The count of the badge',
      table: {
        type: {summary: 'number'},
      }
    },
    active: {
      description: 'The active of the badge',
      table: {
        type: {summary: 'boolean'},
      }
    },
    title: {
      description: 'The title of the badge',
      table: {
        type: {summary: 'string'},
      }
    }
  }
}

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: 'all'
}

export const WithCount = Template.bind({});
WithCount.args = {
  type: 'workouts',
  count: 5
}

export const WithActive = Template.bind({});
WithActive.args = {
  type: 'habits',
  active: true
}

export const WithTitle = Template.bind({});
WithTitle.args = {
  type: 'secondary',
  title: 'Title'
}