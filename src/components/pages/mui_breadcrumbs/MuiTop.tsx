import {Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>Top Page</h1>
      <Link to="/mui-breadcrumbs/1st" component={RouterLink as any}>
        To 1st Layer
      </Link>
    </>
  )
}
export default Component
