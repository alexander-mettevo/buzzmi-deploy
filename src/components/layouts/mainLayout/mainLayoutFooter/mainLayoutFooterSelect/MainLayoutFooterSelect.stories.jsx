import MainLayoutFooterSelect from "./MainLayoutFooterSelect.jsx";

/**
 * This component is responsible for changing the language in the application. It has the __handleSelect__ function,
 * in which you must put code that will change the language when you change the value of the select.
 * Also inside it should be set up an array of available languages. Here is a sample view of this array:
 *
 * ```
 *  const options = [
 *   {label: "Ukrainian", value: "ua"},
 *   {label: "Polsky", value: "pl"},
 *   {label: "Chinese", value: "cn"},
 *   {label: "English", value: "gb"},
 *   {label: "Indonesian", value: "id"},
 *   {label: "Hindi", value: "in"},
 *   {label: "Nigerian Pidgin", value: "ng"},
 * ];
 * ```
 *
 * Also, the client's avatar and a link to his profile must be loaded into this component. For this, it has a function __handleGetAvatar__. Which has the following form:
 *
 * ```
 *
 * ```
 */
export default {
  title: 'Components/Layouts/MainLayout/MainLayoutFooter/MainLayoutFooterSelect',
  component: MainLayoutFooterSelect,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{padding: '300px 0', width: '200px', maxWidth: '200px', margin: '0 auto'}}>
        <Story/>
      </div>
    ),
  ],
}

const Template = (args) => <MainLayoutFooterSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
  // TODO Add props here
}