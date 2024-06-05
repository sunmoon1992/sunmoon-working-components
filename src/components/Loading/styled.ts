import styled, { css } from "styled-components";

const animation = (s = "0ms", i = 1) => css`
  .square${i} {
    animation: loader 450ms ease-in-out ${s} infinite alternate;
  }
`;

const base = {
  w: 0.75,
  rad: 0.15,
  gap: 0.25,
  color: "#6f6e84",
  fontSize: 16,
  duration: [
    "0ms",
    "75ms",
    "150ms",
    "225ms",
    "300ms",
    "375ms",
    "450ms",
    "525ms",
    "600ms",
  ],
};

export const Container = styled.div<{ $color?: string; $fontSize?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    font-size: ${(props) => `${props?.$fontSize || base.fontSize}px`};
    width: ${3 * base.w + base.gap * 2 + "em"};
    height: ${3 * base.w + base.gap * 2 + "em"};
    gap: ${base.gap}em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .square {
      background: ${(props) => props.$color || base.color};
      width: ${base.w}em;
      height: ${base.w}em;
      border-radius: ${base.rad}em;
    }

    ${animation(base.duration[0], 1)};
    ${animation(base.duration[1], 2)};
    ${animation(base.duration[2], 3)};
    ${animation(base.duration[3], 4)};
    ${animation(base.duration[4], 5)};
    ${animation(base.duration[5], 6)};
    ${animation(base.duration[6], 7)};
    ${animation(base.duration[7], 8)};
    ${animation(base.duration[8], 9)};
  }

  @keyframes loader {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
