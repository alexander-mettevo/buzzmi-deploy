import HubBasicInfo from "./HubBasicInfo.jsx"

export default {
  title: "Pages/Hub/HubTaskInfo/Items/HubBasicInfo",
  component: HubBasicInfo,
  tags: ["autodocs"],
  argTypes: {
    when: {
      description: "When?",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    repeat: {
      description: "Repeat",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    reminder: {
      description: "Reminder",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}

const Template = (args) => <HubBasicInfo {...args} />
export const Default = Template.bind({})
Default.args = {
  when: "Any time of the day",
  repeat: "every 3 days",
  reminder: "at 12:00",
}
