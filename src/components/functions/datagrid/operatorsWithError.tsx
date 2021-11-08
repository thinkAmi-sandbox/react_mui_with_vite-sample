import {GridFilterInputValueProps, GridFilterItem} from '@mui/x-data-grid'
import {DatePicker, LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {TextField, TextFieldProps} from '@mui/material'
import isSameDay from 'date-fns/isSameDay'
import * as React from 'react'
import ja from 'date-fns/locale/ja'

const isValidDate = (d: any) => {
  return d instanceof Date && !isNaN(d.getTime())
}

const DateInputValue = (props: GridFilterInputValueProps) => {
  const {item, applyValue} = props

  const handleFilterChange = (event: any) => {
    // フィルタの入力値には時間が含まれるが、比較するときには時間が不要なため、削除しておく
    // すべて消すと event に null が入ってくる
    const value =
      event == null ? null : isValidDate(event) ? new Date(event.getFullYear(), event.getMonth(), event.getDate()) : ''
    applyValue({...item, value: value})
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
      <DatePicker
        label="value"
        inputFormat="yyyy/MM/dd"
        mask="____/__/__"
        value={item.value}
        onChange={handleFilterChange}
        renderInput={(params: TextFieldProps) => {
          params.variant = 'standard'
          // inputPropsを変える方法
          // https://github.com/mui-org/material-ui/issues/27590
          return <TextField {...params} />
        }}
      />
    </LocalizationProvider>
  )
}

export const isOperator = {
  label: 'Is',
  value: 'is',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: any): boolean => {
      return params.value.filter((v: any) => isSameDay(v, filterItem.value)).length > 0
    }
  },
  InputComponent: DateInputValue,
  InputComponentProps: {type: 'date'}
}
