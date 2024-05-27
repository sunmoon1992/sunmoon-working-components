import type { Meta, StoryObj } from "@storybook/react";
import Statistic from "../components/Statistic";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Statistic",
  component: Statistic,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { value: 10000 },
} satisfies Meta<typeof Statistic>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    format: "0,",
  },
};
export const Proceed: Story = {
  args: {
    format: "0,0.00",
    proceed: true,
  },
};
