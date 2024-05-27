import type { Meta, StoryObj } from "@storybook/react";
import CheckCards from "../components/CheckCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/CheckCards",
  component: CheckCards,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { data: [] },
} satisfies Meta<typeof CheckCards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    onChange: (v) => {
      console.info(v);
    },
    data: [
      {
        poster:
          "https://i.seadn.io/s/raw/files/e0223f374ef2d6a4039e157dfa74aacb.png?auto=format&dpr=1&w=384",
        tokenId: 0,
        desc: "0 MAN",
        value: true,
      },
      {
        poster:
          "https://i.seadn.io/s/raw/files/e0223f374ef2d6a4039e157dfa74aacb.png?auto=format&dpr=1&w=384",
        tokenId: 1,
        desc: "1 MAN",
      },
      {
        poster:
          "https://i.seadn.io/s/raw/files/e0223f374ef2d6a4039e157dfa74aacb.png?auto=format&dpr=1&w=384",
        tokenId: 2,
        desc: "2 MAN",
        value: true,
      },
    ],
  },
};
