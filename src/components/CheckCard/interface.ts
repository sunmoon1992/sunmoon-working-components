export interface CheckCardProps {
  desc?: React.ReactNode;
  value?: boolean;
  poster?: string;
  disabled?: boolean;
  className?: string;
  onChange: (v: boolean) => void;
}
