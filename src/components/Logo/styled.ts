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
  
  &.wrapper {
    background-image: linear-gradient(to right, #12c2e9 , #c471ed);
    clip-path: circle(0px at 0 0px);  /*初始的时候大小为0，不显示*/
    animation: clipPathAn 2s infinite;

    @keyframes clipPathAn {
      from { clip-path: circle(0px at 0 0px);  }
      to { clip-path: circle(110% at 0 34px); }  /* 结束时大小变为200%，超出实际大小的隐藏，所以这里还是显示的原大小，也就是100%，这里变为200%是因为锚点在最左侧，100%只能显示原图的一半，所以要写成200%。 */
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
