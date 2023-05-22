import MainLayoutMenuItemProfile from "./MainLayoutMenuItemProfile.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * Application menu item in the main layout. Which is responsible for displaying the link to the user's profile. The only argument it takes is the path to the user's avatar.
 */
export default {
  title: "Components/Layouts/MainLayout/MainLayoutSidebar/MainLayoutMenuItem/MainLayoutMenuItemProfile",
  component: MainLayoutMenuItemProfile,
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'The path to the client\'s avatar',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

const Template = (args) => <MainLayoutMenuItemProfile {...args} />;
export const Default = Template.bind({});
Default.args = {
  src: '/images/moc/avatar.png'
}