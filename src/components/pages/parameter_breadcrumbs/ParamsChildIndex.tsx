import {Link as RouterLink} from 'react-router-dom'
import {Link} from '@mui/material'

const Component = (): JSX.Element => {
  return (
    <>
      <h1>Child Index</h1>
      <Link to="/parameter-breadcrumbs/root/1/child/2" component={RouterLink as any}>
        To Child Dynamic
      </Link>
    </>
  )
}
export default Component
