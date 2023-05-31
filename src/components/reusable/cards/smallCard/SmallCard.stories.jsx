import SmallCard from "./SmallCard.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Components/Reusable/Cards/SmallCard',
  component: SmallCard,
  tags: ['autodocs'],
  argTypes: {
    link: {
      description: 'Link to the page',
      table: {
        type: {
          summary: 'string',
        }
      }
    },
    title: {
      description: 'Title of the card',
      table: {
        type: {
          summary: 'string',
        }
      }
    },
    img: {
      description: 'Image of the card',
      table: {
        type: {
          summary: 'object',
        }
      }
    }
  },
  decorators: [withRouter],
}

const Template = (args) => <SmallCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  link: '/hub/add-activity',
  title: 'Profile picture upload',
  img: {
    src: '/images/moc/hub/1.png',
    alt: 'Add an activity'
  }
}