import Info from "./Info.jsx";

export default {
  title: 'Reusable/Assets/Info',
  component: Info,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Text to display in the tooltip',
      table: {
        type: {
          summary: 'string',
        }
      }
    },
    info: {
      description: 'Text to display in the tooltip',
      table: {
        type: {
          summary: 'string',
        }
      }
    }
  }
}

const Template = (args) => <Info {...args} />;
export const Base = Template.bind({});
Base.args = {
  text: 'Tooltip Text',
  info: 'Tooltip Text',
}