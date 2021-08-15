import Types from './types'

export default {
  [Types.SET_EXAMPLE]: (state, action) => {
    try {
      const { title, description } = action.payload

      return {
        ...state,
        title,
        description
      }
    } catch (error) {
      console.log('error', error)
      return state
    }
  }
}
