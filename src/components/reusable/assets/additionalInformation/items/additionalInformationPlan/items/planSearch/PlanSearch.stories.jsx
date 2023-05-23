import PlanSearch from "./PlanSearch.jsx";

/**
 * Search component.
 *
 * Contains the function that is responsible for the action after clicking the search button:
 * ```
 *   const handleSearch = () => {
 *     //TODO: search logic
 *     console.log(value);
 *   }
 * ```
 */
export default {
  title: 'Components/Reusable/Assets/AdditionalInformation/Items/AdditionalInformationPlan/Items/PlanSearch',
  component: PlanSearch,
  tags: ['autodocs'],
  argTypes: {},
}

const Template = (args) => <PlanSearch {...args} />;
export const Default = Template.bind({});
Default.args = {

}