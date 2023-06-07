import FilterItems from "./FilterItems.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Pages/Hub/Items/FilterList/Items/FilterItems',
  component: FilterItems,
  tags: ['autodocs'],
  decorators: [withRouter],
  argTypes: {
    items: {
      description: 'Data for filter items',
      table: {
        type: {
          summary: 'object',
        }
      }
    },
    isFirst: {
      description: 'Is first',
      table: {
        type: {
          summary: 'boolean',
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template = (args) => <FilterItems {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: {
    title: 'Any time of the day',
    list: [
      {
        "href": "/hub/add-activity",
        "image": {
          "src": "/images/hub/main/gym.png",
          "alt": "Placeholder"
        },
        "badges": [
          {
            "type": "workouts"
          },
          {
            "type": "completed"
          }
        ],
        "info": {
          "title": "Strength Traning",
          "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
        }
      },
      {
        "href": "/hub/add-activity",
        "image": {
          "src": "/images/hub/main/gym.png",
          "alt": "Placeholder"
        },
        "badges": [
          {
            "type": "workouts"
          },
          {
            "type": "completed"
          }
        ],
        "info": {
          "title": "Strength Traning",
          "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
        }
      },
      {
        "href": "/hub/add-activity",
        "image": {
          "src": "/images/hub/main/gym.png",
          "alt": "Placeholder"
        },
        "badges": [
          {
            "type": "workouts"
          },
          {
            "type": "completed"
          }
        ],
        "info": {
          "title": "Strength Traning",
          "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
        }
      }
    ]
  }
}