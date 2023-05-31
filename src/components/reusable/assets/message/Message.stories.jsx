import Message from "./Message.jsx";

export default {
  title: "Components/Reusable/Assets/Message",
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    message: {
      table: {
        type: {
          summary: "string",
        }
      },
      description: "The message to display",
    }
  }
}

const Template = (args) => <Message {...args} />;
export const Default = Template.bind({});
Default.args = {
  message: "Your trial will end in 2 days and your membership will automatically upgraded to\n" +
    "<a href='/'>Premium Member</a>"
}