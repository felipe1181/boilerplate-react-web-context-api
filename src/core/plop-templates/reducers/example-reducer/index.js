import Types from './types'
import actions from './actions'

const INITIAL_STATE = {
  title_example_initial_state: '',
  description_example_initial_state: ''
}

export const makeActions = {
  setExample: (examplePayload) => ({
    type: Types.SET_EXAMPLE,
    payload: examplePayload
  })
}

function userReducer (state, action) {
  if (typeof actions[Types.SET_EXAMPLE] === 'function') {
    return actions[Types.SET_EXAMPLE](state, action)
  }

  return state
}

export default {
  reducer: userReducer,
  actions: makeActions,
  initialState: INITIAL_STATE,
  Types
}
