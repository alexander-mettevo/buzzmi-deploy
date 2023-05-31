import InfoCard from "./InfoCard.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Components/Reusable/Cards/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: {
        type: 'object'
      },
      description: 'Object with image, badges and info properties'
    }
  },
  decorators: [withRouter]
}

const Template = (args) => <InfoCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  item:{
    href: '/hub/add-activity',
    image: {
      src: '/images/hub/main/gym.png',
      alt: 'Placeholder'
    },
    badges: [{
      type: 'workouts'
    }, {
      type: 'completed'
    }],
    info: {
      title: 'Strength Traning',
      text: 'Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the'
    }
  }
}