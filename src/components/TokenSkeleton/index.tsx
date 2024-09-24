import cls from "classnames";

import { times } from "lodash";
import { PropsWithChildren } from "react";

import styled from "styled-components";
import { TokenSkeletonProps } from "./interface";

const base = {
  c1: "#333333",
  c2: "#444444",
};

const Container = styled.div<{ $color?: string[], $radius?: number, $height?: number }>`
  .skeleton-rows {
    gap: 16px;
    display: grid;
    grid-template-columns: 40px 1fr;
  }

  .skeleton-row {
    background-color: #303044;
    border-radius: ${props => props?.$radius ?? 10}px;
    height: ${props => props?.$height ?? 40}px;
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


function Skeleton(props: PropsWithChildren<TokenSkeletonProps>) {
  const { rows, loading = true, color, radius, children, className, animation } = props;

  return (
    <>
      {loading ? (
        <Container
          $color={color}
          $radius={radius}
          className={cls(
            "skeleton",
            { "skeleton-animate": animation },
            className,
          )}
        >
          <SkeletonRows rows={rows}/>
        </Container>
      ) : (
        children
      )}
    </>
  );
}

export default Skeleton;

const SkeletonRows = ({ rows = 2 }: { rows?: number }) => {
  return (
    <div className='skeleton-rows'>
      {times(rows, function (i) {
        return (<span className="skeleton-row" key={i}/>)
      })}
    </div>
  );
}
