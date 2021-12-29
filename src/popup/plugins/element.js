import { Button, Form, FormItem, Input, Message, Option, Select, TabPane, Tabs, TimeSelect } from 'element-ui'

export default {
  install (Vue) {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.prototype.$message = Message
    Vue.use(Option)
    Vue.use(Select)
    Vue.use(TabPane)
    Vue.use(Tabs)
    Vue.use(TimeSelect)
  },
}
