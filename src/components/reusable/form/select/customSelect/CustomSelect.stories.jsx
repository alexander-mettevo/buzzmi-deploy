import CustomSelect from "./CustomSelect.jsx";

/**
 * This component is based on the component from the [react-select](https://www.npmjs.com/package/react-select) library that is installed in this application.
 * Below is an example of how to use this component. The important point here is the useState in the parent component.
 *
 * ``` js
 * const ExampleUseSelect = () => {
 *   const [selected, setSelected] = useState([]);
 *
 *   return (
 *     <CustomSelect selected={selected} setSelected={setSelected} options={options}/>
 *   );
 * };
 * ```
 */
export default {
  title: 'Forms/Select/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs'],
  decorators: [story => <div style={{ height: '500px' }}>{story()}</div>],
  argTypes: {
    className: {
      description: 'Class name for styling component',
      table: {
        type: {
          summary: 'string',
        }
      }
    },
    options: {
      description: 'Options for select',
      table: {
        type: {
          summary: 'array',
        }
      }
    },
    selected: {
      description: 'Selected option',
      table: {
        type: {
          summary: 'object',
        }
      }
    },
    setSelected: {
      description: 'Function for setting selected option',
      table: {
        type: {
          summary: 'function',
        }
      }
    }
  }
}

const Template = (args) => <CustomSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
  options: [
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'},
    {value: '3', label: 'Option 3'},
    {value: '4', label: 'Option 4'},
    {value: '5', label: 'Option 5'},
    {value: '6', label: 'Option 6'},
    {value: '7', label: 'Option 7'},
    {value: '8', label: 'Option 8'}
  ],
  selected: {value: '1', label: 'Option 1'},
  setSelected: () => {}
}

export const Secondary = Template.bind({});
Secondary.args = {
  className: 'select__secondary',
  options: [
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'},
    {value: '3', label: 'Option 3'},
    {value: '4', label: 'Option 4'},
    {value: '5', label: 'Option 5'},
    {value: '6', label: 'Option 6'},
    {value: '7', label: 'Option 7'},
    {value: '8', label: 'Option 8'}
  ],
  selected: {value: '1', label: 'Option 1'},
  setSelected: () => {}
}