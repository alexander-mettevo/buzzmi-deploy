import AssetsCard from "./AssetsCard.jsx"
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Reusable/Cards/AssetsCards/AssetsCard",
  component: AssetsCard,
  tags: ["autodocs"],
  decorators: [withRouter],
  argTypes: {
    link: {
      description: "The link of the assets card",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      description: "The title of the assets card",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    img: {
      description: "The image of the assets card",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}

const Template = (args) => <AssetsCard {...args} />
export const Default = Template.bind({})
Default.args = {
  link: "/",
  title: "Assets Card",
  img: "https://picsum.photos/200/300",
}
