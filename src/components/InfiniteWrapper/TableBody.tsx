import { InfiniteWrapperTableBodyProps } from "./interface";
import { PropsWithChildren } from "react";

const CTableBody = ({ data, empty, loading, children }: PropsWithChildren<InfiniteWrapperTableBodyProps>) => {
  return (
    <div className="infinite-table-tbody">
      {!loading && data.length === 0 && (empty || <span className="infinite-table-tbody-nothing">Nothing Found</span>)}
      {children}
    </div>)
}
export default CTableBody
