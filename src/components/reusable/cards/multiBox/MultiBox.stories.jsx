import MultiBox from "./MultiBox.jsx"

export default {
  title: "Reusable/Cards/MultiBox",
  component: MultiBox,
  tags: ["autodocs"],
  argTypes: {},
}

const Template = (args) => <MultiBox {...args} />
export const Default = Template.bind({})
Default.args = {}
