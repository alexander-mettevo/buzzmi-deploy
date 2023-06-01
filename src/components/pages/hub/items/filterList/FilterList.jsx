import React from 'react';
import FilterTags from "./items/filterTags/FilterTags.jsx";
import FilterItems from "./items/filterItems/FilterItems.jsx";

//todo mockData
const mockTags = ['all', 'presets', 'workouts', 'habits', 'program', 'challenges']
const mockItems = [{
  title: 'Any time of the day',
  list: [
    {
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
      "type": "link",
      "to": "/hub/add-activity",
      "image": {
        "src": "/images/hub/main/list.png",
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
      "image": {
        "src": "/images/hub/main/drink.png",
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
},
  {
    title: 'Any time of the day',
    list: [
      {
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
        "image": {
          "src": "/images/hub/main/list.png",
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
        "image": {
          "src": "/images/hub/main/drink.png",
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
  },
  {
    title: 'Any time of the day',
    list: [
      {
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
        "image": {
          "src": "/images/hub/main/list.png",
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
        "image": {
          "src": "/images/hub/main/drink.png",
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
  }]

const FilterList = ({data}) => {
  return (
    <div>
      <FilterTags tags={mockTags}/>
      {mockItems.length > 0 && mockItems.map((item, index) => (
        <FilterItems items={item} isFirst={index === 0} key={index + 'FilterList'}/>
      ))}
    </div>
  );
};

export default FilterList;