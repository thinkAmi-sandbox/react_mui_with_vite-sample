import {GridCellParams, GridFilterInputValue, GridFilterItem} from '@mui/x-data-grid'
import isSameDay from 'date-fns/isSameDay'
import * as React from 'react'
import {isAfter, isBefore, max, min} from 'date-fns'

const toFilterValue = (filterItem: GridFilterItem) => {
  // 日付は '-' 区切りの文字列で渡されてくるので、フィルタで使えるように整形
  const values = filterItem.value.split('-')
  return new Date(values[0], values[1] - 1, values[2])
}

export const isOperator = {
  label: 'is',
  value: 'is',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }

      return params.value.filter((v) => isSameDay(v, toFilterValue(filterItem))).length > 0
    }
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {type: 'date'}
}

export const isNotOperator = {
  label: 'is not',
  value: 'isNot',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }
      return params.value.filter((v) => isSameDay(v, toFilterValue(filterItem))).length === 0
    }
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {type: 'date'}
}

export const isAfterOperator = {
  label: 'is after',
  value: 'isAfter',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }
      return isAfter(max(params.value), toFilterValue(filterItem))
    }
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {type: 'date'}
}

export const isOnOrAfterOperator = {
  label: 'is on or after',
  value: 'isOnOrAfter',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }

      const filterValue = toFilterValue(filterItem)

      return isAfter(max(params.value), filterValue) || params.value.filter((v) => isSameDay(v, filterValue)).length > 0
    }
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {type: 'date'}
}

export const isBeforeOperator = {
  label: 'is before',
  value: 'isBefore',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }
      return isBefore(min(params.value), toFilterValue(filterItem))
    }
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {type: 'date'}
}

export const isOnOrBeforeOperator = {
  label: 'is on or before',
  value: 'isOnOrBefore',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }

      const filterValue = toFilterValue(filterItem)

      return (
        isBefore(min(params.value), filterValue) || params.value.filter((v) => isSameDay(v, filterValue)).length > 0
      )
    }
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {type: 'date'}
}

// getApplyFilterFnのif文に value がないこと、component系が存在しないことに注意
export const isEmptyOperator = {
  label: 'is empty',
  value: 'isEmpty',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }
      return params.value.filter((v) => !v).length > 0
    }
  }
}

// getApplyFilterFnのif文に value がないこと、component系が存在しないことに注意
export const isNotEmptyOperator = {
  label: 'is not empty',
  value: 'isNotEmpty',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }
      return params.value.filter((v) => v).length > 0
    }
  }
}
