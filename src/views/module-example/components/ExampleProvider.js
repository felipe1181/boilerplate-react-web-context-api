import React, { useReducer, useMemo } from 'react'
import { bindActionCreators } from 'core/utils'
import { exampleContext } from '../contexts'
import { exampleReducer } from '../reducers'
const { initialState, reducer, actions } = exampleReducer
function ExampleProvider ({ ...props }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const binderActionCreators = useMemo(
    () => bindActionCreators(dispatch, actions),
    []
  )

  const value = useMemo(
    () => ({
      ...state,
      ...binderActionCreators
    }),
    [state, binderActionCreators]
  )

  return <exampleContext.Provider {...props} value={value} />
}
export default ExampleProvider
