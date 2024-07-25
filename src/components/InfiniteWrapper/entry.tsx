import InfiniteTable from "./index";
import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import Logo from "../Logo/Logo";

interface TableState {
  items: any[]
  hasNextPage: boolean
  isNextPageLoading: boolean
}

const initTableState: TableState = {
  items: [],
  hasNextPage: true,
  isNextPageLoading: false,
}

const Entry = () => {
  const [tableState, setTableState] = useState<TableState>(initTableState)

  const loadMoreItems = useCallback(() => {
    setTableState(state => ({ ...state, isNextPageLoading: true }))

    setTimeout(() => {
      setTableState(state => ({
        hasNextPage: true,
        // hasNextPage: state.items.length < 100,
        isNextPageLoading: false,
        items: [...state.items].concat(
          new Array(10).fill(true).map(() => ({
            icon: faker.image.urlLoremFlickr({ width: 32, height: 32 }),
            symbol: faker.person.firstName(),
            amount: faker.number.float({ min: 0, max: 100, fractionDigits: 3 })
          }))
        )
      }));
    }, 2000);
  }, [])

  return (
    <div style={{ width: 'calc(100vw - 32px)' }}>
      <InfiniteTable
        itemCount={10}
        customItem={(v) => {
          console.info(v)
          return <>
            <Logo radius={'10px'} size={40} src={v?.data?.icon}/>
            {v?.data?.symbol} && {v?.data?.amount}
          </>
        }}
        hasNextPage={tableState.hasNextPage}
        isNextPageLoading={tableState.isNextPageLoading}
        loadNextPage={loadMoreItems}
        data={tableState.items}
        tableHeight={'calc(100vh - 100px)'}
      />
    </div>
  )
}

export default Entry
