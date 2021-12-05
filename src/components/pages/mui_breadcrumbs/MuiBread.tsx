import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {Link as RouterLink, NavLink, useLocation} from 'react-router-dom'
import {Breadcrumbs, Link, LinkProps} from '@mui/material'

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

// パンくずリストに表示する文言を公式サンプルと変更
const breadcrumbNameMap: {[key: string]: string} = {
  '/mui-breadcrumbs': 'mui-breadcrumbs ホーム',
  '/mui-breadcrumbs/1st': '第1階層',
  '/mui-breadcrumbs/1st/2nd': '第2階層',
  '/mui-breadcrumbs/1st/2nd/3rd': '第3階層'
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />

const Component = (): JSX.Element => {
  // locationは React Router v6 の useLocation API で取得
  const location = useLocation()

  const pathNames = location.pathname.split('/').filter((x) => x)

  return (
    <Breadcrumbs>
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathNames.map((value, index) => {
        const last = index === pathNames.length - 1
        const to = `/${pathNames.slice(0, index + 1).join('/')}`

        // リンクの色を分かりやすくするため、サンプルとは color を変更
        return last ? (
          <div key={to}>{breadcrumbNameMap[to]}</div>
        ) : (
          <LinkRouter underline="hover" color="primary" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        )
      })}
    </Breadcrumbs>
  )
}
export default Component
