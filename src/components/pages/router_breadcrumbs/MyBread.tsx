import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {NavLink} from 'react-router-dom'

const Component = (): JSX.Element => {
  const breadcrumbs = useBreadcrumbs()
  return (
    <>
      {breadcrumbs.map(({match, breadcrumb}, index) => (
        <span key={match.pathname}>
          {index > 0 && <> / </>}
          <NavLink to={match.pathname}> {breadcrumb}</NavLink>
        </span>
      ))}
    </>
  )
}
export default Component
