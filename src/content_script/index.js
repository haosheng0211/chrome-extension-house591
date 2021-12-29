import Cookies from 'js-cookie'
import storage from '@/utils/storage'

setInterval(async () => {
  const { active, type } = await storage.get(['active', 'type'])
  if (!active) {
    return
  }

  if (!Cookies.get('cookie_login_user_id') && window.location.pathname !== '/user-login.html') {
    window.location.href = '/user-login.html'
    return
  }

  const action = new URL(window.location.href).searchParams.get('action')
  if (type === 'enable' && action !== 'expireList') {
    window.location.href = '/index.php?module=userCenter&action=expireList'
    return
  }

  if (type === 'update' && action !== 'furnitureList') {
    window.location.href = '/index.php?module=userCenter&action=furnitureList'
    return
  }
}, 1000)
