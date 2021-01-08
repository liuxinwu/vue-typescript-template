import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: "home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/default-page/test-module/home/index.vue")
  },
  {
    path: "home2",
    name: "Home2",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/default-page/test-module/home2/index.vue")
  }
]
export default routes