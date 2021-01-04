<template>
  <div>
    <el-button @click="handleLogin">Login</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Request from '@/utils/requestInstance'
import { namespace } from "vuex-class"

const permissionsStore = namespace('permissionsStore')
const userStore = namespace('userStore')

@Component
export default class Login extends Vue {
  @permissionsStore.Mutation('setPermissions') setPermissions!: Function
  @userStore.Mutation('setToken') setToken!: Function

  async handleLogin() {
    const res = await Request.post('/login')
    const path = (this.$route.query.redirectUrl || '/') as string | undefined

    this.setToken(res.data.token)
    this.$router.replace({ path })
    
    try {
      const res = await Request.get('/promise')
      this.setPermissions(res.data)
    } catch (error) {
      console.error(error, '获取权限出错了')
    }
  }
}
</script>