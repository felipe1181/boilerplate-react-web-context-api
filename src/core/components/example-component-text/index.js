import React from 'react'
import PropTypes from 'prop-types'
function ExampleComponentText ({
  children,
  component: Component = 'span',
  ...props
}) {
  return <Component {...props}>{children}</Component>
}

ExampleComponentText.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string
}
export default ExampleComponentText
