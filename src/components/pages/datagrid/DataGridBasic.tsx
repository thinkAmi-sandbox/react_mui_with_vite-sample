import {Link} from 'react-router-dom'
import {DataGrid, GridColDef} from '@mui/x-data-grid'

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90, type: 'number'},
  {field: 'name', headerName: '名前', width: 150, type: 'string'},
  {field: 'purchaseDate', headerName: '購入日', width: 300, type: 'date'}
]

const rows = [
  {
    id: 1,
    name: 'シナノドルチェ',
    purchaseDate: new Date(2021, 8, 20)
  },
  {
    id: 2,
    name: '秋映',
    purchaseDate: new Date(2021, 9, 15)
  },
  {
    id: 3,
    name: 'シナノゴールド',
    purchaseDate: new Date(2021, 10, 1)
  },
  {
    id: 4,
    name: 'ふじ',
    purchaseDate: null
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
