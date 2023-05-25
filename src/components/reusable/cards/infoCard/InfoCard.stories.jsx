import InfoCard from "./InfoCard.jsx";

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
  }
}

const Template = (args) => <InfoCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  item:{
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