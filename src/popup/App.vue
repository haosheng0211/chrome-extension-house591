<template>
  <div id="app">
    <el-tabs
      v-model="active"
      stretch
    >
      <el-tab-pane label="任務管理">
        <Task v-if="active === '0'" />
      </el-tab-pane>
      <el-tab-pane label="帳號管理">
        <User v-if="active === '1'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import User from '@/popup/components/User'
import Task from '@/popup/components/Task'

export default {
  name: 'App',
  components: { Task, User },
  data () {
    return {
      active: '0',
    }
  },
}
</script>
