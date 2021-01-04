import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: "list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "list" */ "@/views/other/list.vue"),
    meta: {
      isLogin: true
    }
  }
]
export default routes