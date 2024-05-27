import { InfiniteTableColumnProps } from "./interface";
import { TableHead } from "./styled";

const CTableThead = ({ columns }: { columns: InfiniteTableColumnProps[] }) => {
  return <TableHead className="table-thead">
    {
      columns.map((c) => (
        <div
          className="table-thead-td"
          key={c.name}
          style={{
            width: c.width,
            justifyContent: c.align
          }}>{c.name}</div>
      ))
    }
  </TableHead>
}

export default CTableThead
