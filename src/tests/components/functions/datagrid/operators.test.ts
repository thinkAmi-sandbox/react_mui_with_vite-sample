import {mock} from 'jest-mock-extended'
import {GridCellParams, GridFilterItem} from '@mui/x-data-grid'
import {isOperator} from '@/components/functions/datagrid/operators'

describe('is operator test', () => {
  const cellParams = mock<GridCellParams>()
  cellParams.value = [new Date(2021, 10, 27), new Date(2021, 11, 28), new Date(2021, 11, 29)]

  describe('フィルタの値がセルの値と一致する場合', () => {
    const filterItem = mock<GridFilterItem>()
    filterItem.columnField = 'a'
    filterItem.value = '2021-11-27'
    filterItem.operatorValue = 'is'

    it('trueを返す', () => {
      const fn = isOperator.getApplyFilterFn(filterItem)

      // nullの可能性があるため、
      //   ・nullではないことを確認
      //   ・オプショナルチェーン (?.) で関数を実行
      // とする
      expect(fn).not.toBeNull()

      const actual = fn?.(cellParams)
      expect(actual).toBe(true)
    })
  })

  describe('フィルタの値がセルの値と一致しない場合', () => {
    const filterItem = mock<GridFilterItem>()
    filterItem.columnField = 'a'
    filterItem.value = '2021-11-30'
    filterItem.operatorValue = 'is'

    it('falseを返す', () => {
      const fn = isOperator.getApplyFilterFn(filterItem)
      expect(fn).not.toBeNull()

      const actual = fn?.(cellParams)
      expect(actual).toBe(false)
    })
  })

  // NG
  // describe('', () => {
  //   it('jestだけ', () => {
  //     const n = jest.spyOn(GridCellParams, 'value').mockReturnValue('')
  //
  //     const m = jest.fn<GridCellParams, []>().mockImplementation(() => {
  //       return {
  //         value: [new Date(2021, 10, 27)]
  //       }
  //     })
  //   })
  // })
})
