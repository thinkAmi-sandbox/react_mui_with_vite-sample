import {Link} from 'react-router-dom'
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
            <li>
              <Link to="/datagrid/array-in-column-with-locale">Array in Column With Locale</Link>
            </li>
          </ul>
        </div>

        <div>
          Breadcrumbs
          <ul>
            <li>
              <Link to="/router-breadcrumbs/1st">"use-react-router-breadcrumbs" version</Link>
            </li>
            <li>
              <Link to="/mui-breadcrumbs">"MUI Breadcrumbs" version</Link>
            </li>
            <li>
              <Link to="/parameter-breadcrumbs">"MUI Breadcrumbs" + "use-react-router-breadcrumbs" version</Link>
            </li>
          </ul>
        </div>

        <div>
          DateTime Picker with React Hook Form
          <ul>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/">
                DateTimePickerWithReactHookForm (Completed version)
              </Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/modal">MuiModal</Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/modal-with-style">MuiModalWithStyle</Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/modal-with-react-hook-form">
                MuiModalWithReactHookForm
              </Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/inside">LocalizationProviderInside</Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/outside">LocalizationProviderOutside</Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/localization">MuiModalWithReactHookForm</Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/modal-with-react-hook-form">
                LocalizationProviderOutsideWithLocale
              </Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/localization-with-mask">
                LocalizationProviderOutsideWithLocaleMask
              </Link>
            </li>
            <li>
              <Link to="/datetime-picker-with-react-hook-form/localization-with-mask-format">
                LocalizationProviderOutsideWithLocaleMaskInputFormat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Component
