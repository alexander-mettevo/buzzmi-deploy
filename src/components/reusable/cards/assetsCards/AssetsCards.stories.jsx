import AssetsCards from "./AssetsCards.jsx"
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Reusable/Cards/AssetsCards",
  component: AssetsCards,
  tags: ["autodocs"],
  decorators: [withRouter],
  argTypes: {
    list: {
      description: "The list of assets cards",
      table: {
        type: {
          summary: "array",
        },
      },
    },
  },
}

const Template = (args) => <AssetsCards {...args} />
export const Default = Template.bind({})
Default.args = {
  list: [
    {
      id: 1,
      link: "/",
      title: "Assets Card",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      link: "/",
      title: "Assets Card",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      link: "/",
      title: "Assets Card",
      img: "https://picsum.photos/200/300",
    },
  ],
}
