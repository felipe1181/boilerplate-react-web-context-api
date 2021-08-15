const handleLocalStorage = {
  saveItemLocalStorage (key, value) {
    try {
      if (key && value) {
        window.localStorage.setItem(key, JSON.stringify(value))
        return
      }
      throw new Error({ localStorage: 'Params empty' })
    } catch (error) {
      throw new Error({ localStorage: 'Error save' })
    }
  },
  getItemLocalStorage         (key) {
    try {
      if (key) {
        return JSON.stringify(window.localStorage.getItem(key))
      }
      throw new Error({ localStorage: 'Params empty' })
    } catch (error) {
      throw new Error({ localStorage: 'Error get' })
    }
  }
}

export default handleLocalStorage
