import PictureUploaderList from "./PictureUploaderList.jsx";

export default {
  title: 'Reusable/Uploader/PictureUploaderList',
  component: PictureUploaderList,
  tags: ['autodocs'],
  argTypes: {
    setValue: {
      description: 'Setter state from parent component',
      table: {
        type: {
          summary: 'function',
        }
      }
    },
    defaultValues: {
      description: 'Default value',
      table: {
        type: {
          summary: 'array',
        }
      }
    }
  }
}

const Template = (args) => <PictureUploaderList {...args} />;
export const Default = Template.bind({});
Default.args = {
  setValue: () => {},
  defaultValues: [
    'https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/06/15/adult-1867743_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/04/24/20/38/bodybuilder-331670_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg']
}