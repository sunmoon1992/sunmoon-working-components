import { useMemo } from "react";
import { Missing } from "./styled";
import { useImgSrcLoad } from "./useImgSrcLoad";
import { ImageProps } from "./interface";

function _Image(
  {
    src,
    alt,
    color,
    slice = 3,
    bColor
  }: ImageProps) {
  const [url, nextURL] = useImgSrcLoad(src)

  return useMemo(() => {
    if (url) return <img src={url} onError={nextURL} alt={alt}/>;
    return <Missing $color={color} $bColor={bColor} className="missing">{alt.slice(0, slice)}</Missing>;
  }, [url, nextURL]);
}

export default _Image;
