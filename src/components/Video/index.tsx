import { MutableRefObject, useCallback, useEffect, useRef } from "react";

import { VideoProps } from "./interface";

const Video = ({
  src,
  loop = true,
  muted = true,
  poster,
  autoPlay = true,
  controls = false,
  onError,
  onEnded,
  onPlaying,
  onLoadStart,
}: VideoProps) => {
  const ref: MutableRefObject<HTMLVideoElement | null> = useRef(null);

  const handle = useCallback(() => {
    if (ref?.current) {
      ref.current.controls = false;
      ref.current?.play();
    }
  }, []);

  useEffect(() => {
    handle();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      loop={loop}
      muted={muted}
      poster={poster}
      autoPlay={autoPlay}
      controls={controls}
      playsInline
      className={"video"}
      controlsList="nofullscreen nodownload noremoteplayback"
      onClick={handle}
      onError={onError}
      onEnded={onEnded}
      onPlaying={onPlaying}
      onLoadStart={onLoadStart}
    />
  );
};

export default Video;
