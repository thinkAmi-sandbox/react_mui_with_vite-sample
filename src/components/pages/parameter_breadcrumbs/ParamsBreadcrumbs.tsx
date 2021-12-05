import {Link as RouterLink, matchPath, useLocation, useMatch} from 'react-router-dom'
import {Breadcrumbs, Link, LinkProps} from '@mui/material'

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

const staticRouteNameMap: {[key: string]: string} = {
  '/parameter-breadcrumbs': 'parameter-breadcrumbs Home',
  '/parameter-breadcrumbs/root': 'Root Index',
  '/parameter-breadcrumbs/root/:rootId': 'これにはマッチしない'
}

const getBreadcrumbsName = (to: string) => {
  const staticRouteName = staticRouteNameMap[to]
  if (staticRouteName) {
    return staticRouteName
  }

  // matchPath で比較する
  // https://reactrouter.com/docs/en/v6/api#matchpath
  if (matchPath('/parameter-breadcrumbs/root/:rootId', to)) {
    return 'Root Dynamic'
  }

  if (matchPath('/parameter-breadcrumbs/root/:rootId/child', to)) {
    return 'Child Index'
  }

  if (matchPath('/parameter-breadcrumbs/root/:rootId/child/:childId', to)) {
    return 'Child Dynamic'
  }

  // useMatch を使うと location と比較してしまうので、正しいパンくずができない
  // https://reactrouter.com/docs/en/v6/api#usematch
  // if (useMatch('/parameter-breadcrumbs/root/:rootId')) {
  //   return 'Root Dynamic'
  // }
  //
  // if (useMatch('/parameter-breadcrumbs/root/:rootId/child')) {
  //   return 'Child Index'
  // }
  //
  // if (useMatch('/parameter-breadcrumbs/root/:rootId/child/:childId')) {
  //   return 'Child Dynamic'
  // }

  return ''
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />

const Component = (): JSX.Element => {
  // locationは React Router v6 の useLocation API で取得
  const location = useLocation()

  const pathNames = location.pathname.split('/').filter((x) => x)

  return (
    <Breadcrumbs>
      <LinkRouter underline="hover" color="primary" to="/">
        Home
      </LinkRouter>
      {pathNames.map((value, index) => {
        const last = index === pathNames.length - 1
        const to = `/${pathNames.slice(0, index + 1).join('/')}`

        // リンクの色を分かりやすくするため、サンプルとは color を変更
        return last ? (
          <div key={to}>{getBreadcrumbsName(to)}</div>
        ) : (
          <LinkRouter underline="hover" color="primary" to={to} key={to}>
            {getBreadcrumbsName(to)}
          </LinkRouter>
        )
      })}
    </Breadcrumbs>
  )
}
export default Component
