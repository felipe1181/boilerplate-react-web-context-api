import RouteIsAuth from 'core/routes/routeIsAuth'
import { PageExample } from './pages'

const routes = [
  {
    path: '/example',
    exact: true,
    routeComponent: RouteIsAuth,
    name: 'Example',
    component: PageExample
  }
]
export default routes
