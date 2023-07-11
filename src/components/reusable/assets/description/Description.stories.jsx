import Description from "./Description"
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Reusable/Assets/Description",
  component: Description,
  tags: ["autodocs"],
  decorators: [withRouter],
  argTypes: {
    info: {
      description: "Info card data",
      table: {
        type: {
          summary: "InfoCardData",
          detail: `{
                    image: {
                        src: string,
                        alt: string,
                    },
                    info: {
                        description: string,
                    },
                }`,
        },
      },
    },
  },
}

const Template = (args) => <Description {...args} />
export const Default = Template.bind({})
Default.args = {
  item: {
    image: {
      src: "/images/hub/main/drink.png",
      alt: "Placeholder",
    },
    info: {
      text: "Drink up! Increasing your daily water intake is vital as you to stay healthy. Dehydration can cause fatigue, indigestion, and memory lapse.",
    },
    type: null,
  },
}
