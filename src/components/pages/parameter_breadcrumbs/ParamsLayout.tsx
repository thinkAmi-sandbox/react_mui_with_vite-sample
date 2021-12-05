import {Outlet} from 'react-router-dom'
import ParamsBreadcrumbs from '@/components/pages/parameter_breadcrumbs/ParamsBreadcrumbs'
import ParamsUseBreadcrumbs from '@/components/pages/parameter_breadcrumbs/ParamsUseBreadcrumbs'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>レイアウト</h1>
      <ul>
        <li>
          MUIのみ
          <ul>
            <li>
              <ParamsBreadcrumbs />
            </li>
          </ul>
        </li>
        <li>
          MUI + use-react-router-breadcrumbs
          <ul>
            <li>
              <ParamsUseBreadcrumbs />
            </li>
          </ul>
        </li>
      </ul>

      <Outlet />
    </>
  )
}
export default Component
