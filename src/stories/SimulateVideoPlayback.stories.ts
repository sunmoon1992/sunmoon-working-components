import type { Meta, StoryObj } from "@storybook/react";
import SimulateVideoPlayback from "../components/SimulateVideoPlayback";
import { imgs } from "./SimulateVideoPlayback/imgs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SimulateVideoPlayback",
  component: SimulateVideoPlayback,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { data: [] },
} satisfies Meta<typeof SimulateVideoPlayback>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    onChange: (v) => {
      console.info(v);
    },
    imgs: imgs
  },
};
