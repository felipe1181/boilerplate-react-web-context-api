import React from 'react'
import PropTypes from 'prop-types'

function BaseCleanRender ({ children }) {
  return (
    <div>
      <span>base clean layout</span>
      {children}
    </div>
  )
}
BaseCleanRender.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default BaseCleanRender
