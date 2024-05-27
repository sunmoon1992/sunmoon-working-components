import cls from "classnames";
import { FC } from "react";

import { SkeletonRowsProps } from "./interface";

const SkeletonRows: FC<SkeletonRowsProps> = ({ className }) => {
  return (
    <div className="skeleton-content">
      <ul className={cls("skeleton-rows", className)}>
        <li className="skeleton-row" />
      </ul>
    </div>
  );
};

export default SkeletonRows;
