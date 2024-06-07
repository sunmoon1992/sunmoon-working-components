import { TableBody, Nothing } from "./styled";
import { InfiniteTableProps } from "./interface";
import { PropsWithChildren } from "react";

const CTableBody = ({ data, loading, children }: PropsWithChildren<Omit<InfiniteTableProps, 'columns'|'color'>>) => {
  return (
    <TableBody className="table-tbody">
      {!loading && data.length === 0 && (<Nothing>Nothing Found</Nothing>)}
      {children}
    </TableBody>)
}
export default CTableBody
