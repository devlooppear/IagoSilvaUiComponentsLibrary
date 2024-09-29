import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success Button",
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning Button",
  variant: "warning",
};
