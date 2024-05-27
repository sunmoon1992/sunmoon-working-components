import InfiniteTable from "./index";
import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";

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

  const columns = [
    {
      name: 'firstName',
      index: 'firstName',
      width: '120px',
    },
    {
      name: 'lastName',
      index: 'lastName',
      // width: '200px',
      render: (v: any) => <b style={{ color: 'red' }}>{v}</b>
    },
    {
      name: 'fullName',
      index: 'fullName',
      // width: '200px',
      render: (v: any) => <b style={{ color: 'red' }}>{v}</b>
    },
    {
      name: 'address',
      index: 'address',
      // width: '200px',
      render: (v: any) => <b style={{ color: 'cyan' }}>{v.substr(0, 20)}......</b>
    },
  ]

  const loadMoreItems = useCallback(() => {
    setTableState(state => ({ ...state, isNextPageLoading: true }))

    setTimeout(() => {
      setTableState(state => ({
        hasNextPage: true,
        // hasNextPage: state.items.length < 100,
        isNextPageLoading: false,
        items: [...state.items].concat(
          new Array(10).fill(true).map(() => ({
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            fullName: faker.person.fullName(),
            address: faker.finance.ethereumAddress()
          }))
        )
      }));
    }, 2000);
  }, [])

  return (
    <div style={{ width: '400px' }}>
      <InfiniteTable
        columns={columns}
        itemCount={10}
        gridTemplateColumns={['auto', '1fr', '1fr', '1fr']}
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
