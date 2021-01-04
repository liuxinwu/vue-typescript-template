import { Module } from "vuex";

interface UserInfoType {
  name: string;
  age: number;
  sex: number;
}
interface UserStateType {
  userInfo: UserInfoType;
  token: string;
}

const userStore: Module<UserStateType, any> = {
  namespaced: true,

  state: {
    userInfo: {
      name: "Tome",
      age: 20,
      sex: 1,
    },
    token: "",
  },

  getters: {
    userInfo: (state) => state.userInfo,
    getToken: (state) => state.token,
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
};

export default userStore;
