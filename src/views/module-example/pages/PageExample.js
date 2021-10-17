import React from 'react'
import { logo } from 'assets'
import { ExampleComponentText } from 'core/components'

function PageExample () {
  return (
    <div>
      <img src={logo} />
      <ExampleComponentText>Essa é uma página de exemplo</ExampleComponentText>
      <ExampleComponentText component='p'>
        Uma pagina de exemplo
      </ExampleComponentText>
    </div>
  )
}

export default PageExample
