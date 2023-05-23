import PlanBio from "./PlanBio.jsx";

/**
 * Component for displaying user information. Avatar, name and status.
 * Component for displaying user information. Avatar, name and status. All this information is obtained inside the component thanks to this function:
 * ```
 *  const getData =  () => {
 *     //TODO: get data
 *     const data = {
 *       avatar: {
 *         src: "/images/moc/avatar-big.png",
 *         alt: "avatar"
 *       },
 *       name: "John Doe",
 *       isVerified: true,
 *     };
 *     setUser(data);
 *   }
 * ```
 */
export default {
  title: 'Components/Reusable/Assets/AdditionalInformation/Items/AdditionalInformationPlan/Items/PlanBio',
  component: PlanBio,
  tags: ['autodocs'],
}

const Template = (args) => <PlanBio {...args} />;
export const Default = Template.bind({});
Default.args = {

}