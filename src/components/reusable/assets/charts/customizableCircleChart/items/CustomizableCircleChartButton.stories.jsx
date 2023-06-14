import CustomizableCircleChartButton from "./CustomizableCircleChartButton.jsx"

export default {
  title: "Reusable/Charts/CustomizableCircleChart/Items/CustomizableCircleChartButton",
  component: CustomizableCircleChartButton,
  tags: ["autodocs"],
  argTypes: {
    symbol: {
      description: "Symbol",
      table: {
        type: {
          summary: "JSX",
        },
      },
    },
  },
}

const Template = (args) => <CustomizableCircleChartButton {...args} />
export const Default = Template.bind({})
Default.args = {}

export const WithPlus = Template.bind({})
WithPlus.args = {
  symbol: <i className="fa-solid fa-plus" />,
}

export const WithMinus = Template.bind({})
WithMinus.args = {
  symbol: <i className="fa-solid fa-minus" />,
}
