// 读取本地存储数据（用户信息、token、权限等）并存到 Vuex 中

import store from "@/store"

export default (function() {
  const token = localStorage.getItem('token') || ''
  let permissions = localStorage.getItem('permissions') || '{}'
  permissions = JSON.parse(permissions)

  store.commit('userStore/setToken', token)
  store.commit('permissionsStore/setPermissions', permissions)
})()