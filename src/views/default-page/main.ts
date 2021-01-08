import Vue from "vue";
import App from "./App.vue";
// 路由
import router from "@/router";
// Vuex
import store from "@/store";
// 国际化
import i18n from "@/i18n/index.ts";
// 自动设置 html 元素的大小 配合 postcss-pxtorem 实现响应式
// import "amfe-flexible";
// 加载 element-ui 组件
import "@/utils/useElement.ts";
// 配置主题
import "@/theme/index.css";
// 自定义指令
import coustomDirective from "@/directive/index";
// 自定插件
import coustomPlugin from "@/plugins/index";
// 请求
import request from "@/utils/requestInstance";
// 读取本地存储数据（用户信息、token、权限等）
import "@/utils/readyLocalStorage";

Vue.use(coustomDirective);
Vue.use(coustomPlugin);

Vue.config.productionTip = false;
Vue.prototype.$axios = request;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
