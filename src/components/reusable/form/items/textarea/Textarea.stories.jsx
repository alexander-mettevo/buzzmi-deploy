import Textarea from "./Textarea.jsx";

export default {
  title: 'Reusable/Form/Items/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

const Template = (args) => <Textarea {...args} />;
export const Default = Template.bind({});