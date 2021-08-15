import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { session } from 'core/storage'

function RouteAuth ({ location, ...props }) {
  const { getSession } = session
  const token = getSession()?.token

  if (token) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />
  }

  return <Route {...{ ...props, location }} />
}

RouteAuth.propTypes = {
  location: PropTypes.object,
  props: PropTypes.object
}
export default RouteAuth
