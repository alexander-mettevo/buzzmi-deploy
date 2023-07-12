import SmallCard from "./SmallCard.jsx"
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Reusable/Cards/SmallCard",
  component: SmallCard,
  tags: ["autodocs"],
  argTypes: {
    link: {
      description: "Link to the page",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      description: "Title of the card",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    image: {
      description: "Image of the card",
      table: {
        type: {
          summary: "object",
        },
      },
    },
  },
  decorators: [withRouter],
}

const Template = (args) => <SmallCard {...args} />
export const Default = Template.bind({})
Default.args = {
  link: "/hub/add-activity",
  info: {
    title: "Profile picture upload",
  },
  image: {
    src: "/images/moc/hub/1.png",
    alt: "Add an activity",
  },
}
