import Discount from "./Discount.jsx";

export default {
  title: 'Reusable/Assets/Discount',
  component: Discount,
  tags: ['autodocs'],
  argTypes: {
    discount: {
      control: 'number',
      description: 'Discount value',
    },
    specialOffer: {
      control: 'text',
      description: 'Special offer text',
    }
  }
}

const Template = (args) => <Discount {...args} />;
export const Default = Template.bind({});
Default.args = {
  discount: 10,
  specialOffer: 'Special offer text'
}