import Rank from "./Rank.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: "Components/Pages/Hub/Items/Rank",
  component: Rank,
  tags: ["autodocs"],
  decorators: [withRouter],
  argTypes: {
    withAvatar: {
      description: "Show avatar in circle chart",
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template = (args) => <Rank {...args} />;
export const Default = Template.bind({});
Default.args = {

}