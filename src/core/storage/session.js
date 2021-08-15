import handleLocalStorage from './handleLocalStorage'

const handleSession = {
  getSession () {
    return handleLocalStorage.getItemLocalStorage('session')
  },
  saveSession (payload) {
    return handleLocalStorage.getItemLocalStorage('session', payload)
  }
}

export default handleSession
