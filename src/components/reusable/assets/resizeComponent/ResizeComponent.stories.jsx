import ResizeComponent from "./ResizeComponent.jsx";

export default {
  title: 'Components/Reusable/Assets/ResizeComponent',
  component: ResizeComponent,
  tags: ['autodocs'],
  argTypes: {
    desktopComponent: {
      name: 'Desktop Component',
      description: 'Component to be rendered on desktop',
      control: {
        type: 'ReactNode'
      }
    },
    mobileComponent: {
      name: 'Mobile Component',
      description: 'Component to be rendered on mobile',
      control: {
        type: 'ReactNode'
      }
    }
  }
}

const Template = (args) => <ResizeComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  desktopComponent: <h1>Desktop Component</h1>,
  mobileComponent: <h1>Mobile Component</h1>
}