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

export const _Logo = styled.div<{ $size?: number, $radius: number, $zIndex: number, $border?: boolean, $borderColor?: string }>`
  z-index: ${(props) => props.$zIndex};
  border-radius: ${(props) => props?.$radius ? props?.$radius + 'px' : '100%'};
  border-width: ${(props) => props?.$border ? 2 : 0}px;
  border-color: ${(props) => props?.$borderColor ?? '#222'};
  background-color: ${(props) => props?.$borderColor ?? '#222'};
  border-style: solid;
  box-sizing: border-box;
  overflow: hidden;
  width: ${props => props?.$size ?? 32}px;
  height: ${props => props?.$size ?? 32}px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    width: ${props => props?.$size ?? 20}px;
    height: ${props => props?.$size ?? 20}px;
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
