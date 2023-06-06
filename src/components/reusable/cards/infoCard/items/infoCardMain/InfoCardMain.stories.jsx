import InfoCardMain from "./InfoCardMain.jsx";


export default {
  title: 'Reusable/Cards/InfoCard/Items/InfoCardMain',
  component: InfoCardMain,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: {
        type: 'object'
      },
      description: 'Image object with src and alt properties'
    },
    badges: {
      control: {
        type: 'array'
      },
      description: 'Array of badge types and their order'
    },
    info: {
      control: {
        type: 'object'
      },
      description: 'Object with title and text properties'
    },
    type: {
      options: ['menu', 'link', ''],
      control: {
        type: 'radio'
      },
      description: 'Type of the card'
    },
    id: {
      control: {
        type: 'string'
      },
      description: 'Id of the card'
    }
  },

}

const Template = (args) => <InfoCardMain {...args} />;
export const Default = Template.bind({});
Default.args = {
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
  },
  type: 'menu',
  id: '1'
}