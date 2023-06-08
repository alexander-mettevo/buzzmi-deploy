import SubmitButton from "./SubmitButton.jsx";

export default {
  title: 'Buttons/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  argTypes: {
    isValid: {
      control: 'boolean',
      description: 'Сan the button be clicked',
    },
    title: {
      control: 'text',
      description: 'Button text',
      defaultValue: 'Continue'
    }
  }
}

const Template = (args) => <SubmitButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  isValid: true,
}