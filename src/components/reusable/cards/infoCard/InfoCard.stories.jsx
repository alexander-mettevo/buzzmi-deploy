import InfoCard from "./InfoCard.jsx"
import { withRouter } from "storybook-addon-react-router-v6"
import { linkTo } from "@storybook/addon-links"

/**
 *Information card. Which is mainly used to display information about presets and tasks. It takes an object with data as an argument.  Which can have the following properties:

  ```js
  {
    id: string (id of the item),
    type: string (type of the item),
    href: string (if the item has a different reference than the standard reference for that type.),
    image: {
      src: string (path to the image),
      alt: string (image description)
    },
    badges: [
      {
        type: string (type of the badge)
      },
    ],
    info: {
      title: string (title of the item),
      text: string (text of the item)
    }
  }
  ```
 */

export default {
  title: "Reusable/Cards/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
  argTypes: {
    item: {
      control: {
        type: "object",
      },
      description: "Object with image, badges and info properties",
    },
  },
  decorators: [withRouter],
}

const Template = (args) => <InfoCard {...args} />
export const Default = Template.bind({})
Default.args = {
  item: {
    id: "1",
    type: "task",
    image: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "workouts",
      },
      {
        type: "completed",
      },
    ],
    info: {
      title: "Strength Traning",
      text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
    },
  },
}

export const PresetType = Template.bind({})
PresetType.args = {
  item: {
    id: "1",
    type: "preset",
    image: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "workouts",
      },
      {
        type: "completed",
      },
    ],
    info: {
      title: "Strength Traning",
      text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
    },
  },
}

export const WithHref = Template.bind({})
WithHref.args = {
  item: {
    id: "1",
    type: "task",
    href: "/hub/add-activity",
    image: {
      src: "/images/hub/main/gym.png",
      alt: "Placeholder",
    },
    badges: [
      {
        type: "workouts",
      },
      {
        type: "completed",
      },
    ],
    info: {
      title: "Strength Traning",
      text: "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the",
    },
  },
}

export const BadgeComponent = () => <button onClick={linkTo("Reusable/Badge")}>Go to Badge Component story</button>
