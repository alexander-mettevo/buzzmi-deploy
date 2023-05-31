import SmallCardList from "./SmallCardList.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Components/Reusable/Cards/SmallCard/SmallCardList',
  component: SmallCardList,
  tags: ['autodocs'],
  decorators: [withRouter],
  argTypes: {
    list: {
      description: 'List of cards',
      table: {
        type: {
          summary: 'array',
        }
      }
    }
  }
}

const Template = (args) => <SmallCardList {...args} />;
export const Default = Template.bind({});
Default.args = {
  list: [
    {
      id: 'vsdvad',
      link: '/hub/add-activity',
      title: 'Profile picture upload',
      img: {
        src: '/images/moc/hub/1.png',
        alt: 'Add an activity'
      }
    },
    {
      id: 'hgfdhrthrt',
      link: '/hub/add-activity',
      title: 'Profile picture upload',
      img: {
        src: '/images/moc/hub/1.png',
        alt: 'Add an activity'
      }
    },
    {
      id: 'fefwev',
      link: '/hub/add-activity',
      title: 'Profile picture upload',
      img: {
        src: '/images/moc/hub/1.png',
        alt: 'Add an activity'
      }
    }
  ]
}