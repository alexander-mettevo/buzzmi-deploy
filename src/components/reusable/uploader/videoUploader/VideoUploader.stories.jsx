import VideoUploader from "./VideoUploader.jsx";

export default {
  title: 'Reusable/Uploader/VideoUploader',
  component: VideoUploader,
  tags: ['autodocs'],
  argTypes: {

  }
}

const Template = (args) => <VideoUploader {...args} />
export const Default = Template.bind({});
Default.args = {

}