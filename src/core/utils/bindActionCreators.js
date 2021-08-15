const bindActionCreator = (dispatch, actionCreator) => (...args) =>
  dispatch(actionCreator(...args))

export default function bindActionCreators (dispatch, actionCreators) {
  const binds = {}

  if (typeof actionCreators !== 'object') {
    return binds
  }

  for (const action in actionCreators) {
    binds[action] = bindActionCreator(dispatch, actionCreators[action])
  }

  return binds
}
