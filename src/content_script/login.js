import storage from '@/utils/storage'

(async () => {
  const url = new URL(window.location.href)
  if (url.searchParams.get('err')) {
    await storage.set({ active: false })
    window.location.href = '/user-login.html'
    return
  }

  if (document.querySelector('div.loginBoxBg')) {
    const { username, password, active } = await storage.get(['username', 'password', 'active'])
    if (active && username && password) {
      document.getElementById('cookie').click()
      document.getElementById('user-pwd').value = password
      document.getElementById('user-username').value = username
      document.getElementById('login_sub').click()
    }
  }
})()
