import {Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>Top Page</h1>
      <Link to="/parameter-breadcrumbs/root" component={RouterLink as any}>
        To Root Index
      </Link>
    </>
  )
}
export default Component
