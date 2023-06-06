import LinkTabs from "./LinkTabs.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * This component outputs links as tabs. By displaying the active current
 */
export default {
  title: 'Reusable/Assets/LinkTabs',
  component: LinkTabs,
  tags: ['autodocs'],
  argTypes: {
    list: {
      control: {
        type: 'object'
      },
      description: 'List of objects with href, title'
    }
  },
  decorators: [withRouter]
}

const Template = (args) => <LinkTabs {...args} />;
export const Default = Template.bind({});
Default.args = {
  list: [{
    href: '/hub',
    title: 'Hub'
  },{
    href: '/calendar',
    title: 'Calendar'
  }]
}