import {Link} from 'react-router-dom'
import MyBread from '@/components/pages/router_breadcrumbs/MyBread'

const Component = (): JSX.Element => {
  return (
    <>
      <MyBread />
      <h1>First Layer</h1>
      <Link to="/router-breadcrumbs/1st/2nd">To 2nd Layer</Link>
    </>
  )
}
export default Component
