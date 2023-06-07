import MediaWrapper from "./MediaWrapper.jsx";

export default {
  title: 'Reusable/Assets/MediaWrapper',
  component: MediaWrapper,
  tags: ['autodocs'],
  argTypes: {
    iconSrc: {
      description: 'The iconSrc of the mediaWrapper',
      table: {
        type: {summary: 'string'},
      }
    }
  }
}

const Template = (args) => <MediaWrapper {...args} />;
export const Default = Template.bind({});
Default.args = {
  iconSrc: '/images/assets/forms/image.svg'
}

export const WithVoice = Template.bind({});
WithVoice.args = {
  iconSrc: '/images/assets/forms/voice.svg'
}

export const WithVideo = Template.bind({});
WithVideo.args = {
  iconSrc: '/images/assets/forms/video.svg'
}