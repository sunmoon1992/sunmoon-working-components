import cls from "classnames";

import { PropsWithChildren } from "react";

import SkeletonRows from "./SkeletonRows";
import { SkeletonProps } from "./interface";
import { Container } from "./styled";

function Skeleton(props: PropsWithChildren<SkeletonProps>) {
  const { loading = true, color, children, className, animation, rowsProps } = props;

  return (
    <>
      {loading ? (
        <Container
          $color={color}
          className={cls(
            "skeleton",
            { "skeleton-animate": animation },
            className,
          )}
        >
          <SkeletonRows {...rowsProps} />
        </Container>
      ) : (
        children
      )}
    </>
  );
}

export default Skeleton;
