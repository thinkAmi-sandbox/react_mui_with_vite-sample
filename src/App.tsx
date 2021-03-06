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
import FirstLayer from '@/components/pages/router_breadcrumbs/FirstLayer'
import SecondLayer from '@/components/pages/router_breadcrumbs/SecondLayer'
import ThirdLayer from '@/components/pages/router_breadcrumbs/ThirdLayer'
import MuiLayout from '@/components/pages/mui_breadcrumbs/MuiLayout'
import MuiFirstLayer from '@/components/pages/mui_breadcrumbs/MuiFirstLayer'
import MuiThirdLayer from '@/components/pages/mui_breadcrumbs/MuiThirdLayer'
import MuiSecondLayer from '@/components/pages/mui_breadcrumbs/MuiSecondLayer'
import MuiTop from '@/components/pages/mui_breadcrumbs/MuiTop'
import ParamsLayout from '@/components/pages/parameter_breadcrumbs/ParamsLayout'
import ParamsTop from '@/components/pages/parameter_breadcrumbs/ParamsTop'
import ParamsRootIndex from '@/components/pages/parameter_breadcrumbs/ParamsRootIndex'
import ParamsRootDynamic from '@/components/pages/parameter_breadcrumbs/ParamsRootDynamic'
import ParamsChildIndex from '@/components/pages/parameter_breadcrumbs/ParamsChildIndex'
import ParamsChildDynamic from '@/components/pages/parameter_breadcrumbs/ParamsChildDynamic'
import DataGridArrayInColumnWithLocale from '@/components/pages/datagrid/DataGridArrayInColumnWithLocale'
import DateTimePickerWithReactHookForm from '@/components/pages/datetime_picker_with_react_hook_form/DateTimePickerWithReactHookForm'
import MuiModal from '@/components/pages/datetime_picker_with_react_hook_form/MuiModal'
import MuiModalWithStyle from '@/components/pages/datetime_picker_with_react_hook_form/MuiModalWithStyle'
import MuiModalWithReactHookForm from '@/components/pages/datetime_picker_with_react_hook_form/MuiModalWithReactHookForm'
import LocalizationProviderInside from '@/components/pages/datetime_picker_with_react_hook_form/LocalizationProviderInside'
import LocalizationProviderOutside from '@/components/pages/datetime_picker_with_react_hook_form/LocalizationProviderOutside'
import LocalizationProviderOutsideWithLocale from '@/components/pages/datetime_picker_with_react_hook_form/LocalizationProviderOutsideWithLocale'
import LocalizationProviderOutsideWithLocaleMaskInputFormat from '@/components/pages/datetime_picker_with_react_hook_form/LocalizationProviderOutsideWithLocaleMaskInputFormat'
import LocalizationProviderOutsideWithLocaleMask from '@/components/pages/datetime_picker_with_react_hook_form/LocalizationProviderOutsideWithLocaleMask'

function App() {
  return (
    <div className="App">
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
          <Route path="array-in-column-with-locale" element={<DataGridArrayInColumnWithLocale />} />
        </Route>

        <Route path="router-breadcrumbs">
          <Route path="1st">
            <Route path="" element={<FirstLayer />} />
            <Route path="2nd">
              <Route path="" element={<SecondLayer />} />
              <Route path="3rd">
                <Route path="" element={<ThirdLayer />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="mui-breadcrumbs" element={<MuiLayout />}>
          <Route index element={<MuiTop />} />
          <Route path="1st">
            <Route index element={<MuiFirstLayer />} />
            <Route path="2nd">
              <Route index element={<MuiSecondLayer />} />
              <Route path="3rd">
                <Route index element={<MuiThirdLayer />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="parameter-breadcrumbs" element={<ParamsLayout />}>
          <Route index element={<ParamsTop />} />
          <Route path="root">
            <Route index element={<ParamsRootIndex />} />
            <Route path=":rootId">
              <Route index element={<ParamsRootDynamic />} />
              <Route path="child">
                <Route index element={<ParamsChildIndex />} />
                <Route path=":childId" element={<ParamsChildDynamic />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="datetime-picker-with-react-hook-form">
          <Route index element={<DateTimePickerWithReactHookForm />} />
          <Route path="modal" element={<MuiModal />} />
          <Route path="modal-with-style" element={<MuiModalWithStyle />} />
          <Route path="modal-with-react-hook-form" element={<MuiModalWithReactHookForm />} />
          <Route path="inside" element={<LocalizationProviderInside />} />
          <Route path="outside" element={<LocalizationProviderOutside />} />
          <Route path="localization" element={<LocalizationProviderOutsideWithLocale />} />
          <Route path="localization-with-mask" element={<LocalizationProviderOutsideWithLocaleMask />} />
          <Route
            path="localization-with-mask-format"
            element={<LocalizationProviderOutsideWithLocaleMaskInputFormat />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
