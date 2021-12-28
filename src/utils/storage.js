export default {
  get (items) {
    return new Promise(resolve => {
      chrome.storage.local.get(items, (items) => {
        resolve(items)
      })
    })
  },

  set (items) {
    return new Promise(resolve => {
      chrome.storage.local.set(items, () => {
        resolve()
      })
    })
  },

  clear () {
    return new Promise(resolve => {
      chrome.storage.local.clear(() => {
        resolve()
      })
    })
  },
}
