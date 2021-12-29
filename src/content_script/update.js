import storage from '@/utils/storage'

(async () => {
  const { type, active } = await storage.get(['active', 'type'])
  if (active && type === 'update') {
    for (const item of document.querySelectorAll('#list > table > tbody > tr:not(:first-child) > td:first-child')) {
      const id = item.innerText.replace(/[^\d+]/, '')
      await fetch(`https://www.591.com.tw/index.php?module=furniture&action=refreshFurniture&postid=${id}`)
    }
    setTimeout(() => {
      const next_button = document.querySelector('#GlobalPagebar a:last-child img[alt=下一頁]')
      if (next_button) {
        document.querySelector('#GlobalPagebar a:last-child img[alt=下一頁]').click()
      } else {
        storage.set({ active: false })
      }
    }, 2000)
  }
})()
