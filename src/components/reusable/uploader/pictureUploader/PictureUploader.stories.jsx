import PictureUploader from "./PictureUploader.jsx";


/**
 * This component is designed to load images.
 */
export default {
  title: 'Reusable/Uploader/PictureUploader',
  component: PictureUploader,
  tags: ['autodocs'],
  argTypes: {
    parentSetterState: {
      description: 'Setter state from parent component',
      table: {
        type: {
          summary: 'function',
        }
      }
    }
  },
}

const Template = (args) => <PictureUploader {...args} />;
export const Default = Template.bind({});
Default.args = {
  parentSetterState: () => {},
}