import styled from "styled-components";

const base = {
  c1: "#1d1d22",
  c2: "#1D1D2280",
};

export const Container = styled.div<{ $color?: string[], $height?: number }>`
  .skeleton-content {
    flex: 1;
    overflow: hidden;

    .skeleton-rows {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .skeleton-row {
      background-color: #303044;
      border-radius: 0.25em;
      height: ${props => props?.$height ?? 20}px;
    }
  }

  &.skeleton-animate {
    width: 100%;

    .skeleton-row {
      background: linear-gradient(90deg,
      ${(props) => props?.$color?.[0] ?? base.c1} 25%,
      ${(props) => props?.$color?.[1] ?? base.c2} 37%,
      ${(props) => props?.$color?.[0] ?? base.c1} 63%);
      background-size: 400% 100%;
      animation: loader 1s cubic-bezier(0, 0, 1, 1) infinite;

      @keyframes loader {
        0% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0 50%;
        }
      }
    }
  }
`;
