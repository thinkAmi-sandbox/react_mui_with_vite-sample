import {Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>First Layer</h1>
      <Link to="/mui-breadcrumbs/1st/2nd" component={RouterLink as any}>
        To 2nd Layer
      </Link>
    </>
  )
}
export default Component
