import { DashboardRender, BaseRender, BaseCleanRender } from 'core/components'
import LAYOUT_RENDER_TYPES from 'core/routes/layoutRenderTypes'
import RouteIsAuth from 'core/routes/routeIsAuth'
import routeAuth from 'core/routes/routeAuth'

const layoutRenders = [
  {
    path: '/base',
    name: LAYOUT_RENDER_TYPES.BASE,
    exact: true,
    routeComponent: RouteIsAuth,
    component: BaseRender
  },
  {
    path: '/dashboard',
    name: LAYOUT_RENDER_TYPES.DASHBOARD,
    exact: true,
    routeComponent: routeAuth,
    component: DashboardRender
  },
  {
    path: '/base-clean',
    name: LAYOUT_RENDER_TYPES.BASE_CLEAN,
    exact: true,
    routeComponent: routeAuth,
    component: BaseCleanRender
  }
]

export default layoutRenders
