import AudioUploader from "./AudioUploader.jsx";

export default {
  title: 'Reusable/Uploader/AudioUploader',
  component: AudioUploader,
  tags: ['autodocs'],
  argTypes: {

  }
}

const Template = (args) => <AudioUploader {...args} />;
export const Default = Template.bind({});
Default.args = {

}