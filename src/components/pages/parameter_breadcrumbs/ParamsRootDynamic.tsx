import {Link} from '@mui/material'
import {Link as RouterLink, useParams} from 'react-router-dom'

const Component = (): JSX.Element => {
  const params = useParams()

  return (
    <>
      <h1>Root Dynamic</h1>
      <h2>Parameter: {params.rootId}</h2>
      <Link to="/parameter-breadcrumbs/root/1/child" component={RouterLink as any}>
        To Child Index
      </Link>
    </>
  )
}
export default Component
