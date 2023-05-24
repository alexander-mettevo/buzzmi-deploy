import Dropdown from "./Dropdown.jsx";

export default {
  title: 'Components/Reusable/Assets/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Dropdown title',
      table: {
        type: {
          summary: 'string',
        }
      }
    },
    icon: {
      description: 'Dropdown icon',
      table: {
        type: {
          summary: 'element',
        }
      }
    },
    Content: {
      description: 'Dropdown content',
      table: {
        type: {
          summary: 'element',
        }
      }
    }
  },
}

const Template = (args) => <Dropdown {...args} />;
export const Base = Template.bind({});
Base.args = {
  title: 'Dropdown title',
  Content: () => <div>Dropdown content</div>,
};