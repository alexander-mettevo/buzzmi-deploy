import MainLayoutRightColumn from "./MainLayoutRightColumn.jsx";

/**
 * __This component is not displayed on small screens (tablets, cell phones).__
 *
 * The right column of the main layout.
 */
export default {
  title: 'Layouts/MainLayout/MainLayoutContent/MainLayoutRightColumn',
  component: MainLayoutRightColumn,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Here you must pass the component that contains the content to be displayed in the right column.',
      table: {
        type: {
          summary: 'React.ReactNode',
        }
      }
    }
  }
}

const Template = (args) => <MainLayoutRightColumn {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: <div>Children</div>,
}