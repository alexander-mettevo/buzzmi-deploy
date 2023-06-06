import AddName from "./AddName.jsx";

export default {
  title: 'Pages/Hub/Items/Form/AddName',
  component: AddName,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The title of the box',
      table: {
        type: {summary: 'string'},
      }
    },
    placeholder: {
      description: 'The placeholder of the input',
      table: {
        type: {summary: 'string'},
      }
    },
    name: {
      description: 'The name of the input',
      table: {
        type: {summary: 'string'},
      }
    },
    register: {
      description: 'The register of the input',
      table: {
        type: {summary: 'func'},
      }
    }
  }
}

const Template = (args) => <AddName {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Add preset name',
  placeholder: 'Preset name',
  name: 'presetName',
  register: () => {}
}