import type { Meta, StoryObj } from "@storybook/react";
import Statistic from "../components/Statistic";
import numeral from "numeral";

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
  args: { value: 10000000000000 },
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
    customFormatFn:function F(num: number): string {
      if (num >= 1000000) {
        return `${numeral(((num / 1000000) * 100) / 100).format("0,")}M`;
      } else if (num >= 1000) {
        return `${numeral(((num / 1000) * 100) / 100).format("0,")}K`;
      } else {
        return num.toString();
      }
    }
  },
};
