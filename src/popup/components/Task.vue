<template>
  <el-form
    ref="elForm"
    :model="params"
    :rules="rules"
    style="padding: 0 16px;"
  >
    <el-form-item
      label="類型"
      prop="type"
    >
      <el-select
        v-model="params.type"
        :disabled="active"
      >
        <el-option
          label="重新啟用"
          value="enable"
        />
        <el-option
          label="更新排序"
          value="update"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="關閉時間"
      prop="close_time"
    >
      <el-time-select
        v-model="params.close_time"
        :disabled="active"
        :picker-options="pickerOptions"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        v-if="active"
        style="width: 100%;"
        type="danger"
        @click="handleClose"
      >
        關閉任務
      </el-button>
      <el-button
        v-else
        style="width: 100%;"
        type="primary"
        @click="handleStart"
      >
        開始任務
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import storage from '@/utils/storage'
import moment from 'moment'

export default {
  name: 'Task',
  data () {
    return {
      rules: {
        type: [
          { required: true, message: '請輸入類型', trigger: 'blur' },
        ],
        close_time: [
          { required: true, message: '請輸入關閉時間', trigger: 'blur' },
        ],
      },
      params: {
        type: '',
        close_time: '',
      },
      active: null,
      pickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:30',
      },
    }
  },
  async mounted () {
    const { type, close_time, active } = await storage.get(['type', 'close_time', 'active'])
    this.params = { type: type, close_time: close_time }
    this.active = active
  },
  methods: {
    handleStart () {
      this.$refs.elForm.validate(async status => {
        if (status) {
          const pages = await chrome.tabs.query({ url: 'https://*.591.com.tw/*' })
          if (!pages.length) {
            this.$message.error('尚未開啟591網站')
            return
          }

          if (pages.length > 1) {
            this.$message.error('請勿多開591網站')
            return
          }

          if (moment(this.params.close_time, 'HH:mm').isBefore(moment())) {
            this.$message.error('運行時間設置錯誤')
            return
          }

          const { username, password } = await storage.get(['username', 'password'])
          if (!username || !password) {
            this.$message.error('尚未配置帳號資訊')
            return
          }

          this.active = true
          await storage.set({ active: true, ...this.params })
        }
      })
    },
    handleClose () {
      this.active = false
      storage.set({ active: false })
    },
  },
}
</script>
