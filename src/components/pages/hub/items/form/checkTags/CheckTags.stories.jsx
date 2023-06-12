import CheckTags from "./CheckTags.jsx"

const state = {
  tags: [],
}

const setState = (name, value) => {
  state[name] = value
}

export default {
  title: "Pages/Hub/HubCreateTask/Items/CheckTags",
  component: CheckTags,
  tags: ["autodocs"],
  argTypes: {
    tags: {
      description: "Tags",
      table: {
        type: {
          summary: "array",
        },
      },
    },
    value: {
      description: "Value",
      table: {
        type: {
          summary: "array",
        },
      },
    },
    setValue: {
      description: "Set Value",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    valueName: {
      description: "Value Name",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}

const Template = (args) => <CheckTags {...args} />
export const Default = Template.bind({})
Default.args = {
  tags: [
    {
      title: "Tag 1",
      value: "tag_1",
    },
    {
      title: "Tag 2",
      value: "tag_2",
    },
    {
      title: "Tag 3",
      value: "tag_3",
    },
    {
      title: "Tag 4",
      value: "tag_4",
    },
    {
      title: "Tag 5",
      value: "tag_5",
    },
  ],
  value: state.tags,
  setValue: setState,
  valueName: "tags",
}
