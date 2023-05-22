import MainLayoutFooter from "./MainLayoutFooter.jsx";

/**
 * __This component is not displayed on small screens (tablets, cell phones).__
 *
 * Footer for the Main Layout. Contains links to pages, the ability to choose a language. As well as additional information.
 */
export default {
  title: 'Components/Layouts/MainLayout/MainLayoutFooter',
  component: MainLayoutFooter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '300px 0' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <MainLayoutFooter {...args} />;
export const Default = Template.bind({});
Default.args = {}