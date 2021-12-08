import {GridCellParams, GridFilterInputValue, GridFilterItem} from '@mui/x-data-grid'
import {isAfter, isBefore, isSameDay, max, min, parseISO} from 'date-fns'

const toFilterValue = (filterItem: GridFilterItem) => {
  // 日付は '-' 区切りの文字列で渡されてくるので、フィルタで使えるように整形
  return parseISO(filterItem.value)
}

export const isOperator = {
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

export const notOperator = {
  value: 'not',
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

export const afterOperator = {
  value: 'after',
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

export const onOrAfterOperator = {
  value: 'onOrAfter',
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

export const beforeOperator = {
  value: 'before',
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

export const onOrBeforeOperator = {
  value: 'onOrBefore',
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

export const isBlankOperator = {
  label: 'blank',
  value: 'isBlank',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (!filterItem.columnField || !filterItem.operatorValue) {
      return null
    }

    return (params: GridCellParams): boolean => {
      if (!params.value || !Array.isArray(params.value)) {
        return false
      }
      return params.value.filter((v) => v).length === 0
    }
  }
}
