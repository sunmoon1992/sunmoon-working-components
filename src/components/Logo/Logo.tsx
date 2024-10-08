import { _Logo } from "./styled";
import { FC } from "react";
import { LogoProps } from "./interface";
import _Image from "./Image";
import classNames from "classnames";

const Logo: FC<LogoProps> = (
  {
    src,
    alt,
    size,
    count = 0,
    slice,
    index = 0,
    color,
    border,
    radius = '',
    bColor,
    wrapper,
    borderColor,
    wrapperColor,
  }) => {
  return (
    <_Logo
      $size={size}
      $radius={radius}
      $border={border}
      $bColor={bColor}
      $wrapper={wrapperColor}
      $borderColor={borderColor}
      $zIndex={count - index}
      className={classNames('logo', { wrapper })}
    >
      {
        wrapper && (
          <i/>
        )
      }
      <_Image slice={slice} color={color} bColor={bColor} src={src ?? ''} alt={alt ?? ''}/>
    </_Logo>
  );
};

export default Logo

