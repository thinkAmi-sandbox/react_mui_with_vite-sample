import {Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>Root Index</h1>
      <ul>
        <li>
          <Link to="/parameter-breadcrumbs/root/1" component={RouterLink as any}>
            To Root Dynamic
          </Link>
        </li>
      </ul>
    </>
  )
}
export default Component
