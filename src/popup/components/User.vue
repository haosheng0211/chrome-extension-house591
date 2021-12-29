<template>
  <el-form
    ref="elForm"
    :model="params"
    :rules="rules"
    style="padding: 0 16px;"
  >
    <el-form-item
      label="帳號"
      prop="username"
    >
      <el-input v-model="params.username" />
    </el-form-item>
    <el-form-item
      label="密碼"
      prop="password"
    >
      <el-input v-model="params.password" />
    </el-form-item>
    <el-form-item>
      <el-button
        style="width: 100%;"
        type="primary"
        @click="handleSubmit"
      >
        保存配置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import storage from '@/utils/storage'

export default {
  name: 'User',
  data () {
    return {
      rules: {
        username: [
          { required: true, message: '請輸入帳號', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' },
        ],
      },
      params: {
        username: '',
        password: '',
      },
    }
  },
  async mounted () {
    const { username, password } = await storage.get(['username', 'password'])
    this.params = { username, password }
  },
  methods: {
    handleSubmit () {
      this.$refs.elForm.validate(async status => {
        if (status) {
          await storage.set({ active: false, ...this.params })
          await this.$message.success('操作成功')
        }
      })
    },
  },
}
</script>
