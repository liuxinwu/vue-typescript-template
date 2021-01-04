import { Module } from 'vuex'

interface PermissionsStateType {
  permissions: string[]
}

const permissionsStore: Module<PermissionsStateType, any> = {
  namespaced: true,

  state: {
    permissions: []
  },

  getters: {
    getPermissions: state => state.permissions
  },

  actions: {
    getPermissions({ commit }, params) {
      console.log(commit, params)
    }
  },

  mutations: {
    setPermissions(state, permissions) {
      state.permissions = permissions
      localStorage.setItem("permissions", JSON.stringify(permissions));
    }
  }
}

export default permissionsStore