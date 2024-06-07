export interface InfiniteTableColumnProps {
  name: string;
  index: string;
  width?: string;
  align?: "right" | "left" | "center";
  render?: (v: any, index?: number) => JSX.Element;
}

export interface InfiniteTableProps {
  data: any[],
  color?: string,
  columns: InfiniteTableColumnProps[],
  border?: boolean,
  loading?: boolean,
  rowHeight?: number,
  itemCount?: number,
  tableHeight?: string,
  tableHeadBg?: string,
  containerBg?: string,
  tableHeadCr?: string,
  hasNextPage?: boolean,
  isNextPageLoading?: boolean,
  gridTemplateColumns?: string[],
  loadNextPage?:() => void
}

export const size = {
  padSize: 10,
  height: 36,
  screen: 500
}
