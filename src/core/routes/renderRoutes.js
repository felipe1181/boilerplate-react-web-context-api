import { generateUniqKey, validateArray } from 'core/utils'
import React, { useCallback, useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'

export default function RenderRoutes (
  routes,
  extraProps = {},
  switchProps = {}
) {
  const renderRoute = useCallback(
    ({ route, componentProps }) => {
      if (route?.render) {
        return route.render({ ...componentProps, ...extraProps, route: route })
      }
      return (
        <route.component
          {...componentProps}
          {...extraProps}
          route={route}
          title={route.name}
        />
      )
    },
    [extraProps]
  )

  /* fazer layout render

  - importar array de layout renders registrados
  - fazer map nos layouts
  - dentro do map fazer um filter nas rotas correspondentes

  */
  return useMemo(() => {
    if (validateArray(routes).length) {
      return (
        <Switch {...switchProps}>
          {routes.map((route) => {
            const RouteComponent = route?.routeComponent || Route
            return (
              <RouteComponent
                key={generateUniqKey()}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                renderLayout={route?.renderLayout}
                name={route?.name}
                render={(props) =>
                  renderRoute({ route, componentProps: props })}
              />
            )
          })}
        </Switch>
      )
    }
    return null
  }, [routes, switchProps, renderRoute])
}
