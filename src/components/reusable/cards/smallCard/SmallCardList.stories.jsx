import SmallCardList from "./SmallCardList.jsx"
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Reusable/Cards/SmallCard/SmallCardList",
  component: SmallCardList,
  tags: ["autodocs"],
  decorators: [withRouter],
  argTypes: {
    list: {
      description: "List of cards",
      table: {
        type: {
          summary: "array",
        },
      },
    },
  },
}

const Template = (args) => <SmallCardList {...args} />
export const Default = Template.bind({})
Default.args = {
  list: [
    {
      id: "vsdvad",
      info: {
        title: "Profile picture upload",
      },
      link: "/hub/add-activity",
      image: {
        src: "/images/moc/hub/1.png",
        alt: "Add an activity",
      },
    },
    {
      id: "hgfdhrthrt",
      info: {
        title: "Profile picture upload",
      },
      link: "/hub/add-activity",
      image: {
        src: "/images/moc/hub/1.png",
        alt: "Add an activity",
      },
    },
    {
      id: "fefwev",
      info: {
        title: "Profile picture upload",
      },
      link: "/hub/add-activity",
      image: {
        src: "/images/moc/hub/1.png",
        alt: "Add an activity",
      },
    },
  ],
}
