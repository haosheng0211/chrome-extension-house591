import Vue from 'vue'
import App from '@/popup/App.vue'
import '@/popup/assets/reset.css'
import '@/popup/assets/style.css'
import element from '@/popup/plugins/element'

Vue.use(element)

new Vue({
  render: h => h(App),
}).$mount('#app')
