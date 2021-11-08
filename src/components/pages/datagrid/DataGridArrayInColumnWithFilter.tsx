import * as React from 'react'
import {Link} from 'react-router-dom'
import {DataGrid, GridCellValue, GridColDef, GridFilterModel, GridValueFormatterParams} from '@mui/x-data-grid'
import {differenceInSeconds, format} from 'date-fns'
import ja from 'date-fns/locale/ja'
import {
  isAfterOperator,
  isBeforeOperator,
  isEmptyOperator,
  isNotEmptyOperator,
  isNotOperator,
  isOnOrAfterOperator,
  isOnOrBeforeOperator,
  isOperator
} from '@/components/functions/datagrid/operators'

const lastDay = (days: (null | string)[]): string | null => {
  return days.slice(-1)[0]
}

const formatDays = (params: GridValueFormatterParams) => {
  if (!Array.isArray(params.value)) {
    return null
  }

  const formattedDays = params.value
    .filter((v) => v)
    .map((v) => {
      if (v === null) {
        return null
      }
      return format(v, 'yyyy/MM/dd(eee)', {locale: ja})
    })

  switch (formattedDays.length) {
    case 0:
      return ''
    case 1:
      return formattedDays[0]
    case 2:
      return `${formattedDays[0]} & ${formattedDays[1]}`
    default:
      return `${formattedDays[0]} ~ ${lastDay(formattedDays)}`
  }
}

const compareDays = (v1: GridCellValue, v2: GridCellValue) => {
  if (!Array.isArray(v1)) {
    return 1
  }
  if (!Array.isArray(v2)) {
    return -1
  }

  if (!(v1[0] instanceof Date)) {
    return 1
  }
  if (!(v2[0] instanceof Date)) {
    return -1
  }
  return differenceInSeconds(v1[0], v2[0])
}

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90, type: 'number'},
  {field: 'name', headerName: '名前', width: 150, type: 'string'},
  {
    field: 'purchaseDate',
    headerName: '購入日(date型)',
    width: 400,
    type: 'date',
    valueFormatter: formatDays,
    sortComparator: compareDays,
    filterOperators: [
      isOperator,
      isNotOperator,
      isAfterOperator,
      isOnOrAfterOperator,
      isBeforeOperator,
      isOnOrBeforeOperator,
      isEmptyOperator,
      isNotEmptyOperator
    ]
  }
]

const rows = [
  {
    id: 1,
    name: 'シナノドルチェ',
    purchaseDate: [new Date(2021, 8, 20)]
  },
  {
    id: 2,
    name: '秋映',
    purchaseDate: [new Date(2021, 9, 20), new Date(2021, 10, 10)]
  },
  {
    id: 3,
    name: 'シナノゴールド',
    purchaseDate: [new Date(2021, 9, 15), new Date(2021, 10, 10), new Date(2021, 10, 20)]
  },
  {
    id: 4,
    name: 'ふじ',
    purchaseDate: [null]
  }
]

const Component = (): JSX.Element => {
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: []
  })

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div style={{height: 400, width: '100%'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          filterModel={filterModel}
          onFilterModelChange={(model) => setFilterModel(model)}
        />
      </div>
    </>
  )
}
export default Component
