import styled from "styled-components";

export const _Group = styled.div<{ $size?: number, $mLeft?: number }>`
  display: flex;
  align-items: center;

  .logo {
    width: ${props => props?.$size ?? 32}px;
    height: ${props => props?.$size ?? 32}px;

    &:not(:first-child) {
      margin-left: ${props => props?.$mLeft ?? -8}px;
    }
  }
`;

export const _Logo = styled.div<{ $size?: number, $radius: string, $zIndex: number, $border?: boolean, $bColor?: string, $borderColor?: string, $wrapper?: string[] }>`
  z-index: ${(props) => props.$zIndex};
  display: flex;
  border-radius: ${(props) => props?.$radius || '100%'};
  border-width: ${(props) => props?.$border ? 2 : 0}px;
  border-color: ${(props) => props?.$borderColor ?? 'transparent'};
  background-color: ${(props) => props?.$bColor ?? 'transparent'};
  border-style: solid;
  box-sizing: border-box;
  overflow: hidden;
  width: ${props => props?.$size ?? 32}px;
  height: ${props => props?.$size ?? 32}px;

  img {
    width: 100%;
    height: 100%;
    vertical-align: unset;
  }

  @media screen and (max-width: 500px) {
    width: ${props => props?.$size ?? 24}px;
    height: ${props => props?.$size ?? 24}px;
  }

  &.wrapper {
    padding: 2px;
    position: relative;
    background-color: transparent;

    img {
      z-index: 2;
      position: absolute;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border-radius: 100%
    }

    i {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100%;
      background: linear-gradient(${props => (props?.$wrapper ?? ['#ff794a, #f04d7a, #9544c5']).join(',')});
      animation: animate 0.5s linear infinite;
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
`

export const Missing = styled.div<{ $color?: string, $bColor?: string }>`
  width: 100%;
  height: 100%;
  color: ${(props) => props?.$color ?? '#fff'};
  background-color: ${(props) => props?.$bColor ?? '#666'};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
