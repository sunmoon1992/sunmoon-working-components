import type { Meta, StoryObj } from "@storybook/react";
import Copy from "../components/Copy";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Copy",
  component: Copy,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { },
} satisfies Meta<typeof Copy>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    text: 'hello000!!! 👏 🎉'
  },
};
export const Demo1: Story = {
  args: {
    text: 'hello111!!! 👏 🎉'
  },
};
export const Demo2: Story = {
  args: {
    text: 'hello222!!! 👏 🎉'
  },
};
