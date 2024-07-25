import { ReactNode } from "react";

export interface InfiniteWrapperProps {
  data: any[],
  rowHeight?: number,
  itemCount?: number,
  customItem: (p: any) => ReactNode,
  tableHeight?: string,
  hasNextPage?: boolean,
  isNextPageLoading?: boolean,
  loadNextPage?: () => void
}

export interface InfiniteWrapperTableBodyProps {
  data: any[],
  empty?: ReactNode,
  loading?: boolean,
}
