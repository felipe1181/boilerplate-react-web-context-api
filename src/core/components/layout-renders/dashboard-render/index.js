import React from 'react'
import PropTypes from 'prop-types'

function DashboardRender ({ children }) {
  console.log('dash render', children)
  return (
    <div>
      <span>dashboard layout</span>
      {children}
    </div>
  )
}
DashboardRender.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default DashboardRender
