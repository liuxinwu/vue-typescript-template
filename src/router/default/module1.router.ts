import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: "home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/default/Home.vue")
  },
  {
    path: "home2",
    name: "Home2",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/default/Home2.vue")
  }
]
export default routes