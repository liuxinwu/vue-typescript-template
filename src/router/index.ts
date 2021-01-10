import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import routerConfig from "./config";
import gloablHook from "./globalHook"

const BaseLayout = () => import(/* webpackChunkName: "baseLayout" */ "@/layout/base.layout.vue");
const OtherLayout = () => import(/* webpackChunkName: "otherLayout" */ "@/layout/other.layout.vue");

Vue.use(VueRouter);

// 自动注册所有模块的路由
// 坑点：require.context 的参数不支持变量的形式传入
for (const key in routerConfig) {
  if (Object.prototype.hasOwnProperty.call(routerConfig, key)) {
    const config = routerConfig[key];
    const module = config.module
    
    module.keys().forEach((_: string) => {
      const routes: RouteConfig[] = module(_).default
      config.routes.push(...routes)
    })
  }
}

const routes: Array<RouteConfig> = [
  {
    path: "",
    name: "BaseLayout",
    component: BaseLayout,
    children: [
      ...routerConfig.default.routes
    ]
  },
  {
    path: "/other",
    name: "Other",
    component: OtherLayout,
    children: [
      ...routerConfig.other.routes
    ]
  },
  {
    path: '/login',
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/login.vue")
  },
  {
    path: '*',
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

gloablHook(router)

export default router;
