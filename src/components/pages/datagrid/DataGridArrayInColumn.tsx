import {Link} from 'react-router-dom'
import {DataGrid, GridColDef} from '@mui/x-data-grid'

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90, type: 'number'},
  {field: 'name', headerName: '名前', width: 150, type: 'string'},
  {field: 'purchaseDate1', headerName: '購入日(date型)', width: 900, type: 'date'},
  {field: 'purchaseDate2', headerName: '購入日(dateTime型)', width: 900, type: 'dateTime'},
  {field: 'purchaseDate3', headerName: '購入日(string型)', width: 900, type: 'string'}
]

const rows = [
  {
    id: 1,
    name: 'シナノドルチェ',
    purchaseDate1: [new Date(2021, 8, 20)],
    purchaseDate2: [new Date(2021, 8, 20)],
    purchaseDate3: [new Date(2021, 8, 20)]
  },
  {
    id: 2,
    name: '秋映',
    purchaseDate1: [new Date(2021, 9, 15), new Date(2021, 10, 10)],
    purchaseDate2: [new Date(2021, 9, 15), new Date(2021, 10, 10)],
    purchaseDate3: [new Date(2021, 9, 15), new Date(2021, 10, 10)]
  },
  {
    id: 3,
    name: 'シナノゴールド',
    purchaseDate1: [new Date(2021, 10, 1), new Date(2021, 10, 10), new Date(2021, 10, 20)],
    purchaseDate2: [new Date(2021, 10, 1), new Date(2021, 10, 10), new Date(2021, 10, 20)],
    purchaseDate3: [new Date(2021, 10, 1), new Date(2021, 10, 10), new Date(2021, 10, 20)]
  },
  {
    id: 4,
    name: 'ふじ',
    purchaseDate1: [null],
    purchaseDate2: [null],
    purchaseDate3: [null]
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
