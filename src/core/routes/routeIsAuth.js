import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { session } from 'core/storage'

export default function RouteIsAuth ({ location, ...props }) {
  const { getSession } = session

  console.log('location, ...props', location, props)
  const token = getSession()?.token
  if (token) {
    return <Redirect to={{ pathname: '/dashboard', state: { from: location } }} />
  }

  return <Route {...{ ...props, location }} />
}
RouteIsAuth.propTypes = {
  location: PropTypes.object,
  props: PropTypes.object
}
