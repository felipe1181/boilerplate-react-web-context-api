import React from 'react'
import PropTypes from 'prop-types'

function BaseRender ({ children, ...props }) {
  console.log('props', props)
  return (
    <div>
      <span>base layout</span>
      {children}
    </div>
  )
}
BaseRender.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default BaseRender
