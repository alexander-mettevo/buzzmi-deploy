import Colors from "./Colors.jsx";
export default {
  title: 'Configuration/Colors',
  component: Colors,
  tags: ['autodocs']
};


const Template = (args) => <Colors {...args} />;
export const Default = Template.bind({});
Default.args = {}