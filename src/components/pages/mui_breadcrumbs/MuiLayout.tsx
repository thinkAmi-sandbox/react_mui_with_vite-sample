import {Outlet} from 'react-router-dom'
import MuiBread from '@/components/pages/mui_breadcrumbs/MuiBread'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>レイアウト</h1>
      <MuiBread />
      <Outlet />
    </>
  )
}
export default Component
