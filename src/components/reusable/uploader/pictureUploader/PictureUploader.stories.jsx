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
    },
    maxNumber: {
      description: 'Maximum number of images',
      table: {
        type: {
          summary: 'number',
        }
      }
    },
    defaultValue: {
      description: 'Default value',
      table: {
        type: {
          summary: 'any',
        }
      }
    }
  },
}

const Template = (args) => <PictureUploader {...args} />;
export const Default = Template.bind({});
Default.args = {
  parentSetterState: () => {
  },
  maxNumber: 1,
  defaultValue: 'https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg',
}