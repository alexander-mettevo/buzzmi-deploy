import HubCheckList from "./HubCheckList.jsx";

export default {
  title: 'Pages/Hub/HubCreateTask/Items/HubCheckList',
  component: HubCheckList,
  tags: ['autodocs'],
}

const Template = (args) => <HubCheckList {...args} />;
export const Default = Template.bind({});
Default.args = {}