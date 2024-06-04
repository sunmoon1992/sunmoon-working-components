import { _Logo } from "./styled";
import { FC} from "react";
import { LogoProps } from "./interface";
import _Image from "./Image";

const Logo: FC<LogoProps> = (
  {
    src,
    alt,
    size,
    count = 0,
    index = 0,
    color,
    border,
    radius = 0,
    bColor,
    borderColor,
  }) => {
  return (
    <_Logo
      $size={size}
      $radius={radius}
      $border={border}
      $borderColor={borderColor}
      $zIndex={count - index}
      className={'logo'}
    >
      <_Image color={color} bColor={bColor} src={src ?? ''} alt={alt ?? ''}/>
    </_Logo>
  );
};

export default Logo

