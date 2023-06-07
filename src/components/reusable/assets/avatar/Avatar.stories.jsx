import Avatar from "./Avatar.jsx";

/**
 * The component is responsible for displaying the user's avatar.
 * The data is retrieved inside the component thanks to this function:
 *
 * ```js
 *   const getData = async () => {
 *     try {
 *       const data = "/images/moc/avatar-big.png"
 *         setAvatar(data)
 *     } catch (e) {
 *       console.error(e)
 *     }
 *   }
 * ```
 */
export default {
  title: "Reusable/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
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
Default.args = {}

export const Small = Template.bind({});
Small.args = {
  mode: "small"
}

export const Medium = Template.bind({});
Medium.args = {
  mode: "medium"
}

export const Border = Template.bind({});
Border.args = {
  mode: "border"
}