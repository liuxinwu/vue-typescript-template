import Vue from "vue";
import Vuex, { Module } from "vuex";

Vue.use(Vuex);

const modules: {
  [index: string]: Module<any, any>
} = {}
const commonModules = require.context("./common/", true, /\.vuex\.ts$/)
commonModules.keys().forEach(_ => {
  const store = commonModules(_).default
  // 模块名默认为 文件名 + Store
  let storeName = store.name 
  if (storeName === undefined) {
    storeName = _.match(/\/([a-zA-Z]+)\./)?.[1]

    if (storeName === undefined) {
      return console.error("没有找到改 vuex 模块")
    }

    storeName += "Store";
  } 

  modules[storeName] = store
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
