// 路由模块的配置方便统一引入

import { RouteConfig } from "vue-router";

export default {
  default: {
    module: require.context("./default", true, /\.router\.ts$/),
    routes: []
  },
  other: {
    module: require.context("./other", true, /\.router\.ts$/),
    routes: []
  }
} as {
  [index: string]: {
    module: __WebpackModuleApi.RequireContext
    routes: RouteConfig[]
  }
}
