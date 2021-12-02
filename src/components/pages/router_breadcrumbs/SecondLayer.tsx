import {Link} from 'react-router-dom'
import MyBread from '@/components/pages/router_breadcrumbs/MyBread'

const Component = (): JSX.Element => {
  return (
    <>
      <MyBread />
      <h1>Second Layer</h1>
      <Link to="/router-breadcrumbs/1st/2nd/3rd">To 3rd Layer</Link>
    </>
  )
}
export default Component
