import { NotFound } from 'core/components'
import autoImportRoutes from './autoImportRoutes'
const routes = [
  ...autoImportRoutes(),
  {
    path: '*',
    component: NotFound
  }
]
export default routes
