import routes from 'core/routes'
import RenderRoutes from 'core/routes/renderRoutes'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>{RenderRoutes(routes)}</BrowserRouter>
    </>
  )
}

export default App
