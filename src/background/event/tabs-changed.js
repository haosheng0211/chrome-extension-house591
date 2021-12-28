import storage from '@/utils/storage'

chrome.tabs.onUpdated.addListener(() => {
  active()
})

chrome.tabs.onActivated.addListener(() => {
  active()
})

const active = async () => {
  const { active } = await storage.get(['active'])

  if (!active) {
    return
  }

  const pages = await chrome.tabs.query({ url: 'https://*.591.com.tw/*' })

  if (!pages.length || pages.length > 1) {
    await storage.set({ active: false })
  }
}
