import MobileAddActivity from "./MobileAddActivity.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Components/Pages/Hub/Items/FilterList/Items/MobileAddActivity',
  component: MobileAddActivity,
  tags: ['autodocs'],
  decorators: [withRouter],
}

const Template = (args) => <MobileAddActivity {...args} />;
export const Default = Template.bind({});
Default.args = {}