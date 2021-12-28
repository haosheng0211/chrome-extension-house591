import badge from '@/utils/badge'

chrome.storage.onChanged.addListener(changes => {
  if (changes.active !== undefined) {
    const active = changes.active.newValue
    badge(active ? '開啟' : '關閉', active ? '#67C23A' : '#F56C6C')
  }
})
