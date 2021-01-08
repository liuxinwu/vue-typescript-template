import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: "news1",
    name: "news1",
    component: () =>
      import(/* webpackChunkName: "news1" */ "@/views/other-page/news-module/news1/index.vue"),
    meta: {
      isLogin: true,
      isCache: true
    }
  },
  {
    path: "news2",
    name: "news2",
    component: () =>
      import(/* webpackChunkName: "news2" */ "@/views/other-page/news-module/news2/index.vue"),
    meta: {
      isLogin: true
    }
  }
]
export default routes