import Button from "./Button.jsx"

export default {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button text",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Default Button",
  className: "",
}

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary Button",
  className: "_fw button_primary",
}

export const MediumPrimary = Template.bind({})
MediumPrimary.args = {
  children: "Primary Button",
  className: "_fw button_primary button_m",
}

export const SmallPrimary = Template.bind({})
SmallPrimary.args = {
  children: "Primary Button",
  className: "_fw button_primary button_s",
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary Button",
  className: "button_secondary  btn-text",
}

export const SmallSecondary = Template.bind({})
SmallSecondary.args = {
  children: "Small Secondary Button",
  className: "_fw button_secondary button_s",
}

export const AltPrimary = Template.bind({})
AltPrimary.args = {
  children: "AltPrimary Button",
  className: "_fw button_alt-primary  text-r",
}

export const Regular = Template.bind({})
Regular.args = {
  children: "Regular Button",
  className: "button_regular",
}

export const SecondaryDoubleColors = Template.bind({})
SecondaryDoubleColors.args = {
  children: "Secondary Double Colors Button",
  className: "button_secondary button_m double-secondary ",
}

export const AltSmallBtn = Template.bind({})
AltSmallBtn.args = {
  children: "Alt Button",
  className: "alt-btn button_s",
}
