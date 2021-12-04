import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { session } from 'core/storage'
import { BaseCleanRender, BaseRender } from 'core/components'
import LAYOUT_RENDER_TYPES from './layoutRenderTypes'

export default function RouteIsAuth ({
  location,
  render,
  renderLayout = '',
  ...props
}) {
  const { getSession } = session

  console.log('location, ...props', location, props)
  const token = getSession()?.token
  if (token) {
    return (
      <Redirect to={{ pathname: '/dashboard', state: { from: location } }} />
    )
  }
  const layoutRenderComponent = (renderProps) => {
    switch (renderLayout) {
      case LAYOUT_RENDER_TYPES.BASE:
        return <BaseRender {...renderProps}>{render(renderProps)}</BaseRender>
      case LAYOUT_RENDER_TYPES.BASE_CLEAN:
        return (
          <BaseCleanRender {...renderProps}>
            {render(renderProps)}
          </BaseCleanRender>
        )
      default:
        return <BaseRender {...renderProps}>{render(renderProps)}</BaseRender>
    }
  }

  return (
    <Route
      {...{
        ...props,
        render: layoutRenderComponent,
        location
      }}
    />
  )
}
RouteIsAuth.propTypes = {
  location: PropTypes.object,
  props: PropTypes.object,
  render: PropTypes.func,
  renderLayout: PropTypes.string
}
