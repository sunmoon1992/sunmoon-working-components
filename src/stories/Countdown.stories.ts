import type { Meta, StoryObj } from "@storybook/react";
import Countdown from "../components/Countdown";
import dayjs from "dayjs";
const N = dayjs().valueOf();
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Countdown",
  component: Countdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Countdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo1: Story = {
  args: {
    end: N + 10 * 100000,
    start: N + 5 * 1000000,
    interval: 25,
    notStartText: "未开始",
    deadlineText: "截止",
    showMilliseconds: true,
    onProgress: (v) => console.info(v),
    onFinished: (v) => console.info(v),
  },
};
export const Demo2: Story = {
  args: {
    end: N + 10 * 1000,
    interval: 25,
    showMilliseconds: true,
    onProgress: (v) => console.info(v),
    onFinished: (v) => console.info(v),
    extraNode: "",
  },
};
