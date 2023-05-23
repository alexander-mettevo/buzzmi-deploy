import Avatar from "./Avatar.jsx";

/**
 * The component is responsible for displaying the user's avatar.
 */
export default {
  title: "Components/Reusable/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      description: "The path to the image that will be displayed in the avatar",
      table: {
        type: {
          summary: "string",
        }
      }
    },
    mode: {
      description: "The size mode of the avatar",
      table: {
        type: {
          summary: "string",
        }
      },
      options: ['small', 'medium', 'border', ""],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});
Default.args = {
  src: "/images/moc/avatar-big.png",
}

export const Small = Template.bind({});
Small.args = {
  src: "/images/moc/avatar-big.png",
  mode: "small"
}

export const Medium = Template.bind({});
Medium.args = {
  src: "/images/moc/avatar-big.png",
  mode: "medium"
}

export const Border = Template.bind({});
Border.args = {
  src: "/images/moc/avatar-big.png",
  mode: "border"
}