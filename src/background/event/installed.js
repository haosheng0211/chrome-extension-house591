import storage from '@/utils/storage'

chrome.runtime.onInstalled.addListener(async () => {
  await storage.clear()
  await storage.set({ active: false })
})
