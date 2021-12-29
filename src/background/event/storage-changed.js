import badge from '@/utils/badge'
import storage from '@/utils/storage'
import moment from 'moment'

chrome.storage.onChanged.addListener(changes => {
  if (changes.active !== undefined) {
    const active = changes.active.newValue
    badge(active ? '開啟' : '關閉', active ? '#67C23A' : '#F56C6C')
    if (active) {
      chrome.tabs.query({ url: 'https://*.591.com.tw/*' }, result => {
        if (result.length === 1) {
          chrome.tabs.reload(result[0].id)
        }
      })
    }
  }
})

setInterval(async () => {
  const { close_time } = await storage.get(['close_time'])
  if (close_time && moment(close_time, 'HH:mm').isBefore(moment())) {
    await storage.set({ active: false })
  }
}, 1000)
