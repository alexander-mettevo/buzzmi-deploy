import MainLayoutContent from "./MainLayoutContent.jsx";

/**
 * This component is needed to task the form to the content displayed in the main layout.
 * __Note that this component is responsible for the distribution of content in the main part of the template and in the right column.__
 * This is done by setting components with content for the main part and the right column in the appropriate properties.
 */
export default {
  title: 'Components/Layouts/MainLayout/MainLayoutContent',
  component: MainLayoutContent,
  tags: ['autodocs'],
  argTypes: {
    rightColumnContent: {
      description: 'This is where you should pass components that contain content for the right-hand column.',
      table: {
        type: {
          summary: 'React.ReactNode',
        }
      }
    },
    children: {
      description: 'Here you should pass the component that contains the main content of the page.',
      table: {
        type: {
          summary: 'React.ReactNode',
        }
      }
    }
  }
}

const Template = (args) => <MainLayoutContent {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: <div>Children</div>,
  rightColumnContent: <div>Right Column Content</div>
}
