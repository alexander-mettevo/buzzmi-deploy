import PlanInfo from "./PlanInfo.jsx";

/**
 * The component displays information about the customer's plan. It also displays a button with an offer to change it.
 *
 * Information about the plan is obtained internally by the component thanks to this function:
 *
 * ```js
 *  const getData = () => {
 *     //TODO: get data
 *     const data = {
 *       icon: {
 *         src: "/images/moc/free-user.png",
 *         alt: "plan"
 *       },
 *       title: "Free User",
 *     }
 *
 *     setPlanInfo(data);
 *   }
 * ```
 */
export default {
  title: 'Components/Reusable/Assets/AdditionalInformation/Items/AdditionalInformationPlan/Items/PlanInfo',
  component: PlanInfo,
  tags: ['autodocs'],
}

const Template = (args) => <PlanInfo {...args} />;
export const Default = Template.bind({});
Default.args = {

}