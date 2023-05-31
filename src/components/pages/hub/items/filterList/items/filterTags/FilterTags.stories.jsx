import FilterTags from "./FilterTags.jsx";

export default {
  title: 'Components/Pages/Hub/Items/FilterList/Items/FilterTags',
  component: FilterTags,
  tags: ['autodocs'],
  argTypes: {
    tags: {
      control: {
        type: 'array'
      },
      description: 'Array of tags'
    },
  }
}

const Template = (args) => <FilterTags {...args} />;
export const Default = Template.bind({});
Default.args = {
  tags: ['all', 'presets', 'workouts', 'habits', 'program', 'challenges']
}