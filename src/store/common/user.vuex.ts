interface UserInfoType {
  name: string
  age: number
  sex: number
}
interface UserStateType {
  userInfo: UserInfoType
  toekn: string
}

const userStore = {
  namespaced: true,
  
  state: {
    userInfo: {
      name: "Tome",
      age: 20,
      sex: 1
    },
    token: ''
  },

  getters: {
    userInfo: (state: UserStateType) => state.userInfo
  }
}

export default userStore