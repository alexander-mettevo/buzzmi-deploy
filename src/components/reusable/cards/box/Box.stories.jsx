import Box from "./Box.jsx";

export default {
  title: "Reusable/Cards/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    paddingMode: {
      description: "The padding mode of the box",
      table: {
        type: {
          summary: "string",
        }
      },
      options: ['rank', 'big', ""],
      control: { type: 'radio' }
    },
    topComponent: {
      description: "The component that will be displayed at the top of the box",
      table: {
        type: {
          summary: "ReactNode",
        }
      }
    },
    bottomComponent: {
      description: "The component that will be displayed at the bottom of the box",
      table: {
        type: {
          summary: "ReactNode",
        }
      }
    },
    children: {
      description: "The content of the box",
      table: {
        type: {
          summary: "ReactNode",
        }
      },
    }
  }
}

const Template = (args) => <Box {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: <div>Content</div>
}

export const Rank = Template.bind({});
Rank.args = {
  paddingMode: "rank"
}

export const Big = Template.bind({});
Big.args = {
  paddingMode: "big"
}

export const WithTopComponent = Template.bind({});
WithTopComponent.args = {
  topComponent: <div>Top component</div>,
  children: <div>Content</div>
}

export const WithBottomComponent = Template.bind({});
WithBottomComponent.args = {
  bottomComponent: <div>Bottom component</div>,
  children: <div>Content</div>
}

export const WithTopAndBottomComponent = Template.bind({});
WithTopAndBottomComponent.args = {
  topComponent: <div>Top component</div>,
  bottomComponent: <div>Bottom component</div>,
  children: <div>Content</div>
}