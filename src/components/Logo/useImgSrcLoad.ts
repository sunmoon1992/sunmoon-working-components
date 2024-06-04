import { useCallback, useMemo, useReducer } from "react";

const BAD_IMG_SRC: { [key: string]: boolean | undefined } = {};

export const useImgSrcLoad = (src: string): [string | undefined, () => void] => {
  const [loop, setLoop] = useReducer(
    (n: number) => n + 1,
    0,
    () => 0,
  );

  const current = useMemo(() => [src].find((src) => !BAD_IMG_SRC[src]), [src, loop]);

  const nextURL = useCallback(() => {
    if (current) BAD_IMG_SRC[current] = true;
    setLoop();
  }, [current]);

  return [current, nextURL];
};
