import { Meta, StoryFn } from "@storybook/react";
import Card from "../components/Card";

export default {
  title: "Example/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: "Default Card Title",
  content: "This is a simple card component built with styled-components.",
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
  title: "Outlined Card Title",
  content: "This card has an outlined style.",
  variant: "outlined",
};

export const CardWithAction = Template.bind({});
CardWithAction.args = {
  title: "Card with Action",
  content: "This card includes an action button.",
  action: <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Action</button>,
};