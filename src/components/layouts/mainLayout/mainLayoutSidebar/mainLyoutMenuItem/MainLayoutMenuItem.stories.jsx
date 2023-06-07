import MainLayoutMenuItem from "./MainLayoutMenuItem.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * The application menu item in the Main Layout.
 */

export default {
  title: 'Layouts/MainLayout/MainLayoutSidebar/MainLayoutMenuItem',
  component: MainLayoutMenuItem,
  tags: ['autodocs'],
  decorators: [withRouter],
  argTypes: {
    iconSrc: {
      description: 'The path to the icon that will be displayed in the menu item',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    activeIconSrc: {
      description: 'The path to the icon that will be displayed in the menu item when it is active',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    name: {
      description: 'The name of the menu item',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    to: {
      description: 'The path to which the menu item will lead',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    showOnMobile: {
      description: 'Whether the menu item should be displayed on mobile devices',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
}

const Template = (args) => <MainLayoutMenuItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  iconSrc: '/images/layout/main-layout/subscription.svg',
  activeIconSrc: '/images/layout/main-layout/active-link/subscription.svg',
  name: 'Subscription',
  to: '/subscription',
  showOnMobile: true
}