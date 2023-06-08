import Textarea from "./Textarea.jsx";

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

const Template = (args) => <Textarea {...args} />;
export const Default = Template.bind({});