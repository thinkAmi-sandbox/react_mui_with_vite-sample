import {Link} from 'react-router-dom'
import {DataGrid, GridCellValue, GridColDef, GridValueFormatterParams} from '@mui/x-data-grid'
import {differenceInSeconds, format} from 'date-fns'
import ja from 'date-fns/locale/ja'

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

const compareReturnPlus = (v1: GridCellValue, v2: GridCellValue) => {
  console.log('=============>')
  console.log(v1)
  console.log(v2)
  console.log('<=============')
  return 1
}

const compareReturnMinus = (v1: GridCellValue, v2: GridCellValue) => {
  console.log('=============>')
  console.log(v1)
  console.log(v2)
  console.log('<=============')
  return -1
}

const compareReturnZero = (v1: GridCellValue, v2: GridCellValue) => {
  console.log('=============>')
  console.log(v1)
  console.log(v2)
  console.log('<=============')
  return 0
}

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90, type: 'number'},
  {field: 'name', headerName: '名前', width: 150, type: 'string'},
  {
    field: 'purchaseDate',
    headerName: '購入日(date型)',
    width: 300,
    type: 'date',
    valueFormatter: formatDays,
    sortComparator: compareDays
  },
  {field: 'plus', headerName: 'Plus', width: 90, type: 'number', sortComparator: compareReturnPlus},
  {field: 'minus', headerName: 'Minus', width: 90, type: 'number', sortComparator: compareReturnMinus},
  {field: 'zero', headerName: 'Zero', width: 90, type: 'number', sortComparator: compareReturnZero}
]

const rows = [
  {
    id: 1,
    name: 'シナノドルチェ',
    purchaseDate: [new Date(2021, 8, 20)],
    plus: 1,
    minus: 1,
    zero: 1
  },
  {
    id: 2,
    name: '秋映',
    purchaseDate: [new Date(2021, 9, 20), new Date(2021, 10, 10)],
    plus: 2,
    minus: 2,
    zero: 2
  },
  {
    id: 3,
    name: 'シナノゴールド',
    purchaseDate: [new Date(2021, 9, 15), new Date(2021, 10, 10), new Date(2021, 10, 20)],
    plus: 3,
    minus: 3,
    zero: 3
  },
  {
    id: 4,
    name: 'ふじ',
    purchaseDate: [null],
    plus: 4,
    minus: 4,
    zero: 4
  }
]

const Component = (): JSX.Element => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div style={{height: 400, width: '100%'}}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  )
}
export default Component
