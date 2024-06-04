import type { Meta, StoryObj } from "@storybook/react";
import FormatAmount from "../components/FormatAmount";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/FormatAmount",
  component: FormatAmount,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { amount: "10000", decimals: 8 },
} satisfies Meta<typeof FormatAmount>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo1: Story = {
  args: {
    amount: "0",
    decimals: 8,
  },
};
export const Demo2: Story = {
  args: {
    local: true,
    amount: "110000.12",
    decimals: 8,
    // format:'0,'
  },
};
export const Demo3: Story = {
  args: {
    amount: "10000.9999999999",
    decimals: 8,
  },
};
export const Demo4: Story = {
  args: {
    amount: "10000.9000000000",
    decimals: 8,
  },
};
export const Demo5: Story = {
  args: {
    amount: "10000.9000000000",
    decimals: 1,
  },
};
