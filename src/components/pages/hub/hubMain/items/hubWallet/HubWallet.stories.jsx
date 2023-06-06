import HubWallet from "./HubWallet.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * The block is responsible for outputting the amount of currency of the service. Data retrieval is performed in the function within the component:
 *
 * ``` js
 *   const getData = async () => {
 *     try {
 *       //TODO get data from api
 *       setWallet(walletItems)
 *     } catch (e) {
 *       console.log(e)
 *     }
 *   }
 * ```
 */
export default {
    title: 'Pages/Hub/HubMain/Items/HubWallet',
    component: HubWallet,
    tags: ['autodocs'],
    decorators: [withRouter],
}

const Template = (args) => <HubWallet {...args} />;
export const Default = Template.bind({});
Default.args = {

}