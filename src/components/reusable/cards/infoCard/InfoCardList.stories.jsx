import InfoCardList from "./InfoCardList.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Reusable/Cards/InfoCard/InfoCardList',
  component: InfoCardList,
  tags: ['autodocs'],
  argTypes: {
    infoList: {
      control: {
        type: 'array'
      },
      description: 'Array of objects with image, badges and info properties'
    }
  },
  decorators: [withRouter]
}

const Template = (args) => <InfoCardList {...args} />;
export const Default = Template.bind({});
Default.args = {
  infoList: [{
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
  },
    {
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
    },
    {
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
    }]
}