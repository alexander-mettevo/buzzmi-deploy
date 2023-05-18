import Typography from "./Typography.jsx";

export default {
  title: 'Design Tokens/Typography',
  tags: ['autodocs'],
  component: Typography,
  argTypes: {
    textClassName: {
      description: 'The class name of the text style to be applied.',
      control: {
        type: 'string',
      }
    }
  }
}

const Template = (args) => <Typography {...args} />;
export const HeadingStyles = Template.bind({});
HeadingStyles.args = {
  textClassName: 'h1',
}

