import storage from '@/utils/storage'

(async () => {
  const { type, active, delay } = await storage.get(['active', 'type', 'delay'])
  if (active && type === 'enable') {
    for (const item of document.querySelectorAll('#list > table > tbody > tr:not(:first-child) > td:first-child')) {
      const id = item.innerText.replace(/[^\d+]/, '')
      await fetch(`https://www.591.com.tw/index.php?module=furniture&action=optFurniture&post_id=${id}`)
    }
    setTimeout(() => {
      window.location.reload()
    }, (delay || 5) * 1000)
  }
})()
