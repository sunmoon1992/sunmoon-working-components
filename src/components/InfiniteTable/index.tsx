import { noop } from "lodash";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import Measure from 'react-measure'

import { InfiniteTableProps, size } from "./interface";
import { Container, Table } from "./styled";
import CTableBody from "./TableBody";
import CTableBodyTr from "./TableBodyTr";
import CTableThead from "./TableHead";

const InfiniteTable = (
  {
    data,
    columns,
    itemCount = 10,
    rowHeight = size.height,
    tableHeight = '100%',
    hasNextPage,
    isNextPageLoading,
    gridTemplateColumns,
    loadNextPage,
  }: InfiniteTableProps) => {

  const _isItemLoaded = (index: number) => !hasNextPage || index < data.length

  const _loadMoreItems = isNextPageLoading ? noop : loadNextPage;

  return (
    <Measure bounds>
      {({ measureRef, contentRect }: any) => {
        return (
          <Container ref={measureRef} $tableHeight={tableHeight} id='table'>
            <AutoSizer disableWidth>
              {({ height }: { height: number }) => {
                const boundsWidth = contentRect.bounds.width >= size.screen
                const _rowHeight = columns.length * 20 + (columns.length - 1) * 8 + 30
                return (
                  <Table
                    $height={
                      boundsWidth
                        ? rowHeight
                        : _rowHeight}
                    className="table"
                    $gridTemplateColumns={gridTemplateColumns || Array.from({ length: columns.length }, () => '1fr')}>
                    <CTableThead columns={columns}/>
                    <CTableBody data={data} loading={isNextPageLoading}>
                      <InfiniteLoader
                        isItemLoaded={_isItemLoaded}
                        itemCount={hasNextPage ? data.length + (boundsWidth ? itemCount : 1) : data.length}
                        loadMoreItems={_loadMoreItems}>
                        {
                          ({ onItemsRendered, ref }: any) => (
                            <FixedSizeList
                              className={''}
                              ref={ref}
                              height={height - (boundsWidth
                                ? rowHeight
                                : size.padSize)}
                              itemCount={hasNextPage ? data.length + (boundsWidth ? itemCount : 1) : data.length}
                              itemSize={boundsWidth
                                ? rowHeight
                                : _rowHeight}
                              onItemsRendered={onItemsRendered}
                            >
                              {({ index, style }: any) => {
                                return (
                                  <CTableBodyTr
                                    key={index}
                                    data={data[index]}
                                    index={index}
                                    style={style}
                                    width={contentRect.bounds.width}
                                    loading={!_isItemLoaded(index)}
                                    columns={columns}/>
                                )
                              }}
                            </FixedSizeList>
                          )
                        }
                      </InfiniteLoader>
                    </CTableBody>
                  </Table>)
              }}
            </AutoSizer>
          </Container>
        )
      }}
    </Measure>)
}

export default InfiniteTable
