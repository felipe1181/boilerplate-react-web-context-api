import RouteIsAuth from 'core/routes/routeIsAuth'
import { PageExample } from './pages'

const routes = [
  {
    path: '/',
    exact: true,
    routeComponent: RouteIsAuth,
    name: 'Home',
    component: PageExample
  }
]
export default routes
