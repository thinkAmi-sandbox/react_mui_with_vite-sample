import {Link, Route} from 'react-router-dom'
import DataGridArrayInColumnWithSortComparator from '@/components/pages/datagrid/DataGridArrayInColumnWithSortComparator'
import * as React from 'react'

const Component = (): JSX.Element => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <div>
          DataGrid
          <ul>
            <li>
              <Link to="/datagrid/basic">Basic</Link>
            </li>
            <li>
              <Link to="/datagrid/column-types">ColumnTypes</Link>
            </li>
            <li>
              <Link to="/datagrid/array-in-column">Array in Column</Link>
            </li>
            <li>
              <Link to="/datagrid/array-in-column-with-value-formatter">Array in Column With Value Formatter</Link>
            </li>
            <li>
              <Link to="/datagrid/array-in-column-with-sort-comparator">Array in Column With Sort Comparator</Link>
            </li>
            <li>
              <Link to="/datagrid/array-in-column-with-filter-error">Array in Column With Filter Error</Link>
            </li>
            <li>
              <Link to="/datagrid/array-in-column-with-filter">Array in Column With Filter</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Component
