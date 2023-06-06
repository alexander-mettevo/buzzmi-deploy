import VideoPlayer from "./VideoPlayer.jsx";

export default {
  title: 'Reusable/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    url: {
      description: 'The url of the video to play',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    tracks: {
      description: 'The tracks of the video to play',
      table: {
        type: {
          summary: 'array'
        }
      }
    }
  },
  tags: ['autodocs']
}

const Template = (args) => <VideoPlayer {...args} />;
export const Default = Template.bind({});
Default.args = {
  url: 'https://v4.cdnpk.net/videvo_files/video/free/video0480/large_watermarked/_import_628b55859ec151.61264002_FPpreview.mp4',
  tracks: [
    {
      kind: "descriptions",
      src: "/video/descriptions.en.vtt",
      srcLang: "en",
      label: "English"
    },
    {
      kind: "descriptions",
      src: "/video/descriptions.en.vtt",
      srcLang: "en",
      label: "English2"
    }

  ]
}