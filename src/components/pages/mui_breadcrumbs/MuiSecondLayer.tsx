import {Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>Second Layer</h1>
      <Link to="/mui-breadcrumbs/1st/2nd/3rd" component={RouterLink as any}>
        To 3rd Layer
      </Link>
    </>
  )
}
export default Component
