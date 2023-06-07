import FilterList from "./FilterList.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * A component for displaying the list of tasks with the ability to filter.
 * At the moment test data is used inside the component, when connecting to the working API you need to pass the actual
 * data via the data property to this component.
 */
export default {
  title: 'Pages/Hub/Items/FilterList',
  component: FilterList,
  tags: ['autodocs'],
  decorators: [withRouter],
}

const Template = (args) => <FilterList {...args} />;
export const Default = Template.bind({});
Default.args = {}