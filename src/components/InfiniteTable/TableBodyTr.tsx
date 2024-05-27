import { CSSProperties } from "react";
import { InfiniteTableColumnProps } from "./interface";
import Skeleton from "../Skeleton/index";
import styled from "styled-components";

const TableBodyTd = styled.div<{ width?: string, justifyContent?: string }>`
  width: ${props => props.width};
  justify-content: ${props => props.justifyContent};
`

const CTableBodyTr = (
  {
    data,
    index,
    style,
    width,
    columns,
    loading
  }: {
    data: any
    index: number,
    width: number,
    style: CSSProperties | undefined,
    columns: InfiniteTableColumnProps[]
    loading: boolean
  }) => {
  return (
    <div className="table-tbody-tr" style={style}>
      {
        width >= 500
          ? (<>
            {
              columns.map((c) => (
                <TableBodyTd
                  key={c.name}
                  width={c.width}
                  justifyContent={c.align}
                  className="table-tbody-td"
                >
                  {loading
                    ? (<Skeleton color={['#2e2e33','#2E2E3380']} animation loading/>)
                    : (c.render ? c.render(data[c.index], index) : data[c.index])}
                </TableBodyTd>
              ))
            }
          </>)
          : (
            <div className="table-tbody-tr-inner">
              {
                columns.map((c) => (
                  <TableBodyTd
                    key={c.name}
                    className="table-tbody-td"
                  >
                    <div className="table-tbody-td-inner">
                      {loading
                        ? (<Skeleton animation loading/>)
                        : (<div className="table-tbody-td-row">
                          <span>{c.name}</span>
                          <span>{c.render ? c.render(data[c.index], index) : data[c.index]}</span>
                        </div>)}
                    </div>
                  </TableBodyTd>
                ))
              }
            </div>
          )
      }
    </div>
  )
}

export default CTableBodyTr


