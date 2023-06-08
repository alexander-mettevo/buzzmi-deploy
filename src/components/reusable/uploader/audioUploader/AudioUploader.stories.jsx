import AudioUploader from "./AudioUploader.jsx";

export default {
  title: 'Reusable/Uploader/AudioUploader',
  component: AudioUploader,
  tags: ['autodocs'],
  argTypes: {
    setValue: {
      description: 'value setter',
      table: {
        type: {
          summary: 'function',
        }
      }
    },
    defaultValue: {
      description: 'default value',
      table: {
        type: {
          summary: 'string',
        }
      }
    }
  }
}

const Template = (args) => <AudioUploader {...args} />;
export const Default = Template.bind({});
Default.args = {
  setValue: () => {},
  defaultValue: ''
}

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  setValue: () => {},
  defaultValue: '/sounds/test-track.mp3'
}