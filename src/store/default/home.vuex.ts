interface HomeStateType {
  msg: string
}

const homeStore = {
  namespaced: true,

  state: {
    msg: 'this is a home vuex'
  },

  getters: {
    msg: (state: HomeStateType) => {
      return state.msg
    }
  },

  mutations: {
    setMsg(state: HomeStateType, msg: string) {
      state.msg = msg
    }
  }
}

export default homeStore