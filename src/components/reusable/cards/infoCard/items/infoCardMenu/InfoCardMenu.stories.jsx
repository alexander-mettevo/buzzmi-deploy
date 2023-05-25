import InfoCardMenu from "./InfoCardMenu.jsx";

export default {
  title: 'Components/Reusable/Cards/InfoCard/Items/InfoCardMenu',
  component: InfoCardMenu,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'string'
      },
      description: 'Id of the card'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <InfoCardMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
  id: '1'
}