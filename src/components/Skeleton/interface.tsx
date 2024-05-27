export interface SkeletonProps {
  color?: string[];
  loading?: boolean;
  className?: string;
  animation?: boolean;
  rowsProps?: SkeletonRowsProps;
}

export interface SkeletonRowsProps {
  rows?: number;
  width?: number | string | (string | number)[];
  className?: string;
}
