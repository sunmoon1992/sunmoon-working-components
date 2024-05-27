export interface VideoProps {
  src: string;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  onEnded?: () => void;
  onError?: () => void;
  onPlaying?: () => void;
  onLoadStart?: () => void;
}
