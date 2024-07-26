import { noop } from "lodash";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import Measure from 'react-measure'

import { InfiniteWrapperProps } from "./interface";
import { Container, Table } from "./styled";
import CTableBody from "./TableBody";

const InfiniteWrapper = (
  {
    data,
    itemCount = 10,
    rowHeight = 76,
    customItem,
    tableHeight = '100%',
    hasNextPage,
    isNextPageLoading,
    loadNextPage,
  }: InfiniteWrapperProps) => {

  const _isItemLoaded = (index: number) => !hasNextPage || index < data.length

  const _loadMoreItems = isNextPageLoading ? noop : loadNextPage;

  return (
    <Measure bounds>
      {({ measureRef, contentRect }: any) => {
        return (
          <Container className='infinite-wrapper' ref={measureRef} $tableHeight={tableHeight}>
            <AutoSizer disableWidth>
              {({ height }: { height: number }) => {
                return (
                  <Table className="infinite-table">
                    <CTableBody data={data} loading={isNextPageLoading}>
                      <InfiniteLoader
                        isItemLoaded={_isItemLoaded}
                        itemCount={hasNextPage ? data.length + itemCount : data.length}
                        loadMoreItems={_loadMoreItems}>
                        {
                          ({ onItemsRendered, ref }: any) => (
                            <FixedSizeList
                              ref={ref}
                              height={height}
                              itemSize={rowHeight}
                              itemCount={hasNextPage ? data.length + itemCount : data.length}
                              onItemsRendered={onItemsRendered}
                            >
                              {({ index, style }: any) => {
                                return (
                                  <>
                                    {customItem({
                                      index,
                                      data: data[index],
                                      style,
                                      width: contentRect.bounds.width,
                                      loading: !_isItemLoaded(index)
                                    })}
                                  </>
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

export default InfiniteWrapper
