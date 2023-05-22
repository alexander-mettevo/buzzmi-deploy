import MainLayout from "./MainLayout.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * The Main Layout is needed to display a significant number of pages. You can read more about each of its components in the documentation in this directory.
 Its capabilities:
 1. Outputs menu items.
 2. Shaping the appearance of the main and additional content (which is displayed in the column on the right).
 3. Changing the language on large screen sizes (this functionality is located in the footer)
 */
export default {
  title: 'Components/Layouts/MainLayout',
  tags: ['autodocs'],
  decorators: [withRouter],
}

const Template = (args) => <MainLayout {...args} />;
export const Default = Template.bind({});
