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
