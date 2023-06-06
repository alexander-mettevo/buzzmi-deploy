import Checkbox from "./Checkbox.jsx";

export default {
  title: 'Reusable/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

const Template = (args) => <Checkbox {...args} />;
export const Default = Template.bind({});
Default.args = {}