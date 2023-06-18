import FormToggleDropdown from "./FormToggleDropdown.jsx"

const values = {}

const setValues = (name, newValues) => {
  values[name] = newValues
}

/**
 * This component is designed to output form components. Its difference from the classic drop-down component is that it
 * takes the form field name and a function to help initialize the value when you open and close this component. When the
 * component is first loaded, it displays the default value, if there is one (for example, it might be the primary data
 * in the form for editing). When you close it, it resets the value to null (always).
 */
export default {
  title: "Reusable/Assets/Dropdown/FormToggleDropdown",
  component: FormToggleDropdown,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Dropdown title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    info: {
      description: "Text to display in the tooltip",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      description: "Dropdown content",
      table: {
        type: {
          summary: "element",
        },
      },
    },
    icon: {
      description: "Dropdown icon",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultValue: {
      description: "Default value",
      table: {
        type: {
          summary: "object",
        },
      },
    },
    isEditable: {
      description: "Is it possible to edit the content of a component",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onEditBtn: {
      description: "Function to call when clicking on the edit button",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    editBtnText: {
      description: "Text to display on the edit button",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    setValue: {
      description: "Initializes form values when a dropdown is opened or resets them when it is closed.",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    name: {
      description: "Name of the form field",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
}
console.log("values", values)
const Template = (args) => <FormToggleDropdown {...args} />
export const Base = Template.bind({})
Base.args = {
  title: "Dropdown title",
  info: "Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel diam euismod, tincidunt diam vitae, aliquam nisl. Nulla facilisi.",
  children: <div>Dropdown content</div>,
  setValue: setValues,
  name: "test",
  defaultValue: "test-this",
}
