import { _Group } from "./styled";
import * as React from "react";
import { FC, useMemo } from "react";
import { GroupProps } from "./interface";

const Group: FC<GroupProps> = ({ size, mLeft, children }) => {
  const child = useMemo(() => React.Children.map(children, (c: any, index) => React.cloneElement(c, {
    ...c?.props,
    index,
    count: children.length
  })), [children])

  return (
    <_Group className='logo-group' $mLeft={mLeft} $size={size}>
      {child}
    </_Group>
  );
};
export default Group
