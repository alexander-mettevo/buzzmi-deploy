import HubWallet from "./HubWallet.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    title: 'Components/Pages/Hub/HubMain/Items/HubWallet',
    component: HubWallet,
    tags: ['autodocs'],
    decorators: [withRouter],
}

const Template = (args) => <HubWallet {...args} />;
export const Default = Template.bind({});
Default.args = {

}