import DropdownToggle from "./DropdownToggle.jsx";

export default {
  title: 'Reusable/Assets/Dropdown/DropdownToggle',
  component: DropdownToggle,
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
    info: {
      description: 'Text to display in the tooltip',
      table: {
        type: {
          summary: 'string',
        }
      }
    },
    children: {
      description: 'Dropdown content',
      table: {
        type: {
          summary: 'element',
        }
      }
    },
    icon: {
      description: 'Dropdown icon',
      table: {
        type: {
          summary: 'string',
        }
      }
    }
  }
}

const Template = (args) => <DropdownToggle {...args} />;
export const Base = Template.bind({});
Base.args = {
  title: 'Dropdown title',
  info: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam euismod, tincidunt diam vitae, aliquam nisl. Nulla facilisi.',
  children:  <div>Dropdown content</div>,
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Dropdown title',
  info: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam euismod, tincidunt diam vitae, aliquam nisl. Nulla facilisi.',
  children:  <div>Dropdown content</div>,
  icon: '/images/hub/form/hash.png'
}