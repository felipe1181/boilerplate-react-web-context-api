import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, ExampleComponentText } from 'core/components'

function NotFound ({ history }) {
  const sendHome = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <div>
      <ExampleComponentText>Página não encontrada</ExampleComponentText>
      <Button onClick={sendHome}>Voltar</Button>
    </div>
  )
}
NotFound.propTypes = {
  history: PropTypes.object.isRequired
}
export default NotFound
