import * as React from 'react'
import {Route, Routes} from 'react-router-dom'
import DataGridBasic from '@/components/pages/datagrid/DataGridBasic'
import Home from '@/components/pages/Home'
import DataGridColumnTypes from '@/components/pages/datagrid/DataGridColumnTypes'
import DataGridArrayInColumn from '@/components/pages/datagrid/DataGridArrayInColumn'
import DataGridArrayInColumnWithValueFormatter from '@/components/pages/datagrid/DataGridArrayInColumnWithValueFormatter'
import DataGridArrayInColumnWithSortComparator from '@/components/pages/datagrid/DataGridArrayInColumnWithSortComparator'
import DataGridArrayInColumnWithFilterError from '@/components/pages/datagrid/DataGridArrayInColumnWithFilterError'
import DataGridArrayInColumnWithFilter from '@/components/pages/datagrid/DataGridArrayInColumnWithFilter'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="datagrid">
          <Route path="basic" element={<DataGridBasic />} />
          <Route path="column-types" element={<DataGridColumnTypes />} />
          <Route path="array-in-column" element={<DataGridArrayInColumn />} />
          <Route path="array-in-column-with-value-formatter" element={<DataGridArrayInColumnWithValueFormatter />} />
          <Route path="array-in-column-with-sort-comparator" element={<DataGridArrayInColumnWithSortComparator />} />
          <Route path="array-in-column-with-filter-error" element={<DataGridArrayInColumnWithFilterError />} />
          <Route path="array-in-column-with-filter" element={<DataGridArrayInColumnWithFilter />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
