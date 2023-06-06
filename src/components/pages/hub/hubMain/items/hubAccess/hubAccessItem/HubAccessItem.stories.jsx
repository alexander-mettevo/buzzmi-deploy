import HubAccessItem from "./HubAccessItem.jsx";

export default {
  title: 'Pages/Hub/HubMain/Items/HubAccess/HubAccessItem',
  component: HubAccessItem,
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Image for the card',
      control: {
        type: 'object'
      }
    },
    title: {
      description: 'Title for the card',
      control: {
        type: 'string'
      }
    },
    handler: {
      description: 'Handler for the card',
      control: {
        type: 'function'
      }
    }
  }
}

const Template = (args) => <HubAccessItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  image: {
    src: '/images/hub/main/access/challenges.png',
    alt: 'placeholder'
  },
  title: 'Title',
  handler: () => {}
}