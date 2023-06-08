import VideoUploader from "./VideoUploader.jsx";

export default {
  title: 'Reusable/Uploader/VideoUploader',
  component: VideoUploader,
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

const Template = (args) => <VideoUploader {...args} />
export const Default = Template.bind({});
Default.args = {
  setValue: () => {},
  defaultValue: ''
}

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  setValue: () => {},
  defaultValue: 'https://cdn.pixabay.com/vimeo/395456375/32937.mp4?width=1280&hash=e538e5b790285eee9adde29d0031e344a4a9ed1b'
}